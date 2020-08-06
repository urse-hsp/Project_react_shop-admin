import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'
import { LoginParamsType, GetGoodsProps } from './data'

// 请求用户列表
export async function queryTableData(params: LoginParamsType) {
  return request(`${BASE_URL}goods`, {
    method: 'get',
    params,
  })
}

// 删除用户
export async function deleteUsers(params: LoginParamsType) {
  return request(`${BASE_URL}goods/${params.goods_id}`, {
    method: 'delete',
  })
}

// 根据 ID 查询商品
export async function getGoods(params: GetGoodsProps) {
  return request(`${BASE_URL}goods/${params.id}`, {
    method: 'get',
  })
}
