import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'
import { LoginParamsType, QueryTableDataProps } from './data'

export interface SetAllocationRole {
  id: number
  Role: number
}

// 请求用户列表
export async function queryTableData(params: QueryTableDataProps) {
  return request(`${BASE_URL}users`, {
    method: 'get',
    params,
  })
}

// 修改用户状态
export async function changeTypes(params: LoginParamsType) {
  return request(`${BASE_URL}users/${params.id}/state/${!params.mg_state}`, {
    method: 'put',
  })
}

// 删除用户
export async function deleteUsers(params: LoginParamsType) {
  return request(`${BASE_URL}users/${params.id}`, {
    method: 'delete',
  })
}

// 修改用户
export async function changeUsers(params: LoginParamsType, data: LoginParamsType) {
  return request(`${BASE_URL}users/${data.id}`, {
    method: 'put',
    data: {
      ...params,
    },
  })
}

// 添加用户
export async function addUsers(params: LoginParamsType) {
  return request(`${BASE_URL}users`, {
    method: 'post',
    data: {
      ...params,
    },
  })
}

// 获取角色
export async function getRoles() {
  return request(`${BASE_URL}roles`, {
    method: 'get',
  })
}

// 获取角色
export async function allocationRole(params: SetAllocationRole) {
  return request(`${BASE_URL}users/${params.id}/role`, {
    method: 'put',
    data: {
      rid: params.Role,
    },
  })
}
