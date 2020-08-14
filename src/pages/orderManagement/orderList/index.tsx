import React, { useState, useRef } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Input, Button, Row, Col, message } from 'antd'
import ProTable from '@ant-design/pro-table'
import { DeleteOutlined, EditOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { queryTableData, deleteUsers } from './service'
import { newDate } from '@/utils/tool'
import { TableListItem } from './data.d'
import styles from './index.less'

const { Search } = Input

const OrderList: React.FC<TableListItem> = () => {
  const [Query, setquery] = useState('')
  const [addUserShow, setaddUserShow] = useState(false)
  const [judge, setjudge] = useState(false)
  const [amendUser, setamendUser] = useState('')
  const ref = useRef<any>()

  // 高级搜索
  const advancedSearch = (value: string) => {
    setquery(value)
    ref.current.reload()
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
      key: 'index',
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
      render: (_: any) => newDate(_),
    },
    {
      title: '操作',
      width: 140,
      render: (record: any) => {
        return (
          <div className={styles.buttonWrap}>
            <Button type="primary">
              <EditOutlined style={{ fontSize: '13px' }} />
            </Button>
            <Button type="primary">
              <EnvironmentOutlined style={{ fontSize: '13px' }} />
            </Button>
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
        request={async (params: any) => {
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
