import React, { useState, useEffect } from 'react'
import { Modal, Radio, Form, Input } from 'antd'

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  OrdeData: any
  amendStatus: any
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const isSend = [
  { label: '已经发货', value: '是' },
  { label: '未发货', value: '否' },
]
const orderPay = [
  { label: '未支付', value: '0' },
  { label: '支付宝', value: '1' },
  { label: '微信', value: '2' },
  { label: '银行卡', value: '3' },
]

const payStatus = [
  { label: '未付款', value: '0' },
  { label: '已付款', value: '1' },
]

const OrdeStatus: React.FC<CreateFormProps> = (props) => {
  const [form] = Form.useForm()
  const { modalVisible, onCancel, OrdeData, amendStatus } = props
  const [isSendValue, setIsSendValue] = useState()
  const [orderPayValue, setOrderPayValue] = useState()
  const [payStatusValue, setPayStatusValue] = useState()

  //  是否发货
  const onChange = (e: any) => {
    setIsSendValue(e.target.value)
    const Obj = OrdeData
    Obj.is_send = e.target.value
  }

  //  支付方式
  const way = (e: any) => {
    setOrderPayValue(e.target.value)
    const Obj = OrdeData
    Obj.order_pay = e.target.value
  }

  //  订单状态
  const condition = (e: any) => {
    setPayStatusValue(e.target.value)
    const Obj = OrdeData
    Obj.pay_status = e.target.value
  }

  useEffect(() => {
    if (OrdeData.order_id) {
      setIsSendValue(OrdeData.is_send)
      setOrderPayValue(OrdeData.order_pay)
      setPayStatusValue(OrdeData.pay_status)
      form.setFieldsValue({
        order_price: OrdeData.order_price,
      })
    }
  })

  //   对话框确认回调
  const onOk = () => {
    form.validateFields().then((values) => {
      const params = {
        order_price: values.order_price,
        id: OrdeData.order_id,
        is_send: isSendValue === '是' ? '1' : '0',
        order_pay: orderPayValue,
        pay_status: payStatusValue,
      }
      amendStatus(params)
    })
  }

  return (
    <Modal destroyOnClose title="修改订单状态" visible={modalVisible} onCancel={() => onCancel()} onOk={() => onOk()}>
      <Form {...layout} name="basic" form={form} initialValues={{ remember: true }}>
        <Form.Item label="价格" name="order_price" rules={[{ required: true, message: '价格不能为空' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="是否发货：">
          <Radio.Group options={isSend} onChange={onChange} value={isSendValue} />
        </Form.Item>
        <Form.Item label=" 支付方式：">
          <Radio.Group options={orderPay} onChange={way} value={orderPayValue} optionType="button" />
        </Form.Item>
        <Form.Item label="订单状态：">
          <Radio.Group options={payStatus} onChange={condition} value={payStatusValue} optionType="button" buttonStyle="solid" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default OrdeStatus
