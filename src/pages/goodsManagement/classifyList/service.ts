import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'
import { GetParameterListProps, SetAttributesProps, RemoveParameterProps } from './data'

// 商品分类数据列表
export async function getClassifyList() {
  return request(`${BASE_URL}categories`, {
    method: 'get',
  })
}

// 分类参数管理
export async function getParameterList(params: GetParameterListProps) {
  return request(`${BASE_URL}categories/${params.id}/attributes`, {
    method: 'get',
    params: { sel: params.sel },
  })
}

// 编辑提交参数
export async function setAttributes(params: SetAttributesProps) {
  return request(`${BASE_URL}categories/${params.id}/attributes/${params.attrId}`, {
    method: 'put',
    data: {
      attr_name: params.attr_name,
      attr_sel: params.attr_sel,
      attr_vals: params.attr_vals,
    },
  })
}

// 删除参数
export async function removeParameter(params: RemoveParameterProps) {
  return request(`${BASE_URL}categories/${params.id}/attributes/${params.attrId}`, {
    method: 'delete',
  })
}
