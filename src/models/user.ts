import { Effect, Reducer } from 'umi'

// import { queryCurrent, query as queryUsers } from '@/services/user'

export interface CurrentUser {
  avatar?: string
  name?: string
  username?: string
  title?: string
  group?: string
  signature?: string
  tags?: {
    key: string
    label: string
  }[]
  userid?: string
  unreadCount?: number
}

export interface UserModelState {
  currentUser?: CurrentUser
}

export interface UserModelType {
  namespace: 'user'
  state: UserModelState
  effects: {
    // fetch: Effect
    fetchCurrent: Effect
  }
  reducers: {
    saveCurrentUser: Reducer<UserModelState>
    changeNotifyCount: Reducer<UserModelState>
  }
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
  },

  effects: {
    // *fetch(_, { call, put }) {
    //   const response = yield call(queryUsers)
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   })
    // },
    *fetchCurrent(_, { put }) {
      // const response = yield call(queryCurrent)  call,
      const adminData: any = localStorage.getItem('adminData')
      const adminData2: any = sessionStorage.getItem('adminData')
      let data = null
      if (adminData) {
        data = JSON.parse(adminData)
      } else {
        data = JSON.parse(adminData2)
      }
      yield put({
        type: 'saveCurrentUser',
        payload: data,
      })
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      }
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      }
    },
  },
}

export default UserModel
