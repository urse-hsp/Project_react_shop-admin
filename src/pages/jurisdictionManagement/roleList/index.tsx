import React, { useState, useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Table, Tag, Divider, Row, Col, Button, Popconfirm, message, Modal } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  CaretRightOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import AddRoleFrom from './components/addRole'
import { getroleList, deleteRoleList, deleteRoleJurisdiction } from './service'
import styles from './style.less'

const { confirm } = Modal

// interface Member {
//   RoleData: any
// }

const RoleList: React.FC<{}> = () => {
  const [RoleData, setRoleList] = useState([])
  const [Visible, setVisible] = useState(false)
  const [alterAdd, setAlterAdd] = useState(false)

  // 循环递归给每个数据添加key值
  const recursion = (datas: any) => {
    datas.forEach((item: any, index: number) => {
      const Obj = item
      Obj.key = index + 1
      if (item.children) {
        recursion(item.children)
      }
      return Obj
    })
  }

  // 获取角色列表
  const getRoleListData = async () => {
    const res = await getroleList()
    if (res.meta.status === 200) {
      recursion(res.data)
      setRoleList(res.data)
    }
  }

  // tab标签关闭时的回调，删除指定角色权限
  // const showDeleteConfirm = () => {
  //   console.log(123)
  //   confirm({
  //     title: 'Are you sure delete this task?',
  //     icon: <QuestionCircleOutlined />,
  //     content: 'Some descriptions',
  //     okText: 'Yes',
  //     okType: 'danger',
  //     cancelText: 'No',
  //     onOk() {
  //       console.log('OK')
  //     },
  //     onCancel() {
  //       console.log('Cancel')
  //     },
  //   })
  // }

  // 递归循环出角色权限
  const expandedRowRender = (record: any) => {
    return record.children.map((item: any, index: any) => {
      let recordData = null
      if (item.children) {
        recordData = (
          <Row key={item.id} className={styles.parameter}>
            <Col span={5}>
              <Tag
                color="blue"
                closable
                onClose={() => {
                  // showDeleteConfirm()
                }}
              >
                {item.authName}
              </Tag>
              <CaretRightOutlined style={{ fontSize: '11px' }} />
            </Col>
            <Col span={19}>{expandedRowRender(item)}</Col>
            {record.children.length === index + 1 ? '' : <Divider />}
          </Row>
        )
      } else {
        recordData = (
          <Tag color="orange" closable key={item.id}>
            {item.authName}
          </Tag>
        )
      }
      return recordData
    })
  }

  // 隐藏对话框
  const onCancel = () => {
    setVisible(false)
  }

  // 点击添加角色，显示对话框
  const addRole = (boole: boolean) => {
    setVisible(true)
    setAlterAdd(boole)
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

  useEffect(() => {
    getRoleListData()
  }, [])

  const title = (
    <Button type="primary" onClick={() => addRole(false)}>
      添加角色
    </Button>
  )
  const columns = [
    { title: '', dataIndex: 'key', key: 'key', width: 50 },
    { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
    { title: '角色描述', dataIndex: 'roleDesc', key: 'roleDesc' },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      width: 320,
      render: (_: any) => {
        return (
          <div className={styles.operate}>
            <Button
              type="link"
              icon={<EditOutlined style={{ fontSize: '13px' }} />}
              size="small"
              onClick={() => addRole(true)}
            >
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
            <Button type="link" icon={<SettingOutlined style={{ fontSize: '13px' }} />} size="small">
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
            childrenColumnName: ' ', // indentSize: 200,
            expandedRowRender: (record) => <div style={{ margin: 0 }}>{expandedRowRender(record)}</div>,
            rowExpandable: (record) => record.children.length > 0,
          }}
          dataSource={RoleData}
          pagination={{
            hideOnSinglePage: true,
          }}
        />
        <AddRoleFrom modalVisible={Visible} onCancel={onCancel} alterAdd={alterAdd} />
      </Card>
    </PageHeaderWrapper>
  )
}

export default RoleList
