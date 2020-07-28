import { Effect, history, Reducer } from 'umi'
import { message } from 'antd'
// import { parse } from 'qs'
import { getFakeCaptcha, login } from './service'

// 获取从那个路由推出的
// export function getPageQuery() {
//   return parse(window.location.href.split('?')[1])
// }

export function setAuthority(authority: any | any[]) {
  if (authority.autoLogin) {
    localStorage.setItem('adminData', JSON.stringify(authority.data))
  } else {
    window.sessionStorage.setItem('adminData', JSON.stringify(authority.data))
  }
  // export function setAuthority(authority: any) {
  // const proAuthority = typeof authority === 'string' ? [authority] : authority

  // hard code
  // reload Authorized component
  try {
    if ((window as any).reloadAuthorized) {
      ;(window as any).reloadAuthorized()
    }
  } catch (error) {
    // do not need do anything
  }

  return authority
}

export interface StateType {
  status?: 'ok' | 'error'
  type?: string
  currentAuthority?: 'user' | 'guest' | 'admin'
}

export interface ModelType {
  namespace: string
  state: StateType
  effects: {
    login: Effect
    getCaptcha: Effect
  }
  reducers: {
    changeLoginStatus: Reducer<StateType>
  }
  // subscriptions: {
  //   setup: Effect
  //   setupHistory: Effect
  // }
}

const Model: ModelType = {
  namespace: 'userAndlogin',

  state: {
    status: undefined,
  },

  // 触发器。setup表示初始化即调用,用于订阅某些数据源，
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     // eslint-disable-line
  //     // window.onresize = () => {
  //     //   const currentProduct = {
  //     //     name: '苹果5',
  //     //   }
  //     //   dispatch({
  //     //     type: 'product/updateList',
  //     //     payload: currentProduct,
  //     //   })
  //     // }
  //   },
  //   setupHistory({ dispatch, history }) {
  //     // eslint-disable-line
  //     history.listen((location) => {
  //       const user = JSON.parse(window.localStorage.getItem('antd-pro-authority'))
  //       console.log(user)
  //     })
  //   },
  // },

  // 异步方法
  effects: {
    *login({ payload }, { call, put }) {
      const param = {
        username: payload.userName,
        password: payload.password,
      }
      const response = yield call(login, param)
      if (response.meta.status !== 200) {
        message.error(`${response.meta.msg}!`)
        return
      }
      yield put({
        type: 'changeLoginStatus',
        payload: { ...response, autoLogin: payload.autoLogin },
      })
      // Login successfully
      if (response.meta.status === 200) {
        message.success('登录成功！')
        history.replace('/')
        // const urlParams = new URL(window.location.href)
        // const params = getPageQuery()
        // // 当前退出的路由路径
        // let { redirect } = params as { redirect: string }
        // if (redirect) {
        //   const redirectUrlParams = new URL(redirect)
        //   if (redirectUrlParams.origin === urlParams.origin) {
        //     redirect = redirect.substr(urlParams.origin.length)
        //     if (redirect.match(/^\/.*#/)) {
        //       redirect = redirect.substr(redirect.indexOf('#') + 1)
        //     }
        //   } else {
        //     window.location.href = redirect
        //     return
        //   }
        // }
        // history.replace(redirect || '/')
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload)
    },
  },

  // 同步：唯一可以修改state的地方，通过effect通过actions传入的值修改state 类似于vuex中mutation。
  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload)
      return {
        ...state,
        status: payload.meta.status,
      }
    },
  },
}

export default Model
