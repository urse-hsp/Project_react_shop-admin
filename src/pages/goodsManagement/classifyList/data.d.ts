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

export interface GetAttributesProps {
  id: number
  attr_name: string
  attr_sel: string
}

export interface RedactAttributes {
  id: number
  attrId: number
  attr_name: any
  attr_sel: any
}
