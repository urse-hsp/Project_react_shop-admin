import React, { useState } from 'react'
import { Card, Alert, Steps, Tabs } from 'antd'
import styles from './styles.less'

const { Step } = Steps
const { TabPane } = Tabs

const AddGoods: React.FC<{}> = () => {
  const [current, setCurrent] = useState(0)

  function callback(key) {
    console.log(key)
    setCurrent(key)
  }
  return (
    <Card>
      <Alert message="添加商品信息" type="warning" showIcon />
      <Steps current={current} size="small" type="default" className={styles.Steps}>
        <Step title="基本信息" />
        <Step title="商品参数" />
        <Step title="商品属性" />
        <Step title="商品图片" />
        <Step title="商品内容" />
        <Step title="完成" />
      </Steps>
      <Tabs defaultActiveKey={current} onChange={callback} tabPosition="left">
        <TabPane tab="基本信息" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="商品参数" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="商品属性" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="商品图片" key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab="商品内容" key="5">
          Content of Tab Pane 5
        </TabPane>
      </Tabs>
    </Card>
  )
}
export default AddGoods
