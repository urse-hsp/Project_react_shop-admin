import request from 'umi-request'
import { QueryTableDataProps, DeleteUsersProps, GetGoodsProps } from './data'

// 请求用户列表
export async function queryTableData(params: QueryTableDataProps) {
  return request(`goods`, {
    method: 'get',
    params,
  })
}

// 删除用户
export async function deleteUsers(params: DeleteUsersProps) {
  return request(`goods/${params.goods_id}`, {
    method: 'delete',
  })
}

// 根据 ID 查询商品
export async function getGoods(params: GetGoodsProps) {
  return request(`goods/${params.id}`, {
    method: 'get',
  })
}
