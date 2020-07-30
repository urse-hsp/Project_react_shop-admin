import React, { useState, useEffect } from 'react'
import { Modal, Tree } from 'antd'

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  AllocationJurisdiction: any
  jurisdictionLists: any
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, AllocationJurisdiction, jurisdictionLists } = props
  const [jurisdiction, setJurisdiction] = useState([])

  console.log(jurisdictionLists)

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  const onCheck = (checkedKeys, info) => {
    // console.log('onCheck', checkedKeys, info)
    // info.node.checked = !info.node.checked
    let newJurisdiction = jurisdiction
    console.log(info.node.id)
    const newList = newJurisdiction.filter((item) => {
      if (item == info.node.id) {
        console.log(item, info.node.id)
      }
      return item !== info.node.id
    })
    console.log(newList)
  }

  useEffect(() => {
    setJurisdiction(jurisdictionLists)
  })
  return (
    <Modal destroyOnClose title="分配权限" visible={modalVisible} onCancel={() => onCancel()}>
      <Tree checkable checkedKeys={[148]} onCheck={onCheck} onSelect={onSelect} treeData={AllocationJurisdiction} />
    </Modal>
  )
}

export default CreateForm
