import React, { useState, useRef } from 'react'
import { Button, message, Popconfirm, Tag } from 'antd'
import ProTable from '@ant-design/pro-table'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined, CheckCircleOutlined, CloseCircleOutlined, PlusOutlined } from '@ant-design/icons'
import Classify from './components/classify'
import { queryTableData, deleteUsers, addClassify, amendClassify } from './service'
import { TableListItem, AddClassifyProps, QueryTableDataProps } from './data.d'

import styles from './index.less'

const GoodsClassify: React.FC<TableListItem> = () => {
  const ref = useRef<any>()
  const [modalVisible, setModalVisible] = useState(false) // 显示对话框
  const [judge, setJudge] = useState(true) // 判断是添加还是修改
  const [classifyData, setClassifyData] = useState([]) // 判断是添加还是修改
  const [amendClassifyData, setamendClassifyData] = useState<Number | undefined>() // 判断是添加还是修改

  // 关闭对话框时触发
  const onCancel = (form: any) => {
    form.resetFields()
    setModalVisible(false)
  }

  // 点击显示对话框 判断显示那个
  const showClassify = async (judgeBoole: boolean, record: any) => {
    setModalVisible(true)
    setJudge(judgeBoole)
    const queryInfo: QueryTableDataProps = {
      type: 2,
      pagenum: undefined, // 当前页数
      pagesize: undefined, // 当前每页显示多少条数据
    }
    if (judgeBoole) {
      const { data, meta } = await queryTableData(queryInfo)
      if (meta.status !== 200) return false
      setClassifyData(data)
    } else {
      setamendClassifyData(record)
    }
    return true
  }

  // 删除分类
  const removeConfirm = async (record: any) => {
    const { meta } = await deleteUsers(record.cat_id)
    if (meta.status !== 200) {
      return message.error(meta.msg)
    }
    ref.current.reload()
    return message.success('删除成功')
  }

  const affirm = (form: any) => {
    form.validateFields().then(async (values: any) => {
      const params: AddClassifyProps = {
        cat_pid: '',
        cat_name: values.classifyName,
        cat_level: '',
      }
      if (values.fatherClassify === undefined || values.fatherClassify.length === 0) {
        params.cat_level = 0
        params.cat_pid = 0
      } else {
        params.cat_level = values.fatherClassify.length
        params.cat_pid = values.fatherClassify[values.fatherClassify.length - 1]
      }
      if (judge) {
        const { meta } = await addClassify(params)
        if (meta.status !== 201) {
          return message.error(meta.msg)
        }
        message.success('创建成功')
      } else {
        const param = {
          amendClassifyData,
          cat_name: values.compileClassifyName,
        }
        const { meta } = await amendClassify(param)
        if (meta.status !== 200) {
          return message.error(meta.msg)
        }
        message.success('修改成功')
      }
      ref.current.reload()
      setModalVisible(false)
      return true
    })
  }

  // 循环递归给每个数据添加key值
  const recursion = (datas: any) => {
    datas.map((item: any, index: number) => {
      const Obj = item
      Obj.key = item.cat_id
      Obj.index = index + 1
      if (item.children) {
        recursion(item.children)
      }
      return Obj
    })
  }
  const title = (
    <Button key="3" type="primary" onClick={() => showClassify(true, undefined)}>
      <PlusOutlined />
      添加分类
    </Button>
  )

  const columns = [
    {
      title: '分类名称',
      dataIndex: 'cat_name',
      key: 'cat_name',
    },
    {
      title: '是否有效',
      dataIndex: 'cat_deleted',
      key: 'cat_deleted',
      render: (_: any) => {
        let valid = null
        if (!_) {
          valid = <CheckCircleOutlined style={{ color: 'lightgreen' }} />
        } else {
          valid = <CloseCircleOutlined style={{ color: 'red' }} />
        }
        return valid
      },
    },
    {
      title: '排序',
      dataIndex: 'cat_level',
      key: 'cat_level',
      render: (_: any) => {
        let grade = null
        if (_ === 0) {
          grade = <Tag color="blue">一级</Tag>
        } else if (_ === 1) {
          grade = <Tag color="green">二级</Tag>
        } else {
          grade = <Tag color="orange">三级</Tag>
        }
        return grade
      },
    },
    {
      title: '操作',
      width: 200,
      render: (_: any, record: any) => {
        return (
          <div className={styles.buttonWrap}>
            <Button type="link" icon={<EditOutlined style={{ fontSize: '13px' }} />} size="small" onClick={() => showClassify(false, record)}>
              编辑
            </Button>
            <Popconfirm
              placement="topRight"
              title="确定要删除该角色吗"
              onConfirm={() => removeConfirm(record)}
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

  return (
    <PageHeaderWrapper>
      <ProTable<TableListItem>
        rowKey="key"
        actionRef={ref}
        columns={columns}
        bordered
        search={false}
        options={{ setting: false }}
        headerTitle={title}
        pagination={{
          defaultPageSize: 5,
          pageSizeOptions: ['5', '10', '15', '20'],
          showQuickJumper: true,
        }}
        expandable={{
          indentSize: 65,
        }}
        request={async (params) => {
          const queryInfo = {
            type: 3,
            pagenum: params.current, // 当前页数
            pagesize: params.pageSize, // 当前每页显示多少条数据
          }
          const { data, meta } = await queryTableData(queryInfo)
          if (meta.status !== 200) {
            return false
          }

          recursion(data.result)
          const result = {
            data: data.result,
            total: data.total,
            success: true,
            pageSize: params.pageSize,
            current: params.current,
          }
          return result
        }}
      />
      <Classify
        modalVisible={modalVisible}
        onCancel={onCancel}
        judge={judge}
        classifyData={classifyData}
        affirm={affirm}
        amendClassifyData={amendClassifyData}
      />
    </PageHeaderWrapper>
  )
}

export default GoodsClassify
