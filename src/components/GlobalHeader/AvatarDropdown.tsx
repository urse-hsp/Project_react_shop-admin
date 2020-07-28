import { LogoutOutlined, SettingOutlined, UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Avatar, Menu, Spin, Modal } from 'antd'
import React from 'react'
import { history, ConnectProps, connect } from 'umi'
import { ConnectState } from '@/models/connect'
import { CurrentUser } from '@/models/user'
import HeaderDropdown from '../HeaderDropdown'
import styles from './index.less'

const { confirm } = Modal

export interface GlobalHeaderRightProps extends Partial<ConnectProps> {
  currentUser?: CurrentUser
  menu?: boolean
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  onMenuClick = (event: {
    key: React.Key
    keyPath: React.Key[]
    item: React.ReactInstance
    domEvent: React.MouseEvent<HTMLElement>
  }) => {
    const { key } = event
    if (key === 'logout') {
      confirm({
        title: '是否确认退出登录',
        icon: <ExclamationCircleOutlined />,
        // content: 'Some descriptions',
        onOk: () => {
          localStorage.removeItem('adminData')
          sessionStorage.removeItem('adminData')
          const { dispatch } = this.props
          if (dispatch) {
            dispatch({
              type: 'login/logout',
            })
          }
        },
        onCancel() {
          // console.log('Cancel')
        },
      })
      return
    }

    history.push(`/account/${key}`)
  }

  render(): React.ReactNode {
    const { currentUser = { username: '' }, menu } = this.props
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    )
    return currentUser && currentUser.username ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar
            size="small"
            className={styles.avatar}
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            alt="avatar"
          />
          <span className={`${styles.name} anticon`}>{currentUser.username}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    )
  }
}

export default connect(({ user }: ConnectState) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown)
