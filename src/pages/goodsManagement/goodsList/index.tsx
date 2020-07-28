import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card } from 'antd'

const GoodsList: React.FC<{}> = () => {
  return (
    <PageHeaderWrapper>
      <Card bordered={false}>商品列表</Card>
    </PageHeaderWrapper>
  )
}

export default GoodsList
