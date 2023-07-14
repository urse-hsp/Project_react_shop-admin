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

export interface QueryTableDataProps {
  query: string
  current: any
  pageSize: any
}

export interface DeleteUsersProps {
  id: number
  mg_state: boolean
  data: any
  goods_id: number
}
export interface GetGoodsProps {
  id: number
}

export interface ResultProps {
  data: any
  total: any
  success: boolean
  pageSize: number | undefined
  current: number | undefined
}
