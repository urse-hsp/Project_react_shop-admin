import { MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, SelectLang, useIntl, ConnectProps, connect, history } from 'umi'
import React, { useEffect } from 'react'
import { ConnectState } from '@/models/connect'
import DefaultFooter from '@/components/DefaultFooter'
import logo from '../assets/logo.svg'
import styles from './UserLayout.less'

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem
  }
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props
  const { routes = [] } = route
  const {
    children,
    location = {
      pathname: '',
    },
  } = props
  const { formatMessage } = useIntl()
  const { breadcrumb } = getMenuData(routes)
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  })
  useEffect(() => {
    // 初始布局获取管理员数据
    const adminData = localStorage.getItem('adminData')
    const adminData2 = sessionStorage.getItem('adminData')

    if (adminData !== null || adminData2 !== null) {
      history.replace('/')
    }
  })
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Ant Design</span>
              </Link>
            </div>
            <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范啊</div>
          </div>
          {children}
        </div>
        {DefaultFooter}
      </div>
    </HelmetProvider>
  )
}

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout)
