import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'

export interface ParamsType {
  userName: string
  password: string
  mobile: string
  captcha: string
}

export async function getJurisdictionList() {
  return request(`${BASE_URL}rights/list`)
}
