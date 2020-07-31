import React, { useState } from 'react'
import { Modal, Descriptions, Select } from 'antd'

const { Option } = Select

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  roleData: any
  RoleDataList: any
  allocationUserRole: any
}

const AllocationRole: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, roleData, RoleDataList, allocationUserRole } = props

  const [Role, setRole] = useState<string>() // 角色列表数据

  function handleChange(value: any) {
    setRole(value)
  }

  return (
    <Modal destroyOnClose title="分配角色" visible={modalVisible} onCancel={() => onCancel()} onOk={() => allocationUserRole(roleData.id, Role)}>
      <Descriptions column={24}>
        <Descriptions.Item label="当前的用户" span={24}>
          {roleData.username}
        </Descriptions.Item>
        <Descriptions.Item label="当前的角色" span={24}>
          {roleData.role_name}
        </Descriptions.Item>
        <Descriptions.Item label="分配新角色" span={24}>
          <Select style={{ width: 120 }} onChange={handleChange} placeholder="请选择">
            {RoleDataList.map((item: any) => {
              return (
                <Option value={item.id} key={item.id}>
                  {item.roleName}
                </Option>
              )
            })}
          </Select>
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}

export default AllocationRole
