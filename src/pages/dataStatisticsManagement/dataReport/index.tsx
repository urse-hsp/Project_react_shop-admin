import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card } from 'antd'

const DataReport: React.FC<{}> = () => {
  return (
    <PageHeaderWrapper>
      <Card bordered={false}>数据统计</Card>
    </PageHeaderWrapper>
  )
}

export default DataReport