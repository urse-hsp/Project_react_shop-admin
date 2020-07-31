import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'

export interface LoginParamsType {
  query: string
  pagenum: string
  pagesize: string
  id: number
  mg_state: boolean
  data: any
}

// 请求用户列表
export async function queryTableData(params: LoginParamsType) {
  return request(`${BASE_URL}orders`, {
    method: 'get',
    params,
  })
}

// 删除用户
export async function deleteUsers(params: LoginParamsType) {
  return request(`${BASE_URL}users/${params.id}`, {
    method: 'delete',
  })
}
