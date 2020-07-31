import React, { useEffect } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import styles from './index.less'

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  judge: boolean
  createUsers: any
  amendUser: any
}
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 19 },
}
const tailLayout = {
  wrapperCol: { offset: 17, span: 12 },
}

const regulation = (rule: any, value: any) => {
  const regEmail = /^[1][3,4,5,7,8][0-9]{9}$/
  if (regEmail.test(value)) {
    return Promise.resolve()
  }
  return Promise.reject('请输入合法的手机号!')
}

const AddFromRules = {
  username: [
    { required: true, message: '请输入用户名' },
    {
      min: 3,
      max: 10,
      message: '长度在 3~10 个字符',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '请输入密码' },
    {
      min: 6,
      max: 10,
      message: '长度在 6~15 个字符',
    },
  ],
  email: [{ type: 'email', required: true, message: '请输入合法的邮箱' }],
  mobile: [{ validator: regulation, required: true }],
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, judge, createUsers, amendUser } = props
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    createUsers(values)
  }
  const onReset = () => {
    form.resetFields()
  }

  useEffect(() => {
    if (judge) {
      form.setFieldsValue({
        username: amendUser.username,
        email: amendUser.email,
        mobile: amendUser.mobile,
      })
    } else {
      form.resetFields()
    }
  })

  return (
    <Modal destroyOnClose title={judge ? '修改用户' : '添加用户'} visible={modalVisible} onCancel={() => onCancel()} footer={null}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item label="用户名" name="username" rules={AddFromRules.username}>
          <Input disabled={judge} />
        </Form.Item>
        {!judge && (
          <Form.Item label="密码" name="password" rules={AddFromRules.password}>
            <Input.Password />
          </Form.Item>
        )}
        <Form.Item label="邮箱" name="email" rules={AddFromRules.email}>
          <Input />
        </Form.Item>
        <Form.Item label="手机号" name="mobile" rules={AddFromRules.mobile}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.addMargin}>
          <Button htmlType="button" onClick={onReset} disabled={judge}>
            重置
          </Button>
          <Button type="primary" htmlType="submit" className={styles.add}>
            {judge ? '修改' : '创建'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateForm
