import React, { useState, useEffect } from 'react'
import { Card, Alert, Steps, Tabs, Form, Input, InputNumber, Cascader, Checkbox, Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { getGoodsClassifyList, getGoodsClassifyparameter } from './service'
import styles from './styles.less'

const { Step } = Steps
const { TabPane } = Tabs

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

const addGoodsRules = {
  goods_name: [{ required: true, message: '请输入名称!' }],
  goods_price: [{ required: true, message: '请输入价格!' }],
  goods_weight: [{ required: true, message: '请输入重量' }],
  goods_number: [{ required: true, message: '请输入数量' }],
  goods_cat: [{ required: true, message: '请选择分类' }],
}

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
}

const AddGoods: React.FC<{}> = () => {
  const [form] = Form.useForm()
  const [current, setCurrent] = useState(0) // 标签页和时间轴 的选中
  const [classifyDataList, setclassifyDataList] = useState([]) // 商品分类
  const [actionGoodscat, setActionGoodscat] = useState([]) // 商品分类的默认选中
  const [manyData, setmanyData] = useState([]) // many的参数
  const [onlyData, setonlyData] = useState([]) // only的参数

  function callback(key: any) {
    form
      .validateFields()
      .then(async (values) => {
        setCurrent(key)
        if (key === '1') {
          const { data, meta } = await getGoodsClassifyparameter({ id: values.goods_cat[2], sel: 'many' })
          if (meta.status !== 200) return message.error(meta.msg)
          data.forEach((item: any) => {
            const Obj = item
            Obj.attrs = Obj.attr_vals.split(' ')
          })
          setmanyData(data)
        } else if (key === '2') {
          const { data, meta } = await getGoodsClassifyparameter({ id: values.goods_cat[2], sel: 'only' })
          console.log(data)
          if (meta.status !== 200) return message.error(meta.msg)
          setonlyData(data)
        }
        return true
      })
      .catch(() => {
        message.warning('请输入基本信息!')
      })
  }

  const getDataList = async () => {
    const { data, meta } = await getGoodsClassifyList()
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    setclassifyDataList(data)
    return true
  }

  const onChange = (value: any) => {
    if (value.length < 3) {
      form.setFieldsValue({ goods_cat: '' })
    }
  }

  useEffect(() => {
    getDataList()
  }, [])

  return (
    <Card>
      <Alert message="添加商品信息" type="warning" showIcon />
      <Steps current={current} size="small" type="default" className={styles.Steps}>
        <Step title="基本信息" />
        <Step title="商品参数" />
        <Step title="商品属性" />
        <Step title="商品图片" />
        <Step title="商品内容" />
        <Step title="完成" />
      </Steps>
      <Form {...layout} name="basic" initialValues={{ goods_cat: actionGoodscat }} form={form}>
        <Tabs onChange={callback} tabPosition="left" activeKey={`${current}`}>
          <TabPane tab="基本信息" key="0">
            <Form.Item label="商品名称" name="goods_name" rules={addGoodsRules.goods_name}>
              <Input size="large" />
            </Form.Item>
            <Form.Item label="商品价格" name="goods_price" rules={addGoodsRules.goods_price}>
              <InputNumber min={0} max={100000} size="large" />
            </Form.Item>
            <Form.Item label="商品重量" name="goods_weight" rules={addGoodsRules.goods_weight}>
              <Input size="large" />
            </Form.Item>
            <Form.Item label="商品数量" name="goods_number" rules={addGoodsRules.goods_number}>
              <Input size="large" />
            </Form.Item>
            <Form.Item label="商品分类" name="goods_cat" rules={addGoodsRules.goods_cat}>
              <Cascader
                options={classifyDataList}
                onChange={onChange}
                size="large"
                expandTrigger="hover"
                style={{ width: '220px' }}
                fieldNames={{ label: 'cat_name', value: 'cat_id', children: 'children' }}
                popupPlacement="topLeft"
              />
            </Form.Item>
          </TabPane>
          <TabPane tab="商品参数" key="1">
            {manyData &&
              manyData.map((item: any) => {
                return (
                  <Form.Item label={item.attr_name} key={item.attr_id}>
                    {item.attrs &&
                      item.attrs.map((items: any) => {
                        return <Checkbox key={items}>{items}</Checkbox>
                      })}
                  </Form.Item>
                )
              })}
          </TabPane>
          <TabPane tab="商品属性" key="2">
            {onlyData &&
              onlyData.map((item: any) => {
                return (
                  <Form.Item label={item.attr_name} key={item.attr_id}>
                    <Input size="large" value={item.attr_vals} />
                  </Form.Item>
                )
              })}
          </TabPane>
          <TabPane tab="商品图片" key="3">
            <Upload {...props}>
              <Button>
                <UploadOutlined /> 上传图片
              </Button>
              只能上传jpg/png文件，且不超过500kb
            </Upload>
          </TabPane>
          <TabPane tab="商品内容" key="4">
            Content of Tab Pane 5
          </TabPane>
        </Tabs>
      </Form>
    </Card>
  )
}
export default AddGoods
