import request from 'umi-request'
import type { ParamsType, DeleteParamsType, AmendParamsType, SetRolejurisdiction } from './data'

// 获取数据
export async function getroleList() {
  return request(`roles`)
}

// 添加角色
export async function AddRoleList(params: ParamsType) {
  return request(`roles`, {
    method: 'post',
    data: params,
  })
}
// 修改角色
export async function amendRoleList(params: AmendParamsType) {
  return request(`roles/${params.id}`, {
    method: 'put',
    data: params.param,
  })
}

// 删除角色
export async function deleteRoleList(id: ParamsType) {
  return request(`roles/${id}`, {
    method: 'delete',
  })
}
// 删除角色指定权限
export async function deleteRoleJurisdiction(params: DeleteParamsType) {
  return request(`roles/${params.recordIds}`, {
    method: 'delete',
    data: { type: 'rights', rightId: params.itemId },
  })
}

// 获取所有权限
export async function getAllJurisdiction() {
  return request(`rights`, {
    method: 'get',
    params: { type: 'tree' },
  })
}

// 设置权限
export async function setRolejurisdiction(params: SetRolejurisdiction) {
  return request(`roles/${params.setRoleId}`, {
    method: 'put',
    data: { rids: params.jurisdictionId, type: 'rights' },
  })
}
