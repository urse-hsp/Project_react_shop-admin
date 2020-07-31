import React, { useState, useRef } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Input, Button, Row, Col, message, Popconfirm } from 'antd'
import ProTable, { ActionType } from '@ant-design/pro-table'
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { queryTableData, deleteUsers } from './service'
import { TableListItem } from './data.d'
import styles from './index.less'

const { Search } = Input

const OrderList: React.FC<TableListItem> = () => {
  const [Query, setquery] = useState('')
  const [addUserShow, setaddUserShow] = useState(false)
  const [judge, setjudge] = useState(false)
  const [amendUser, setamendUser] = useState('')
  const ref = useRef<ActionType>()

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
      title: '订单编号',
      dataIndex: 'order_number',
      key: 'order_number',
    },
    {
      title: '订单价格',
      dataIndex: 'order_price',
      key: 'order_price',
    },
    {
      title: '是否付款',
      dataIndex: 'order_pay',
      key: 'order_pay',
    },
    {
      title: '是否发货',
      dataIndex: 'is_send',
      key: 'is_send',
    },
    {
      title: '下单时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '操作',
      width: 140,
      render: (_: any, record: any) => {
        return (
          <div className={styles.buttonWrap}>
            <Button type="primary">
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
          </div>
        )
      },
    },
  ]

  return (
    <PageHeaderWrapper>
      <ProTable<TableListItem>
        rowKey="key"
        actionRef={ref}
        columns={columns}
        bordered
        search={false}
        options={{ setting: false }}
        headerTitle={title}
        pagination={{
          defaultPageSize: 10,
          pageSizeOptions: ['5', '10', '15', '20'],
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
          data.goods.map((item: any, index: any) => {
            const Obj = item
            Obj.key = item.user_id
            Obj.index = index + 1
            return Obj
          })
          const result = {
            data: data.goods,
            total: data.total,
            success: true,
            pageSize: params.pageSize,
            current: params.current,
          }
          return result
        }}
      />
    </PageHeaderWrapper>
  )
}

export default OrderList
