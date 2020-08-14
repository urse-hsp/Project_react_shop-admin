import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Row, Col, Cascader, message, Tabs, Table, Tag, Button, Popconfirm, Input } from 'antd'
import { PlusOutlined, EditOutlined, QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { getClassifyList, getParameterList, setAttributes, removeParameter, getAttributes, redactAttributes } from './service'
import styles from './styles.less'
import AddFrom from './components/addForm'

const { TabPane } = Tabs

class ClassifyList extends React.Component {
  formRef = React.createRef<any>()

  state = {
    ClassIfListData: [], // 商品分类列表数据
    parameterType: 'many', // 参数类型 many动态参数
    DefaultValue: [], // 选中的数组id
    parameterData: [], // 参数数据列表
    visible: false, // 添加修改参数对话框
    Boole: true, // 判断是添加，还是修改 true添加
    AddModification: {},
    amendAttrData: {},
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
        // 控制文本框的显示与隐藏
        Obj.inputVisible = false
        // 文本框输入的值
        Obj.inputValue = ''
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

  // 更新改变的参数属性数据，更新input写入，添加参数和删除参数
  setparameter = (record: any, showHide: boolean, focus: boolean) => {
    const Obj = record
    Obj.inputVisible = showHide
    const dataList = this.state.parameterData
    const parameter = dataList.map((item: any) => {
      let items = item
      if (items.attr_id === Obj.attr_id) items = Obj
      return items
    })
    this.setState(
      {
        parameterData: parameter,
      },
      () => {
        let fn
        if (focus) {
          // input焦点
          fn = this.inputRef.current.focus()
        } else {
          fn = null
          // 输入字段不为空时 添加参数
          if (Obj.inputValue !== '') {
            Obj.attr_vals = `${Obj.attr_vals},${Obj.inputValue}`
            this.setAttributes(Obj)
          }
        }
        return fn
      },
    )
  }

  // 点击添加参数属性显示input
  showInput = (record: any) => {
    this.setparameter(record, true, true)
  }

  // 添加参数属性，回车或者返回焦点
  handleInputConfirm = (record: any) => {
    this.setparameter(record, false, false)
  }

  // 添加删除参数属性
  setAttributes = async (value: any) => {
    const property = value
    property.inputValue = ''
    const params = {
      id: this.state.DefaultValue[2],
      attrId: property.attr_id,
      attr_name: property.attr_name,
      attr_sel: this.state.parameterType,
      attr_vals: property.attr_vals,
    }
    const { meta } = await setAttributes(params)
    if (meta.status !== 200) return message.error(meta.msg)
    message.success(meta.msg)
    return this.getData()
  }

  // input 输入更新同步
  handleInputChange = (e: any, record: any) => {
    const Obj = record
    Obj.inputValue = e.target.value
    this.setparameter(record, true, true)
  }

  // 删除参数属性
  onCloseTag = (item: any, record: any) => {
    const Data = record
    Data.values = Data.attr_vals.split(',').filter((items: any) => {
      return items !== item
    })
    Data.attr_vals = Data.values.join(',')
    this.setAttributes(Data)
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

  // 显示对话框，添加参数与修改参数
  showModal = (showHide: boolean, record: any) => {
    this.setState({
      visible: true,
      Boole: showHide, // 判断是添加，还是修改
      AddModification: record,
    })
    if (!showHide) this.setState({ amendAttrData: record })
  }

  // 对话框点击确定时
  handleOk = async (values: any) => {
    if (this.state.Boole) {
      const { meta } = await getAttributes({ id: this.state.DefaultValue[2], attr_name: values.attr_name, attr_sel: this.state.parameterType })
      if (meta.status !== 201) return message.error(meta.msg)
      message.success('添加成功')
    } else {
      const Modifications: any = this.state.AddModification
      const { meta } = await redactAttributes({
        id: this.state.DefaultValue[2],
        attrId: Modifications.attr_id,
        attr_name: values.attr_name,
        attr_sel: this.state.parameterType,
      })
      if (meta.status !== 200) return message.error(meta.msg)
      message.success('修改成功')
    }
    this.setState({ visible: false })
    return this.getParameter()
  }

  // 对话框取消时
  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { parameterData, parameterType, visible, Boole, amendAttrData } = this.state
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
              <Button type="link" icon={<EditOutlined style={{ fontSize: '13px' }} />} size="small" onClick={() => this.showModal(false, record)}>
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
        <Button
          type="primary"
          size="large"
          className={styles.addBtn}
          onClick={() => this.showModal(true, null)}
          disabled={parameterData.length === 0 ? true : false}
        >
          {parameterType === 'many' ? '添加参数' : '静态属性'}
        </Button>
        <Table
          bordered
          columns={columns}
          dataSource={parameterData}
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
                {record.inputVisible && (
                  <Input
                    type="text"
                    size="small"
                    ref={this.inputRef}
                    className={styles.tagInput}
                    value={record.inputValue}
                    onChange={(e) => this.handleInputChange(e, record)}
                    onBlur={() => this.handleInputConfirm(record)}
                    onPressEnter={() => this.handleInputConfirm(record)}
                  />
                )}
                {!record.inputVisible && (
                  <Tag className={styles.siteTagPlus} onClick={() => this.showInput(record)}>
                    <PlusOutlined /> New Tag
                  </Tag>
                )}
              </p>
            ),
          }}
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
          </Tabs>
        </Card>
        <AddFrom
          visible={visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          Boole={Boole}
          parameterType={parameterType}
          amendAttrData={amendAttrData}
        />
      </PageHeaderWrapper>
    )
  }
}

export default ClassifyList
