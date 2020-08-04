import React, { useEffect } from 'react'
import { Modal, Form, Input, Cascader } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const addFormRules = {
  classifyName: [{ required: true, message: '请输入角色名称!' }],
  compileClassifyName: [{ required: true, message: '请输入编辑名称!' }],
}

interface ClassProps {
  modalVisible: boolean
  onCancel: any
  judge: boolean
  classifyData: any
  affirm: any
  amendClassifyData: any
}

const Classify: React.FC<ClassProps> = (props) => {
  const { modalVisible, onCancel, judge, classifyData, affirm, amendClassifyData } = props
  const [form] = Form.useForm()

  function onChange(value: any) {
    console.log(value)
  }
  useEffect(() => {
    if (!judge) {
      form.setFieldsValue({
        compileClassifyName: amendClassifyData.cat_name,
      })
    }
  })

  return (
    <Modal destroyOnClose title={judge ? '添加分类' : '编辑'} visible={modalVisible} onCancel={() => onCancel(form)} onOk={() => affirm(form)}>
      <Form form={form} {...layout} name="basic" initialValues={{ remember: true }}>
        {judge && (
          <>
            <Form.Item label="分类名称" name="classifyName" rules={addFormRules.classifyName}>
              <Input />
            </Form.Item>
            <Form.Item label="父级分类" name="fatherClassify">
              <Cascader
                options={classifyData}
                onChange={onChange}
                changeOnSelect
                fieldNames={{ label: 'cat_name', value: 'cat_id', children: 'children' }}
              />
            </Form.Item>
          </>
        )}
        {!judge && (
          <Form.Item label="编辑名称" name="compileClassifyName" rules={addFormRules.compileClassifyName}>
            <Input />
          </Form.Item>
        )}
      </Form>
    </Modal>
  )
}
export default Classify
