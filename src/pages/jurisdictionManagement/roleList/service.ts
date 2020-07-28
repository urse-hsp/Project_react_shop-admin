import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'

export interface ParamsType {
  roleName: string
  roleDesc: string
  id: number
  userId: number
  rightId: number
}

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

// 删除角色
export async function deleteRoleList(id: ParamsType) {
  return request(`${BASE_URL}roles/${id}`, {
    method: 'delete',
  })
}
// 删除角色指定权限
export async function deleteRoleJurisdiction(params: ParamsType) {
  return request(`${BASE_URL}roles/${params.userId}/rights/${params.rightId}`, {
    method: 'delete',
  })
}
