import React, { useState, useRef } from 'react'
// import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Input, Button, Row, Col, Tooltip, Switch, message, Popconfirm } from 'antd'
import ProTable from '@ant-design/pro-table'
import { PlusOutlined, DeleteOutlined, SettingOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { queryTableData, changeTypes, deleteUsers, addUsers, changeUsers, getRoles, allocationRole } from './service'
import AllocationRole from './components/Role'
import CreateForm from './components/CreateForm'
import { TableListItem } from './data.d'

import styles from './index.less'

const { Search } = Input

const UsersList: React.FC<TableListItem> = () => {
  const [Query, setquery] = useState('') // 按需搜索的条件
  const [addUserShow, setaddUserShow] = useState(false) // 显示添加用户，修改用户对话框
  const [judge, setjudge] = useState(false) // 传递子组件，双方判断是 修改还是添加，显示对话框
  const [amendUser, setamendUser] = useState<any>('') // 用户的数据

  const [showRole, setshowRole] = useState(false) // 用户的数据
  const [RoleData, setRoleData] = useState(false) // 用户的数据
  const [RoleDataList, setRoleDataList] = useState([]) // 角色列表数据

  const ref = useRef<any>()

  // 修改用户状态
  const changeType = async (record: any) => {
    const { meta } = await changeTypes(record)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success(meta.msg)
    ref.current.reload()
    return null
  }

  // 高级搜索
  const advancedSearch = (value: string) => {
    setquery(value)
    ref.current.reload()
  }

  // 删除用户
  const deleteUser = async (record: any) => {
    const { meta } = await deleteUsers(record)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success(meta.msg)
    ref.current.reload()
    return null
  }

  // 对话框，取消回调
  const onCancel = () => {
    setaddUserShow(false)
    setshowRole(false)
  }

  // 修改用户信息 显示添加对话框
  const addUsersShow = (bool: any, record: any) => {
    setaddUserShow(true)
    setjudge(bool)
    setamendUser(record)
  }

  // 添加和修改用户
  const createUsers = async (data: any) => {
    if (judge) {
      const { meta } = await changeUsers(data, amendUser)
      if (meta.status !== 200) {
        message.error(meta.msg)
      }
      message.success(meta.msg)
    } else {
      const { meta } = await addUsers(data)
      if (meta.status !== 201) {
        message.error(meta.msg)
      }
      message.success(meta.msg)
    }

    ref.current.reload()
    setaddUserShow(false)
  }

  // 分配角色对话框
  const showRoleBox = async (Data: any) => {
    const { data, meta } = await getRoles()
    if (meta.status === 200) {
      setRoleDataList(data)
    }
    setRoleData(Data)
    setshowRole(true)
  }

  const allocationUserRole = async (id: number, Role: any) => {
    const { meta } = await allocationRole({ id, Role })
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success('分配角色成功')
    setshowRole(false)
    return ref.current.reload()
  }

  const title = (
    <Row>
      <Search placeholder="请输入内容" onSearch={(value) => advancedSearch(value)} size="large" allowClear />
    </Row>
  )
  const columns = [
    {
      title: '',
      dataIndex: 'index',
      width: 50,
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'id',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '电话',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '角色',
      dataIndex: 'role_name',
      key: 'role_name',
    },
    {
      title: '状态',
      dataIndex: 'mg_state',
      key: 'mg_state',
      render: (_: any, record: any) => {
        return (
          <>
            <Switch defaultChecked={_} onChange={() => changeType(record)} />
          </>
        )
      },
    },
    {
      title: '操作',
      dataIndex: 'address',
      key: 'address',
      width: 200,
      render: (_: any, record: any) => {
        return (
          <div className={styles.buttonWrap}>
            <Button type="primary" onClick={() => addUsersShow(true, record)}>
              <EditOutlined style={{ fontSize: '13px' }} />
            </Button>
            <Popconfirm
              placement="topRight"
              title="确定要删除该用户吗？"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={() => deleteUser(record)}
            >
              <Button type="primary" danger>
                <DeleteOutlined style={{ fontSize: '13px' }} />
              </Button>
            </Popconfirm>
            <Tooltip placement="top" title="分配角色">
              <Button type="primary" onClick={() => showRoleBox(record)}>
                <SettingOutlined style={{ fontSize: '13px' }} />
              </Button>
            </Tooltip>
          </div>
        )
      },
    },
  ]

  return (
    <div>
      {/* <Card bordered={false}> */}
      <ProTable<TableListItem>
        rowKey="key"
        actionRef={ref}
        columns={columns}
        bordered
        search={false}
        options={{ setting: false }}
        headerTitle={title}
        toolBarRender={() => [
          <Button key="3" type="primary" onClick={() => addUsersShow(false, '')}>
            <PlusOutlined />
            添加用户
          </Button>,
        ]}
        pagination={{
          defaultPageSize: 2,
          pageSizeOptions: ['2', '5', '8', '12'],
          showQuickJumper: true,
        }}
        request={async (params) => {
          const queryInfo = {
            query: Query,
            pagenum: params.current, // 当前页数
            pagesize: params.pageSize, // 当前每页显示多少条数据
          }

          const { data, meta } = await queryTableData(queryInfo)
          if (meta.status !== 200) return
          data.users.map((item: any, index: any) => {
            const Obj = item
            Obj.key = item.id
            Obj.index = index + 1
            return Obj
          })
          const result = {
            data: data.users,
            total: data.total,
            success: true,
            pageSize: params.pageSize,
            current: params.current,
          }
          return result
        }}
      />
      <CreateForm modalVisible={addUserShow} onCancel={onCancel} judge={judge} createUsers={createUsers} amendUser={amendUser} />
      <AllocationRole
        modalVisible={showRole}
        onCancel={onCancel}
        roleData={RoleData}
        RoleDataList={RoleDataList}
        allocationUserRole={allocationUserRole}
      />
      {/* </Card> */}
    </div>
  )
}

export default UsersList
