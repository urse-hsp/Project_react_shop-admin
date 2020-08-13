import React, { useState, useEffect } from 'react'
import { Card, Alert, Steps, Tabs, Form, Input, InputNumber, Cascader, Checkbox, Upload, message, Button, Divider } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import E from 'wangeditor'
import { history } from 'umi'
import { BASE_URL, Token } from '@/utils/tool'
import { AddGoodsProps, UploadProps } from './data'
import { getGoodsClassifyList, getGoodsClassifyparameter, addTheGoods, amendGoods } from './service'
import styles from './styles.less'

const { Step } = Steps
const { TabPane } = Tabs
const CheckboxGroup = Checkbox.Group

// input 配置
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

// input 规则
const addGoodsRules = {
  goods_name: [{ required: true, message: '请输入名称!' }],
  goods_price: [{ required: true, message: '请输入价格!' }],
  goods_weight: [{ required: true, message: '请输入重量' }],
  goods_number: [{ required: true, message: '请输入数量' }],
  goods_cat: [{ required: true, message: '请选择分类' }],
}

const AddGoods: React.FC<AddGoodsProps> = (props) => {
  const {
    location: { state },
  } = props
  const [form] = Form.useForm()
  const [current, setCurrent] = useState(0) // 标签页和时间轴 的选中
  const [classifyDataList, setclassifyDataList] = useState([]) // 商品分类
  const [actionGoodscat, setactionGoodscat] = useState([]) // 商品分类的默认选中
  const [manyData, setmanyData] = useState([]) // many的参数
  const [onlyData, setonlyData] = useState([]) // only的参数

  const [addAmend, setAddAmend] = useState(false) // 获取修改页面传递的值，判断是添加还是修改 true是修改
  const [parameter, setParameter] = useState<any>([]) // 商品参数属性列表

  const [editorContent, setEditorContent] = useState('') // 修改页面的商品数据
  const [goodsImg, setGoodsImg] = useState<any>([]) // 商品图片数据

  // 富文本编辑器
  const initEditor = () => {
    const editor = new E('#div1', '#div2')
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = (html: any) => {
      // setEditorContent(editor.txt.html())
      setEditorContent(html)
    }
    editor.customConfig.uploadImgShowBase64 = true

    editor.create()
    editor.txt.html(editorContent)
  }

  // 点击tab 标签1 获取商品参数
  const gitManyData = async (values: any) => {
    const { data, meta } = await getGoodsClassifyparameter({ id: values.goods_cat[2], sel: 'many' })
    if (meta.status !== 200) return message.error(meta.msg)
    data.forEach((item: any) => {
      const Obj = item
      Obj.attrs = Obj.attr_vals.split(',')
      Obj.attr_value = Obj.attr_vals
    })
    setmanyData(data)
    if (!addAmend) setParameter(data)
    return true
  }

  // 点击tab 标签1 获取商品属性
  const gitOnlyData = async (values: any) => {
    if (onlyData.length === 0) {
      const { data, meta } = await getGoodsClassifyparameter({ id: values.goods_cat[2], sel: 'only' })
      if (meta.status !== 200) return message.error(meta.msg)
      data.map((item: any) => {
        const Obj = item
        Obj.attr_value = Obj.attr_vals
        return Obj
      })
      setonlyData(data)
      if (!addAmend) {
        parameter.push(...data)
      }
    }
    return true
  }

  // 点击tab标签页拦截等操作
  function callback(key: any) {
    form
      .validateFields()
      .then(async (values) => {
        setCurrent(key)
        if (key === '1') {
          gitManyData(values)
        } else if (key === '2') {
          gitOnlyData(values)
        } else if (key === '4') {
          initEditor()
        } else if (key === '5') {
          if (manyData.length === 0 && !addAmend) {
            setCurrent(1)
            gitManyData(values)
            message.warning('请查看配置参数!')
          } else if (onlyData.length === 0 && !addAmend) {
            setCurrent(2)
            message.warning('请查看配置属性!')
            gitOnlyData(values)
          }
        }
        return true
      })
      .catch(() => {
        message.warning('请输入基本信息!')
      })
  }

  // 添加页面获取商品分类参数
  const getDataList = async () => {
    const { data, meta } = await getGoodsClassifyList()
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    setclassifyDataList(data)
    return true
  }

  // 商品分类选择操作
  const onChange = (value: any) => {
    if (value.length < 3) form.setFieldsValue({ goods_cat: '' })
  }

  // 初始化
  useEffect(() => {
    if (state) {
      setAddAmend(true)
      // 修改页面渲染数据
      const Data = state.GoodsData
      form.setFieldsValue({
        goods_name: Data.goods_name,
        goods_price: Data.goods_price,
        goods_weight: Data.goods_weight,
        goods_number: Data.goods_number,
        goods_cat: Data.goods_cat,
      })

      // 处理图片数据
      Data.pics.map((item: any) => {
        const Obj = item
        Obj.uid = item.pics_id
        Obj.url = item.pics_big_url
        return Obj
      })

      // 商品参数处理
      Data.attrs.map((item: any) => {
        const Obj = item
        if (Obj.attr_sel === 'many') {
          Obj.parameter = Obj.attr_value.split(',')
        }
        return Obj
      })
      setParameter(Data.attrs)

      setGoodsImg(state.GoodsData.pics)
      setactionGoodscat(state.GoodsData.goods_cat)
      setEditorContent(state.GoodsData.goods_introduce)
    }
    getDataList()
  }, [])

  // 上次图片改变时的回调
  const onChangeImg = (file: any) => {
    const res = file.file.response
    if (res) {
      if (res.meta.status === 200) goodsImg.push({ pic: res.data.tmp_path })
    }
  }

  // 上传图片配置
  const Uploads: UploadProps = {
    name: 'file',
    listType: 'picture',
    className: 'upload-list-inline',
    defaultFileList: [...goodsImg],
    action: `${BASE_URL}upload`,
    headers: {
      authorization: Token(),
    },
    onChange: onChangeImg,
  }

  // 改变参数，多选框
  const onChanges = (checkedList: any, index: number, attr_names: any) => {
    const manyDataList = parameter
    manyDataList.map((item: any) => {
      const Obj = item
      if (Obj.attr_name === attr_names) {
        Obj.attrs = checkedList
        Obj.attr_vals = checkedList.join(',')
        Obj.attr_value = checkedList.join(',')
      }
      return Obj
    })
  }

  // 多选框，参数
  const argument = () => {
    return (
      manyData &&
      manyData.map((item: any, index) => {
        let values = item.attrs
        return (
          <Form.Item label={item.attr_name} key={item.attr_id}>
            {parameter &&
              parameter.forEach((items: any) => {
                if (items.attr_name === item.attr_name && items.attr_sel === 'many') {
                  if (addAmend) {
                    values = items.parameter
                  } else {
                    values = items.attrs
                  }
                }
              })}
            <CheckboxGroup options={item.attrs} onChange={(checkedList) => onChanges(checkedList, index, item.attr_name)} defaultValue={values} />
          </Form.Item>
        )
      })
    )
  }

  // 属性input改变的时候
  const onlyChange = (e: any, attr_ids: number) => {
    parameter.map((item: any) => {
      const Obj = item
      if (Obj.attr_id === attr_ids && Obj.attr_sel === 'only') {
        Obj.attr_value = e.target.value
      }
      return Obj
    })
  }

  // 参数列表 input
  const attribute = () => {
    return (
      onlyData &&
      onlyData.map((item: any) => {
        let values = item.attr_vals
        return (
          <Form.Item label={item.attr_name} key={item.attr_id}>
            {addAmend &&
              parameter.forEach((items: any) => {
                if (items.attr_name === item.attr_name && items.attr_sel === 'only') {
                  values = items.attr_value
                }
              })}
            <Input size="large" defaultValue={values} onChange={(e) => onlyChange(e, item.attr_id)} />
          </Form.Item>
        )
      })
    )
  }

  // 完成
  const accomplish = () => {
    form.validateFields().then(async (values) => {
      const GoodsData = {
        goods_name: values.goods_name,
        goods_cat: values.goods_cat.join(','),
        goods_price: values.goods_price,
        goods_number: values.goods_number,
        goods_weight: values.goods_weight,
        goods_introduce: editorContent,
        pics: goodsImg,
        attrs: parameter,
      }

      let res
      let status
      if (!addAmend) {
        res = await addTheGoods(GoodsData)
        status = 201
      } else {
        res = await amendGoods({ id: state.GoodsData.goods_id, data: GoodsData })
        status = 200
      }
      if (res.meta.status !== status) return message.error(res.meta.msg)
      history.push('/goodsManagement/goodsList/List')
      return message.success(addAmend ? '修改商品成功' : '添加商品成功')
    })
  }

  return (
    <Card>
      <Alert message={addAmend ? '修改商品信息' : '添加商品信息'} type={addAmend ? 'warning' : 'success'} showIcon />
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
                disabled={addAmend}
                size="large"
                expandTrigger="hover"
                style={{ width: '220px' }}
                fieldNames={{ label: 'cat_name', value: 'cat_id', children: 'children' }}
                popupPlacement="topLeft"
              />
            </Form.Item>
          </TabPane>
          <TabPane tab="商品参数" key="1">
            {argument()}
          </TabPane>
          <TabPane tab="商品属性" key="2">
            {attribute()}
          </TabPane>
          <TabPane tab="商品图片" key="3">
            <Upload {...Uploads}>
              <Button>
                <UploadOutlined /> 上传图片
              </Button>
              &nbsp;只能上传jpg/png文件，且不超过500kb
              <Divider />
            </Upload>
          </TabPane>
          <TabPane tab="商品内容" key="4">
            <div id="div1" className={styles.toolbar} />
            <div id="div2" className={styles.text} />
          </TabPane>
          <TabPane tab="完成" key="5">
            <Button type="primary" size="large" onClick={accomplish}>
              {addAmend ? '修改商品' : '添加商品'}
            </Button>
          </TabPane>
        </Tabs>
      </Form>
    </Card>
  )
}
export default AddGoods
