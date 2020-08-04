import request from 'umi-request'
import { BASE_URL } from '@/utils/tool'
import { LoginParamsType, QueryTableDataProps, AddClassifyProps, AmendClassifyProps } from './data'

// 请求用户列表
export async function queryTableData(params: QueryTableDataProps) {
  return request(`${BASE_URL}categories`, {
    method: 'get',
    params,
  })
}

// 删除分类
export async function deleteUsers(id: LoginParamsType) {
  return request(`${BASE_URL}categories/${id}`, {
    method: 'delete',
  })
}

// 添加分类
export async function addClassify(params: AddClassifyProps) {
  return request(`${BASE_URL}categories`, {
    method: 'post',
    data: params,
  })
}

// 编辑提交分类
export async function amendClassify(params: AmendClassifyProps) {
  return request(`${BASE_URL}categories/${params.amendClassifyData.cat_id}`, {
    method: 'put',
    data: { cat_name: params.cat_name },
  })
}
