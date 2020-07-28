import React from 'react'
import { DefaultFooter } from '@ant-design/pro-layout'
import { GithubOutlined } from '@ant-design/icons'

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 蚂蚁金服体验技术部出品牛逼`}
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro1',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design2',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
)
export default defaultFooterDom
