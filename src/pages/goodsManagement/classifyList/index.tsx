import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card } from 'antd'

const ClassifyList: React.FC<{}> = () => {
  return (
    <PageHeaderWrapper>
      <Card bordered={false}>分类参数</Card>
    </PageHeaderWrapper>
  )
}

export default ClassifyList
