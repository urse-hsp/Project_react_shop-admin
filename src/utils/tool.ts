/* 一些常量值的模块 */

// http://127.0.0.1:8888/api/private/v1/
export const BASE_URL = 'http://127.0.0.1:7001/api/private/v1/'

// 获取Token
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

// 时间戳转换 1
export const TimeDate = (Time: any) => {
  if (!Time) return ''
  const date = new Date(Time)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
}

// 时间戳转换 2
export const newDate = (Time: any) => {
  if (!Time) return ''
  const date = new Date(Time)
  const Y = date.getFullYear()
  const M = JSON.stringify(date.getMonth() + 1).padStart(2, '0')
  const D = JSON.stringify(date.getDate()).padStart(2, '0')
  const hh = JSON.stringify(date.getHours()).padStart(2, '0')
  const mm = JSON.stringify(date.getMinutes()).padStart(2, '0')
  const ss = JSON.stringify(date.getSeconds()).padStart(2, '0')
  return `${Y}-${M}-${D}  ${hh}-${mm}-${ss}`
}
