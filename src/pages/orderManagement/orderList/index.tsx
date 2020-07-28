import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card } from 'antd'

const OrderList: React.FC<{}> = () => {
  return (
    <PageHeaderWrapper>
      <Card bordered={false}>订单列表</Card>
    </PageHeaderWrapper>
  )
}

export default OrderList
