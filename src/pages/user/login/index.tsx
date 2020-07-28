// import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd'
import React, { useState } from 'react'
// import { Dispatch, Link, connect } from 'umi'
import { Dispatch, connect } from 'umi'
import { StateType } from './model'
import styles from './style.less'
import { LoginParamsType } from './service'
import LoginFrom from './components/Login'

// const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginFrom
const { Tab, UserName, Password, Submit } = LoginFrom

interface LoginProps {
  dispatch: Dispatch
  userAndlogin: StateType
  submitting?: boolean
}

const LoginMessage: React.FC<{
  content: string
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
)

const loginFormRules = {
  userName: [
    { required: true, message: '请输入用户名!' },
    { min: 5, max: 10, message: '账号长度在 5 到 10 个字符' },
  ],
  password: [
    { required: true, message: '请输入密码！' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符' },
  ],
}

const Login: React.FC<LoginProps> = (props) => {
  // useState 的用法是，需要传入一个参数作为状态的初始值，当函数执行后会返回两个值，一个是当前状态的属性，一个是修改状态的方法。
  const { userAndlogin = {}, submitting } = props
  const { status, type: loginType } = userAndlogin
  const [autoLogin, setAutoLogin] = useState(false)
  const [type, setType] = useState<string>('account')

  const handleSubmit = (values: LoginParamsType) => {
    const { dispatch } = props
    dispatch({
      type: 'userAndlogin/login',
      payload: {
        ...values,
        type,
        autoLogin,
      },
    })
  }
  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="账户或密码错误（admin/123456" />
          )}
          <UserName name="userName" placeholder="用户名 : admin" rules={loginFormRules.userName} />
          <Password name="password" placeholder="密码 : 123456" rules={loginFormRules.password} />
        </Tab>

        {/* <Tab key="mobile" tab="手机号登录">
          登录错误提示
          {status === 'error' && loginType === 'mobile' && !submitting && <LoginMessage content="验证码错误" />}
          <Mobile
            name="mobile"
            placeholder="手机号"
            rules={[
              { required: true, message: '请输入手机号！', },
              { pattern: /^1\d{10}$/, message: '手机号格式错误！', },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder="验证码"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="秒"
            rules={[
              { required: true, message: '请输入验证码！', },
            ]}
          />
        </Tab> */}
        <div>
          <Checkbox
            checked={autoLogin}
            onChange={(e) => {
              setAutoLogin(e.target.checked)
            }}
          >
            自动登录
          </Checkbox>
          {/* <a
            style={{ float: 'right', }}
          >
            忘记密码
          </a> */}
        </div>
        <Submit loading={submitting}>登录</Submit>
        {/* <div className={styles.other}>
          其他登录方式
          <AlipayCircleOutlined className={styles.icon} />
          <TaobaoCircleOutlined className={styles.icon} />
          <WeiboCircleOutlined className={styles.icon} />
          <Link className={styles.register} to="/user/register">
            注册账户
          </Link>
        </div> */}
      </LoginFrom>
    </div>
  )
}

export default connect(
  ({
    userAndlogin,
    loading,
  }: {
    userAndlogin: StateType
    loading: {
      effects: {
        [key: string]: boolean
      }
    }
  }) => ({
    userAndlogin,
    submitting: loading.effects['userAndlogin/login'],
  }),
)(Login)
