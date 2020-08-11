export interface GetGoodsClassifyparameterProps {
  id: number
  sel: any
}
export interface AddTheGoodsProps {
  goods_name: any
  goods_cat: any
  goods_price: any
  goods_number: any
  goods_weight: any
  goods_introduce: any
  pics: any
  attrs: any
}

export interface AddGoodsProps {
  location: {
    state: any
  }
}

export interface UploadProps {
  name: string
  listType: any
  className: string
  defaultFileList: any[]
  action: string
  headers: {
    authorization: any
  }
  onChange: any
}
