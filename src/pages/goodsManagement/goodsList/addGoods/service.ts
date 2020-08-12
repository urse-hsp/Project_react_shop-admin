import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'
import { GetGoodsClassifyparameterProps, AddTheGoodsProps, AmendGoodsProps } from './data'

// 请求用户列表
export async function getGoodsClassifyList() {
  return request(`${BASE_URL}categories`, {
    method: 'get',
  })
}

// 根据 ID 查询参数
export async function getGoodsClassifyparameter(params: GetGoodsClassifyparameterProps) {
  return request(`${BASE_URL}categories/${params.id}/attributes`, {
    method: 'get',
    params: { sel: params.sel },
  })
}

// 添加商品
export async function addTheGoods(params: AddTheGoodsProps) {
  return request(`${BASE_URL}goods`, {
    method: 'post',
    data: params,
  })
}

// 编辑提交商品
export async function amendGoods(params: AmendGoodsProps) {
  return request(`${BASE_URL}goods/${params.id}`, {
    method: 'put',
    data: params.data,
  })
}
