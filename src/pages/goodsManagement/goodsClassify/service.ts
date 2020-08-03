import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'

export interface LoginParamsType {
  query: string
  pagenum: string
  pagesize: string
  id: number
  mg_state: boolean
  data: any
  goods_id: number
}

// 请求用户列表
export async function queryTableData() {
  return request(`${BASE_URL}categories`, {
    method: 'get'
  })
}

// 删除用户
export async function deleteUsers(params: LoginParamsType) {
  return request(`${BASE_URL}goods/${params.goods_id}`, {
    method: 'delete',
  })
}
