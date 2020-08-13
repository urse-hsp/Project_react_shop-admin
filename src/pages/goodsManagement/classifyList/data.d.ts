export interface GetParameterListProps {
  id: number
  sel: string
}

export interface SetAttributesProps {
  id: number
  attrId: number
  attr_name: any
  attr_sel: any
  attr_vals: any
}

export interface RemoveParameterProps {
  id: number
  attrId: number
}
