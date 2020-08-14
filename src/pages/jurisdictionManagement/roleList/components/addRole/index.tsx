import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  alterAdd: boolean
  amendData: any
  addRoleLists: any
}

const addFormRules = {
  roleName: [{ required: true, message: '请输入角色名称!' }],
  roleDesc: [{ required: true, message: '请输入角色描述!' }],
}

const addRole: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, alterAdd, amendData, addRoleLists } = props
  const [form] = Form.useForm()

  const addRoleList = () => {
    form.validateFields().then((values) => {
      addRoleLists(values)
      console.log(values)
    })
  }

  useEffect(() => {
    console.log('aa')
    if (alterAdd) {
      console.log(1)
      form.setFieldsValue({
        roleName: amendData.roleName,
        roleDesc: amendData.roleDesc,
      })
    } else {
      form.resetFields()
    }
  })

  return (
    <Modal
      destroyOnClose
      title={!alterAdd ? '添加角色' : '修改角色'}
      visible={modalVisible}
      onCancel={() => onCancel()}
      okText={!alterAdd ? '添加' : '修改'}
      onOk={addRoleList}
    >
      <Form form={form} {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item label="角色名称" name="roleName" rules={addFormRules.roleName}>
          <Input />
        </Form.Item>
        <Form.Item label="角色描述" name="roleDesc" rules={addFormRules.roleDesc}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default addRole
