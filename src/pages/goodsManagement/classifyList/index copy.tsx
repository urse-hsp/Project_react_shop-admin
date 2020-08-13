import React, { useEffect, useState, useRef } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Row, Col, Cascader, message, Tabs, Table, Tag, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { getClassifyList, getParameterList } from './service'
import styles from './styles.less'

const { TabPane } = Tabs

const columns = [
  { title: '', dataIndex: 'index', key: 'index', width: 50 },
  { title: '参数名称', dataIndex: 'attr_name', key: 'attr_name' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
]

const ClassifyList: React.FC<{}> = () => {
  const inputRef = useRef<Input | null>(null)
  const [ClassIfListData, setClassIfListData] = useState<any>([]) // 商品分类列表数据
  const [parameterType, setParameterType] = useState<string>('many') // 参数类型
  const [DefaultValue, setDefaultValue] = useState<any>([]) // 选中的数组id
  const [parameterData, setParameterData] = useState<any>([]) // 参数数据列表

  const [inputVisible, setinputVisible] = useState<any>(false) // 参数数据列表
  const [inputValue, setinputValue] = useState<any>() // 参数数据列表

  const getParameter = async (id: any, Type: string) => {
    const { data, meta } = await getParameterList({ id, sel: Type })
    if (meta.status === 200) {
      data.map((item: any, index: number) => {
        const Obj = item
        Obj.key = item.attr_id
        Obj.index = index + 1
        return Obj
      })
      setParameterData(data)
    }
  }

  const onChange = (value: any) => {
    if (value.length === 2) return
    setDefaultValue(value)
    getParameter(value[2], parameterType)
  }

  const getData = async () => {
    const { data, meta } = await getClassifyList()
    if (meta.status !== 200) return message.error(meta.msg)
    return setClassIfListData(data)
  }

  function callback(key: any) {
    if (key === '1') {
      setParameterType('many')
      if (DefaultValue.length > 0) getParameter(DefaultValue[2], 'many')
    } else {
      setParameterType('only')
      if (DefaultValue.length > 0) getParameter(DefaultValue[2], 'only')
    }
  }

  const showInput = () => {
    setinputVisible(true)
    inputRef.current.focus()
  }

  const handleInputConfirm = () => {
    setinputVisible(false)
  }
  const handleInputChange = (e: any) => {
    setinputValue(e.target.value)
  }

  const tables = () => {
    return (
      <Table
        bordered
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              {record.attr_vals.split(',').map((item: any) => {
                return (
                  <Tag color="blue" key={item} closable>
                    {item}
                  </Tag>
                )
              })}
              {inputVisible && (
                <Input
                  type="text"
                  size="small"
                  className={styles.tagInput}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputConfirm}
                  onPressEnter={handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag className={styles.siteTagPlus} onClick={showInput}>
                  <PlusOutlined /> New Tag
                </Tag>
              )}
            </p>
          ),
        }}
        dataSource={parameterData}
      />
    )
  }
  useEffect(() => {
    getData()
    tables()
  }, [])

  return (
    <PageHeaderWrapper>
      <Card bordered={false}>
        <Row>
          <Col>
            <span className={styles.title}>选择商品分类：</span>
            <Cascader
              size="large"
              options={ClassIfListData}
              onChange={onChange}
              value={DefaultValue}
              expandTrigger="hover"
              fieldNames={{ label: 'cat_name', value: 'cat_id', children: 'children' }}
            />
          </Col>
        </Row>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="动态参数" key="1">
            <Table
              bordered
              columns={columns}
              expandable={{
                expandedRowRender: (record) => (
                  <p style={{ margin: 0 }}>
                    {record.attr_vals.split(',').map((item: any) => {
                      return (
                        <Tag color="blue" key={item} closable>
                          {item}
                        </Tag>
                      )
                    })}
                    {inputVisible && (
                      <Input
                        type="text"
                        size="small"
                        ref={inputRef}
                        className={styles.tagInput}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                      />
                    )}
                    {!inputVisible && (
                      <Tag className={styles.siteTagPlus} onClick={showInput}>
                        <PlusOutlined /> New Tag
                      </Tag>
                    )}
                  </p>
                ),
              }}
              dataSource={parameterData}
            />
          </TabPane>
          <TabPane tab="静态属性" key="2">
            {tables()}
          </TabPane>
          123
        </Tabs>
      </Card>
    </PageHeaderWrapper>
  )
}

export default ClassifyList
