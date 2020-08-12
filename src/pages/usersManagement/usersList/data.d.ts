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
  id: number
  mg_state: boolean
  data: any
}
export interface QueryTableDataProps {
  query: string
  pagenum: any
  pagesize: any
}
