/* 一些常量值的模块 */

// 后台接口前缀
export const BASE_URL = 'http://127.0.0.1:8888/api/private/v1/'

export const Token = () => {
  const adminData: any = window.localStorage.getItem('adminData')
  const adminData2: any = window.sessionStorage.getItem('adminData')
  let token: any = null
  if (adminData) {
    token = JSON.parse(adminData).token
  } else if (adminData2) {
    token = JSON.parse(adminData2).token
  }
  return token
}
