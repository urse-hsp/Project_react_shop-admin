export interface TableListItem {
  key: number
  disabled?: boolean
  href: string
  avatar: string
  name: string
  owner: string
  desc: string
  callNo: number
  status: string
  updatedAt: Date
  createdAt: Date
  progress: number
  num: number
}

export interface LoginParamsType {
  query: string
  pagenum: string
  pagesize: string
  id: number
  mg_state: boolean
  data: any
  goods_id: number
}

export interface QueryTableDataProps {
  type: number
  pagenum: number | undefined
  pagesize: number | undefined
}

export interface AddClassifyProps {
  cat_pid: any
  cat_name: any
  cat_level: any
}

export interface AmendClassifyProps {
  amendClassifyData: any
  cat_name: any
}
