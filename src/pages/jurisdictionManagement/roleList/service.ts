import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'
import { ParamsType, DeleteParamsType, AmendParamsType, SetRolejurisdiction } from './data'

// 获取数据
export async function getroleList() {
  return request(`${BASE_URL}roles`)
}

// 添加角色
export async function AddRoleList(params: ParamsType) {
  return request(`${BASE_URL}roles`, {
    method: 'post',
    data: params,
  })
}
// 修改角色
export async function amendRoleList(params: AmendParamsType) {
  return request(`${BASE_URL}roles/${params.id}`, {
    method: 'put',
    data: params.param,
  })
}

// 删除角色
export async function deleteRoleList(id: ParamsType) {
  return request(`${BASE_URL}roles/${id}`, {
    method: 'delete',
  })
}
// 删除角色指定权限
export async function deleteRoleJurisdiction(params: DeleteParamsType) {
  return request(`${BASE_URL}roles/${params.recordIds}/rights/${params.itemId}`, {
    method: 'delete',
  })
}

// 获取所有权限
export async function getAllJurisdiction() {
  return request(`${BASE_URL}rights/tree`, {
    method: 'get',
  })
}

// 获取所有权限
export async function setRolejurisdiction(params: SetRolejurisdiction) {
  return request(`${BASE_URL}roles/${params.setRoleId}/rights`, {
    method: 'post',
    data: { rids: params.jurisdictionId },
  })
}
