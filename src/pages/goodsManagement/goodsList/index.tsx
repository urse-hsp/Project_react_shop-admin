import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'

class Index extends React.Component<{}> {
  state = {}

  render() {
    const { children } = this.props
    return <PageHeaderWrapper title="商品列表">{children}</PageHeaderWrapper>
  }
}
export default Index
