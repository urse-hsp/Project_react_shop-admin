import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'

export interface LoginParamsType {
    query: string
    pagenum: string
    pagesize: string
    id: number
    mg_state: boolean
    data: any
}

// 请求用户列表
export async function queryTableData(params: LoginParamsType) {
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
