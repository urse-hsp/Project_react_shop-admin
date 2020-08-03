import React, { useState, useRef } from 'react'
import { Input, Button, Col, message, Popconfirm } from 'antd'
import ProTable, { ActionType } from '@ant-design/pro-table'
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { queryTableData, deleteUsers } from './service'
import { TableListItem } from './data.d'
import styles from './index.less'

const { Search } = Input

const GoodsClassify: React.FC<TableListItem> = () => {
  const ref = useRef<ActionType>()
  const redact = () => {}
  const removeConfirm = () => {}

  const columns = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
      width: 50,
    },
    {
      title: '分类名称',
      dataIndex: 'cat_name',
      key: 'cat_name',
    },
    {
      title: '是否有效',
      dataIndex: 'cat_pid',
      key: 'cat_pid',
      width: 150,
    },
    {
      title: '排序',
      dataIndex: 'cat_level',
      key: 'cat_level',
      width: 150,
    },
    {
      title: '操作',
      width: 200,
      render: (_: any, record: any) => {
        return (
          <div className={styles.buttonWrap}>
            <Button type="link" icon={<EditOutlined style={{ fontSize: '13px' }} />} size="small" onClick={() => redact()}>
              编辑
            </Button>
            <Popconfirm
              placement="topRight"
              title="确定要删除该角色吗"
              onConfirm={() => removeConfirm(_)}
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
    <ProTable<TableListItem>
      rowKey="key"
      actionRef={ref}
      columns={columns}
      bordered
      search={false}
      options={{ setting: false }}
      pagination={{
        defaultPageSize: 10,
        pageSizeOptions: ['5', '10', '15', '20'],
        showQuickJumper: true,
      }}
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.cat_name}</p>,
        indentSize: 50,
      }}
      request={async () => {
        const { data: datas, meta } = await queryTableData()
        if (meta.status !== 200) {
          return false
        }
        datas.map((item: any, index: any) => {
          console.log(item)
          const Obj = item
          Obj.key = item.cat_id
          Obj.index = index + 1
          return Obj
        })
        const result = {
          data: datas,
          total: datas.length,
          success: true,
          // pageSize: params.pageSize,
          // current: params.current,
        }
        return result
      }}
    />
  )
}

export default GoodsClassify
