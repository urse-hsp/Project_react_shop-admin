import request from 'umi-request'

export interface ParamsType {
  userName: string
  password: string
  mobile: string
  captcha: string
}

export async function getJurisdictionList() {
  return request(`rights/list`)
}
