import React, { useState, useRef } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Input, Button, Row, Col, message, Popconfirm } from 'antd'
import ProTable, { ActionType } from '@ant-design/pro-table'
import { PlusOutlined, DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { queryTableData, deleteUsers } from './service'
import { TableListItem } from './data.d'
import styles from './index.less'

const { Search } = Input

const GoodsList: React.FC<TableListItem> = () => {
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
      title: '商品名称',
      dataIndex: 'goods_name',
      key: 'goods_name',
    },
    {
      title: '商品价格(元)',
      dataIndex: 'goods_price',
      key: 'goods_price',
      width: 100,
    },
    {
      title: '商品重量',
      dataIndex: 'goods_weight',
      key: 'goods_weight',
      width: 100,
    },
    {
      title: '商品创建时间',
      dataIndex: 'add_time',
      key: 'add_time',
      width: 170,
    },
    {
      title: '操作',
      // dataIndex: 'address',
      // key: 'address',
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
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            添加商品
          </Button>,
        ]}
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
            Obj.key = item.goods_id
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

export default GoodsList
