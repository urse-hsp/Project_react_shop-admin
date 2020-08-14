import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'

interface AddFormProps {
  visible: boolean
  onCancel: any
  Boole: boolean
  parameterType: any
  onOk: any
  amendAttrData: any
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const AddForm: React.FC<AddFormProps> = (props) => {
  const { visible, onCancel, Boole, parameterType, onOk, amendAttrData } = props
  const [form] = Form.useForm()

  useEffect(() => {
    if (!Boole) {
      form.setFieldsValue({
        attr_name: amendAttrData.attr_name,
      })
    } else {
      form.resetFields()
    }
  })

  const confirm = () => {
    form.validateFields().then(async (values: any) => {
      onOk(values)
    })
  }

  return (
    <Modal
      destroyOnClose
      title={`${Boole ? '添加' : '修改'}${parameterType === 'many' ? '动态参数' : '静态属性'}`}
      visible={visible}
      onCancel={() => onCancel()}
      onOk={() => confirm()}
    >
      <Form {...layout} name="basic" initialValues={{ remember: true }} form={form}>
        <Form.Item label="动态参数" name="attr_name" rules={[{ required: true, message: '请输入参数的名称' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddForm
