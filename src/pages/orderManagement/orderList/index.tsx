import React, { useState, useRef } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Input, Button, Row, Col, Tag, message } from 'antd'
import ProTable from '@ant-design/pro-table'
import { EditOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { newDate } from '@/utils/tool'
import _ from 'lodash'
import { queryTableData, amendOrdeStatus, LogisticsInformation } from './service'
import OrdeStatus from './components/ordeStatus/index'
import Logistics from './components/logistics/index'
import styles from './index.less'

const { Search } = Input

const OrderList: React.FC<{}> = () => {
  const [Query, setquery] = useState('')
  const [showOrdeStatus, setshowOrdeStatus] = useState(false)
  const [showHideLogistics, setShowHideLogistics] = useState(false)
  const [OrdeData, setOrdeData] = useState<any>({})
  const [logisticsInformationList, setLogisticsInformationList] = useState<any>([])
  const ref = useRef<any>()

  // 高级搜索
  const advancedSearch = (value: string) => {
    setquery(value)
    ref.current.reload()
  }

  // 对话框取消回调，
  const onCancel = () => {
    setshowOrdeStatus(false)
    setShowHideLogistics(false)
  }

  // 显示修改对话框
  const showModal = (record: any) => {
    const data = _.cloneDeep(record)
    setOrdeData(data)
    setshowOrdeStatus(true)
  }

  // 确认修改状态
  const amendStatus = async (params: any) => {
    const { meta } = await amendOrdeStatus(params)
    if (meta.status !== 201) {
      return message.error(meta.msg)
    }
    message.success('修改成功')
    ref.current.reload()
    return setshowOrdeStatus(false)
  }

  // 显示物理信息对话框
  const showLogistics = async () => {
    setShowHideLogistics(true)
    const { meta, data } = await LogisticsInformation({ id: 1106975712662 })
    if (meta.status === 200) setLogisticsInformationList(data)
  }

  const title = (
    <Row>
      <Search placeholder="请输入内容" onSearch={(value: any) => advancedSearch(value)} size="large" allowClear />
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
      title: '订单支付',
      dataIndex: 'order_pay',
      key: 'order_pay',
      render: (payStatus: any) => {
        let pay
        if (payStatus === '0') {
          pay = <Tag color="red">未支付</Tag>
        } else if (payStatus === '1') {
          pay = <Tag color="orange">支付宝</Tag>
        } else if (payStatus === '2') {
          pay = <Tag color="green">微信</Tag>
        } else if (payStatus === '3') {
          pay = <Tag color="blue">银行卡</Tag>
        }
        return pay
      },
    },
    {
      title: '支付状态',
      dataIndex: 'pay_status',
      key: 'pay_status',
      render: (status: any) => {
        let pay
        if (status === '0') {
          pay = '未付款'
        } else if (status === '1') {
          pay = '已付款'
        }
        return pay
      },
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
      render: (time: any) => newDate(time),
    },
    {
      title: '操作',
      width: 140,
      render: (record: any) => {
        return (
          <div className={styles.buttonWrap}>
            <Button type="primary" onClick={() => showModal(record)}>
              <EditOutlined style={{ fontSize: '13px' }} />
            </Button>
            <Button type="primary" onClick={showLogistics}>
              <EnvironmentOutlined style={{ fontSize: '13px' }} />
            </Button>
          </div>
        )
      },
    },
  ]

  return (
    <PageHeaderWrapper>
      <ProTable
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
            current: params.current, // 当前页数
            pageSize: params.pageSize, // 当前每页显示多少条数据
          }
          const { data, meta } = await queryTableData(queryInfo)
          if (meta.status !== 200) return
          data.goods.map((item: any, index: any) => {
            const Obj = item
            Obj.key = item.order_id
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
      <OrdeStatus modalVisible={showOrdeStatus} onCancel={onCancel} OrdeData={OrdeData} amendStatus={amendStatus} />
      <Logistics modalVisible={showHideLogistics} onCancel={onCancel} logisticsInformationList={logisticsInformationList} />
    </PageHeaderWrapper>
  )
}

export default OrderList
