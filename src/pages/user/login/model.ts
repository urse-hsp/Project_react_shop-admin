import { Effect, history, Reducer } from 'umi'
import { message } from 'antd'
// import { parse } from 'qs'
import { getFakeCaptcha, login } from './service'

// 获取从那个路由推出的
// export function getPageQuery() {
//   return parse(window.location.href.split('?')[1])
// }

export function setAuthority(data: any | any[]) {
  if (data.id) {
    localStorage.setItem('adminData', JSON.stringify(data))
  } else {
    window.sessionStorage.setItem('adminData', JSON.stringify(data))
  }
  // hard code
  // reload Authorized component
  try {
    if ((window as any).reloadAuthorized) {
      ;(window as any).reloadAuthorized()
    }
  } catch (error) {
    // do not need do anything
  }

  return data
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
      if (!response) return

      yield put({
        type: 'changeLoginStatus',
        payload: { ...response, autoLogin: payload.autoLogin },
      })
      // Login successfully
      message.success('登录成功！')
      history.replace('http://www.baidu.com')
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
