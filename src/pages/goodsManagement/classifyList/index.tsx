import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Row, Col, Cascader, message, Tabs, Table, Tag, Button, Popconfirm, Modal, Form, Input } from 'antd'
import { PlusOutlined, EditOutlined, QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { getClassifyList, getParameterList, setAttributes, removeParameter } from './service'
import styles from './styles.less'

const { TabPane } = Tabs

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

class ClassifyList extends React.Component {
  state = {
    ClassIfListData: [], // 商品分类列表数据
    parameterType: 'many', // 参数类型
    DefaultValue: [], // 选中的数组id
    parameterData: [], // 参数数据列表
    inputVisible: false, // 参数数据列表
    inputValue: '', // 参数数据列表
    attrValues: {}, // 添加参数 属性时候当前列表的数据
    visible: false, // 添加修改参数对话框
    Boole: true, // 判断是添加，还是修改
  }

  inputRef = React.createRef<any>()

  componentDidMount() {
    this.getData()
  }

  // 获取参数
  getParameter = async () => {
    const { data, meta } = await getParameterList({ id: this.state.DefaultValue[2], sel: this.state.parameterType })
    if (meta.status === 200) {
      data.map((item: any, index: number) => {
        const Obj = item
        Obj.key = item.attr_id
        Obj.index = index + 1
        // Obj.values = item.attr_vals.split(',')
        return Obj
      })
      this.setState({
        parameterData: data,
      })
    }
  }

  // 选择分类
  onChange = (value: any) => {
    if (value.length === 2) return
    this.setState(
      {
        DefaultValue: value,
      },
      () => this.getParameter(),
    )
  }

  // 获取商品分类列表
  getData = async () => {
    const { data, meta } = await getClassifyList()
    if (meta.status !== 200) return message.error(meta.msg)
    return this.setState({
      ClassIfListData: data,
    })
  }

  // tabs标签电器获取参数
  callback = (key: any) => {
    if (key === '1') {
      this.setState(
        {
          parameterType: 'many',
        },
        () => {
          if (this.state.DefaultValue.length > 0) this.getParameter()
        },
      )
    } else {
      this.setState(
        {
          parameterType: 'only',
        },
        () => {
          if (this.state.DefaultValue.length > 0) this.getParameter()
        },
      )
    }
  }

  // 点击添加参数显示input
  showInput = (record: any) => {
    this.setState(
      {
        inputVisible: true,
        attrValues: record,
      },
      () => this.inputRef.current.focus(),
    )
  }

  // 添加删除属性
  setAttributes = async (value: any) => {
    const property = value
    const params = {
      id: this.state.DefaultValue[2],
      attrId: property.attr_id,
      attr_name: property.attr_name,
      attr_sel: this.state.parameterType,
      attr_vals: property.attr_vals,
    }
    const { meta } = await setAttributes(params)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success(meta.msg)
    this.setState({
      inputValue: '',
    })
    return this.getData()
  }

  // 添加参数，回车或者返回焦点
  handleInputConfirm = () => {
    this.setState(
      {
        inputVisible: false,
      },
      () => {
        if (this.state.inputValue !== '') {
          const property: any = this.state.attrValues
          property.attr_vals = `${property.attr_vals},${this.state.inputValue}`
          this.setAttributes(property)
        }
      },
    )
  }

  // input 输入更新同步
  handleInputChange = (e: any) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  // 删除参数
  onCloseTag = (item: any, record: any) => {
    const Data = record
    Data.values = Data.attr_vals.split(',').filter((items: any) => {
      return items !== item
    })
    Data.attr_vals = Data.values.join(',')
    this.setAttributes(Data)
  }

  // 编辑参数
  showClassify = (record: any) => {
    this.setState({
      visible: true,
      Boole: false, // 判断是添加，还是修改
    })
  }

  // 删除参数
  removeConfirm = async (record: any) => {
    const { meta } = await removeParameter({ id: this.state.DefaultValue[2], attrId: record.attr_id })
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    message.success('删除成功')
    return this.getParameter()
  }

  showModal = () => {
    this.setState({
      visible: true,
      Boole: true, // 判断是添加，还是修改
    })
  }

  handleOk = (e: any) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = (e: any) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  onFinish = (values: any) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    const { parameterData, parameterType, visible, inputValue, inputVisible, Boole } = this.state
    const columns = [
      { title: '', dataIndex: 'index', key: 'index', width: 50 },
      { title: '参数名称', dataIndex: 'attr_name', key: 'attr_name' },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: (record: any) => {
          return (
            <div className={styles.buttonWrap}>
              <Button type="link" icon={<EditOutlined style={{ fontSize: '13px' }} />} size="small" onClick={() => this.showClassify(record)}>
                编辑
              </Button>
              <Popconfirm
                placement="topRight"
                title="确定要删除该角色吗"
                onConfirm={() => this.removeConfirm(record)}
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              >
                <Button type="link" danger icon={<DeleteOutlined style={{ fontSize: '13px' }} />} size="small">
                  Delete
                </Button>
              </Popconfirm>
            </div>
          )
        },
      },
    ]
    const tables = (
      <>
        <Button type="primary" size="large" className={styles.addBtn} onClick={this.showModal} disabled={parameterData.length === 0 ? true : false}>
          添加参数
        </Button>
        <Table
          bordered
          columns={columns}
          expandable={{
            expandedRowRender: (record: any) => (
              <p style={{ margin: 0 }}>
                {record.attr_vals.split(',').map((item: any) => {
                  return (
                    <Tag color="blue" key={item} closable className={styles.tabMargin} onClose={() => this.onCloseTag(item, record)}>
                      {item}
                    </Tag>
                  )
                })}
                {inputVisible && (
                  <Input
                    type="text"
                    size="small"
                    ref={this.inputRef}
                    className={styles.tagInput}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag className={styles.siteTagPlus} onClick={() => this.showInput(record)}>
                    <PlusOutlined /> New Tag
                  </Tag>
                )}
              </p>
            ),
          }}
          dataSource={parameterData}
        />
      </>
    )
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Row>
            <Col>
              <span className={styles.title}>选择商品分类：</span>
              <Cascader
                size="large"
                allowClear={false}
                options={this.state.ClassIfListData}
                onChange={this.onChange}
                value={this.state.DefaultValue}
                expandTrigger="hover"
                fieldNames={{ label: 'cat_name', value: 'cat_id', children: 'children' }}
              />
            </Col>
          </Row>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="动态参数" key="1">
              {tables}
            </TabPane>
            <TabPane tab="静态属性" key="2">
              {tables}
            </TabPane>
            123
          </Tabs>
        </Card>
        <Modal
          title={`${Boole ? '添加' : '修改'}${parameterType === 'many' ? '动态参数' : '静态属性'}`}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item label="动态参数" name="attr_name" rules={[{ required: true, message: '请输入参数的名称' }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </PageHeaderWrapper>
    )
  }
}

export default ClassifyList
