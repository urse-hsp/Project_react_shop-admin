import React, { useState, useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Table, Tag, Divider, Row, Col, Button, Popconfirm, message, Modal } from 'antd'
import { EditOutlined, DeleteOutlined, SettingOutlined, CaretRightOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import AddRoleFrom from './components/addRole'
import Allocation from './components/allocation'
import { getroleList, deleteRoleList, deleteRoleJurisdiction, AddRoleList, amendRoleList, getAllJurisdiction, setRolejurisdiction } from './service'
import styles from './style.less'

const { confirm } = Modal

// interface Member {
//   // RoleData: any
//   id: any
// }

const RoleList: React.FC<{}> = () => {
  const [RoleData, setRoleData] = useState([]) // 列表数据
  const [Visible, setVisible] = useState(false) // 添加修改对话框显示
  const [alterAdd, setAlterAdd] = useState(false) // 传递判断是修改还是添加
  const [amendData, setamendData] = useState({}) // 添加对话框，分配权限对话框。传递当行的数据
  const [showAllocation, setShowAllocation] = useState(false) // 分配权限对话框
  const [AllocationJurisdiction, setAllocationJurisdiction] = useState([]) // 查询的全部权限
  const [jurisdictionList, setJurisdictionList] = useState<any>([]) // 分配权限的对话框 现有权限数据
  const [setRoleId, setSetRoleId] = useState<number>() // 分配权限的对话框 现有权限数据

  const aJurisdictionList: any[] = []

  // 循环递归给每个数据添加key值   参数二false时 是判断分配权限的
  const recursion = (datas: any, jurisdiction: boolean) => {
    datas.map((item: any, index: number) => {
      if (jurisdiction) {
        aJurisdictionList.push(item.id)
        setJurisdictionList(aJurisdictionList)
      }
      const Obj = item
      Obj.key = item.id
      Obj.key2 = index + 1
      Obj.title = item.authName
      if (item.children) {
        recursion(item.children, jurisdiction)
      }
      return Obj
    })
  }

  // 获取角色列表
  const getRoleListData = async () => {
    const res = await getroleList()
    if (res.meta.status === 200) {
      recursion(res.data, false)
      setRoleData(res.data)
    }
  }

  // tab标签关闭时的回调，删除指定角色权限
  const showDeleteConfirm = async (recordId: any, itemId: number, e: any) => {
    e.preventDefault()
    confirm({
      title: '确定要删除该角色此限权?',
      icon: <QuestionCircleOutlined style={{ color: 'red' }} />,
      // content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        const recordIds = recordId.id
        const { meta } = await deleteRoleJurisdiction({ recordIds, itemId })
        if (meta.status !== 200) {
          return message.error(meta.msg)
        }
        message.success('删除该限权成功')
        getRoleListData()
        return true
      },
      onCancel() {},
    })
  }

  // 隐藏对话框
  const onCancel = () => {
    setVisible(false)
    setShowAllocation(false)
    setJurisdictionList([])
  }

  // 点击添加角色，显示对话框
  const addRole = (boole: boolean, data: any) => {
    setVisible(true)
    setAlterAdd(boole)
    if (boole) {
      setamendData(data)
    }
  }

  // 删除角色
  const removeConfirm = async (_: any) => {
    const { meta } = await deleteRoleList(_.id)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success('删除成功')
    getRoleListData()
    return null
  }

  // 添加角色和修改角色
  const addRoleList = async (param: any) => {
    if (!alterAdd) {
      const { meta } = await AddRoleList(param)
      if (meta.status !== 201) {
        return message.error(meta.msg)
      }
      message.success('角色创建成功')
    } else {
      const { id } = amendData
      const { meta } = await amendRoleList({ id, param })
      if (meta.status !== 200) {
        return message.error(meta.msg)
      }
      message.success('角色修改成功')
    }
    setVisible(false)
    getRoleListData()
    return true
  }

  // 显示分配权限对话框
  const showAllocationJurisdiction = async (datas: any) => {
    setSetRoleId(datas.id)
    setShowAllocation(true)
    recursion(datas.children, true)
    const { data, meta } = await getAllJurisdiction()
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    recursion(data, false)
    setAllocationJurisdiction(data)
    return true
  }

  // 设置角色权限
  const setRole = async (jurisdictionId: any) => {
    const { meta } = await setRolejurisdiction({ setRoleId, jurisdictionId })
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success('授权成功')
    setShowAllocation(false)
    getRoleListData()
    return true
  }

  useEffect(() => {
    getRoleListData()
  }, [])

  // 递归循环出角色权限
  const expandedRowRender = (record: any, record2: any) => {
    return record.children.map((item: any, index: any) => {
      let recordData = null
      if (item.children) {
        recordData = (
          <Row key={item.id} className={styles.parameter}>
            <Col span={5}>
              <Tag color="blue" closable onClose={(e: any) => showDeleteConfirm(record2, item.id, e)}>
                {item.authName}
              </Tag>
              <CaretRightOutlined style={{ fontSize: '11px' }} />
            </Col>
            <Col span={19}>{expandedRowRender(item, record2)}</Col>
            {record.children.length === index + 1 ? '' : <Divider />}
          </Row>
        )
      } else {
        recordData = (
          <Tag color="orange" closable key={item.id} onClose={(e: any) => showDeleteConfirm(record2, item.id, e)}>
            {item.authName}
          </Tag>
        )
      }
      return recordData
    })
  }

  const title = (
    <Button type="primary" onClick={() => addRole(false, null)}>
      添加角色
    </Button>
  )
  const columns = [
    { title: '', dataIndex: 'key2', key: 'key2', width: 50 },
    { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
    { title: '角色描述', dataIndex: 'roleDesc', key: 'roleDesc' },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      width: 320,
      render: (_: any, data: any) => {
        return (
          <div className={styles.operate}>
            <Button type="link" icon={<EditOutlined style={{ fontSize: '13px' }} />} size="small" onClick={() => addRole(true, data)}>
              编辑
            </Button>
            <Popconfirm
              placement="topRight"
              title="确定要删除该角色吗"
              onConfirm={() => removeConfirm(_)}
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            >
              <Button type="link" danger icon={<DeleteOutlined style={{ fontSize: '13px' }} />} size="small">
                Delete
              </Button>
            </Popconfirm>
            <Button type="link" icon={<SettingOutlined style={{ fontSize: '13px' }} />} size="small" onClick={() => showAllocationJurisdiction(data)}>
              分配权限
            </Button>
          </div>
        )
      },
    },
  ]

  return (
    <PageHeaderWrapper>
      <Card bordered={false} title={title}>
        <Table
          columns={columns}
          bordered
          expandable={{
            childrenColumnName: ' ',
            expandedRowRender: (record) => <div style={{ margin: 0 }}>{expandedRowRender(record, record)}</div>,
            rowExpandable: (record) => record.children.length > 0,
          }}
          dataSource={RoleData}
          pagination={{
            hideOnSinglePage: true,
          }}
        />
        <AddRoleFrom modalVisible={Visible} onCancel={onCancel} alterAdd={alterAdd} amendData={amendData} addRoleLists={addRoleList} />
        <Allocation
          modalVisible={showAllocation}
          onCancel={onCancel}
          AllocationJurisdiction={AllocationJurisdiction}
          jurisdictionLists={jurisdictionList}
          setRole={setRole}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default RoleList
