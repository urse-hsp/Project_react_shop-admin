import React, { useState, useRef } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Input, Button, Row, Col, Tooltip, Switch, message, Popconfirm } from 'antd'
import ProTable, { ActionType } from '@ant-design/pro-table'
import { PlusOutlined, DeleteOutlined, SettingOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { queryTableData, changeTypes, deleteUsers, addUsers, changeUsers } from './service'
import { TableListItem } from './data.d'
import CreateForm from './components/CreateForm'
import styles from './index.less'

const { Search } = Input

const UsersList: React.FC<TableListItem> = () => {
  const [Query, setquery] = useState('')
  const [addUserShow, setaddUserShow] = useState(false)
  const [judge, setjudge] = useState(false)
  const [amendUser, setamendUser] = useState('')
  const ref = useRef<ActionType>()

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
  }

  // 修改用户信息 显示添加对话框
  const addUsersShow = (bool: any, record: any) => {
    setaddUserShow(true)
    setjudge(bool)
    setamendUser(record)
  }

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

  const title = (
    <Row>
      <Col span={8}>
        <Search placeholder="请输入内容" onSearch={(value) => advancedSearch(value)} size="large" allowClear />
      </Col>
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
              <Button type="primary">
                <SettingOutlined style={{ fontSize: '13px' }} />
              </Button>
            </Tooltip>
          </div>
        )
      },
    },
  ]

  return (
    <PageHeaderWrapper>
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
      <CreateForm
        modalVisible={addUserShow}
        onCancel={onCancel}
        judge={judge}
        createUsers={createUsers}
        amendUser={amendUser}
      />
      {/* </Card> */}
    </PageHeaderWrapper>
  )
}

export default UsersList
