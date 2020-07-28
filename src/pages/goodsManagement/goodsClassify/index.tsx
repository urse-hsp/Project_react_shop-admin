import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card } from 'antd'

const GoodsClassify: React.FC<{}> = () => {
  return (
    <PageHeaderWrapper>
      <Card bordered={false}>商品参数</Card>
    </PageHeaderWrapper>
  )
}

export default GoodsClassify
