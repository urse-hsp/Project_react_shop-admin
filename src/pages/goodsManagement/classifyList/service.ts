import request from 'umi-request'
import { GetParameterListProps, SetAttributesProps, RemoveParameterProps, GetAttributesProps, RedactAttributes } from './data'

// 商品分类数据列表
export async function getClassifyList() {
  return request(`categories`, {
    method: 'get',
  })
}

// 分类参数管理
export async function getParameterList(params: GetParameterListProps) {
  return request(`categories/${params.id}/attributes`, {
    method: 'get',
    params: { sel: params.sel },
  })
}

// 编辑提交参数
export async function setAttributes(params: SetAttributesProps) {
  return request(`categories/${params.id}/attributes/${params.attrId}`, {
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
  return request(`categories/${params.id}/attributes/${params.attrId}`, {
    method: 'delete',
  })
}

// 添加动态参数或者静态属性
export async function getAttributes(params: GetAttributesProps) {
  return request(`categories/${params.id}/attributes`, {
    method: 'post',
    data: {
      attr_name: params.attr_name,
      attr_sel: params.attr_sel,
    },
  })
}

// 删除参数
export async function redactAttributes(params: RedactAttributes) {
  return request(`categories/${params.id}/attributes/${params.attrId}`, {
    method: 'put',
    data: {
      attr_name: params.attr_name,
      attr_sel: params.attr_sel,
    },
  })
}
