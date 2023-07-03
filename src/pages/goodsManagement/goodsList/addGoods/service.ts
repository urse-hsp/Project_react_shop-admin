import request from 'umi-request'
import type { GetGoodsClassifyparameterProps, AddTheGoodsProps, AmendGoodsProps } from './data'

// 请求用户列表
export async function getGoodsClassifyList() {
  return request(`categories`, {
    method: 'get',
  })
}

// 根据 ID 查询参数
export async function getGoodsClassifyparameter(params: GetGoodsClassifyparameterProps) {
  return request(`categories/${params.id}/attributes`, {
    method: 'get',
    params: { sel: params.sel },
  })
}

// 添加商品
export async function addTheGoods(params: AddTheGoodsProps) {
  return request(`goods`, {
    method: 'post',
    data: params,
  })
}

// 编辑提交商品
export async function amendGoods(params: AmendGoodsProps) {
  return request(`goods/${params.id}`, {
    method: 'put',
    data: params.data,
  })
}

// info
export async function getGoodsInfo(id: number) {
  return request(`goods/${id}`, {
    method: 'get',
  })
}
