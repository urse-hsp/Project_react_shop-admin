import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'

export interface LoginParamsType {
  userName: string
  password: string
  mobile: string
  captcha: string
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/accounts', {
    method: 'POST',
    data: params,
  })
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`)
}

export async function login(params: LoginParamsType) {
  return request(`${BASE_URL}login`, {
    method: 'POST',
    data: params,
  })
}
