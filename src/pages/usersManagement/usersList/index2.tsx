import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Input, Button, Row, Col, Tooltip, Switch, message, Popconfirm } from 'antd'
import ProTable from '@ant-design/pro-table'
import { PlusOutlined, DeleteOutlined, SettingOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { queryTableData, changeTypes, deleteUsers, addUsers, changeUsers } from './service'
import { TableListItem } from './data.d'
import CreateForm from './components/CreateForm'

import styles from './index.less'

const { Search } = Input

class UsersList extends React.Component<TableListItem> {
  state = {
    query: '',
    addUserShow: false,
    judge: false,
    amendUser: '',
  }

  actionRef = React.createRef<any>()

  // 修改用户状态
  changeType = async (record: any) => {
    const { meta } = await changeTypes(record)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success(meta.msg)
    this.actionRef.current.reload()
  }

  // 高级搜索
  advancedSearch = (value: string) => {
    this.setState({ query: value }, () => {
      this.actionRef.current.reload()
    })
  }

  // 删除用户
  deleteUser = async (record: any) => {
    console.log(record)
    const { meta } = await deleteUsers(record)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success(meta.msg)
    this.actionRef.current.reload()
  }

  // 对话框，取消回调
  onCancel = () => {
    this.setState({
      addUserShow: false,
    })
  }

  // 修改用户信息 显示添加对话框
  addUsersShow = (bool: any, record: any) => {
    this.setState(
      {
        addUserShow: true,
        judge: bool,
        amendUser: record,
      },
      () => {},
    )
  }

  createUsers = async (data: any) => {
    if (this.state.judge) {
      const { meta } = await changeUsers(data, this.state.amendUser)
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
    this.actionRef.current.reload()
    this.setState({
      addUserShow: false,
    })
  }

  render() {
    const title = (
      <Row>
        <Search placeholder="请输入内容" onSearch={(value) => this.advancedSearch(value)} size="large" allowClear />
      </Row>
    )
    const columns = [
      {
        title: '#',
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
              <Switch defaultChecked={_} onChange={() => this.changeType(record)} />
            </>
          )
        },
      },
      {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
        width: 180,
        render: (_: any, record: any) => {
          return (
            <div className={styles.buttonWrap}>
              <Button type="primary" onClick={() => this.addUsersShow(true, record)}>
                <EditOutlined style={{ fontSize: '13px' }} />
              </Button>
              <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />} onConfirm={() => this.deleteUser(record)}>
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
        <Card bordered={false}>
          <ProTable
            actionRef={this.actionRef}
            rowKey="key"
            columns={columns}
            bordered
            search={false}
            options={{ setting: false }}
            headerTitle={title}
            toolBarRender={() => [
              <Button key="3" type="primary" onClick={() => this.addUsersShow(false, '')}>
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
                query: this.state.query,
                current: params.current, // 当前页数
                pageSize: params.pageSize, // 当前每页显示多少条数据
              }
              const { data, meta } = await queryTableData(queryInfo)
              if (meta.status !== 200) return
              data.users.forEach((item: any, index: any) => {
                const Obj = item
                Obj.key = item.id
                Obj.index = index + 1
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
            modalVisible={this.state.addUserShow}
            onCancel={this.onCancel}
            judge={this.state.judge}
            createUsers={this.createUsers}
            amendUser={this.state.amendUser}
          />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default UsersList
