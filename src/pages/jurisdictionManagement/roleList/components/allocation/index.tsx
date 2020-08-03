import React, { useState, useEffect } from 'react'
import { Modal, Tree } from 'antd'

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  AllocationJurisdiction: any
  jurisdictionLists: any
  setRole: any
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, AllocationJurisdiction, jurisdictionLists, setRole } = props
  // const [expandedKeys, setExpandedKeys] = useState<string[]>([]) // （受控）展开指定的树节点
  const [checkedKey, setCheckedKeys] = useState<string[]>([]) // 选中的数据
  // const [selectedKeys, setSelectedKeys] = useState<string[]>([]) //	（受控）设置选中的树节点
  // const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true) // 是否自动展开父节点
  const [initFlag, setInitFlag] = useState(true) // 定义渲染，防止state改变，执行钩子回调函数重新渲染数据了

  // const onExpand = (expandedKeys: any) => {
  //   setExpandedKeys(expandedKeys)
  //   setAutoExpandParent(false)
  // }

  const onCheck = (checkedKeys: any) => {
    setInitFlag(false)
    setCheckedKeys(checkedKeys)
  }

  // const onSelect = (selectedKeys: any, info: any) => {
  //   setSelectedKeys(selectedKeys)
  // }

  const setJurisdiction = () => {
    setRole(checkedKey.join(','))
  }

  useEffect(() => {
    if (initFlag) {
      setCheckedKeys(jurisdictionLists)
    }
  })
  return (
    <Modal destroyOnClose title="分配权限" visible={modalVisible} onCancel={() => onCancel()} onOk={setJurisdiction}>
      <Tree
        checkable
        // onExpand={onExpand}
        // expandedKeys={expandedKeys}
        // autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKey}
        // onSelect={onSelect}
        // selectedKeys={selectedKeys}
        treeData={AllocationJurisdiction}
      />
    </Modal>
  )
}

export default CreateForm
