import React, { useState } from 'react'
import { Modal, Tree } from 'antd'

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  AllocationJurisdiction: any
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, AllocationJurisdiction } = props
  return (
    <Modal destroyOnClose title="分配权限" visible={modalVisible} onCancel={() => onCancel()}>
      <Tree checkable treeData={AllocationJurisdiction} checkedKeys={[105]} />
    </Modal>
  )
}

export default CreateForm
