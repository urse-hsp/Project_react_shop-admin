import React from 'react'
import { Modal, Form, Input } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  alterAdd: boolean
}

const addRole: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, alterAdd } = props
  console.log(alterAdd)
  return (
    <Modal
      destroyOnClose
      title={!alterAdd ? '添加角色' : '修改角色'}
      visible={modalVisible}
      onCancel={() => onCancel()}
      // footer={null}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="角色名称"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="角色描述"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default addRole
