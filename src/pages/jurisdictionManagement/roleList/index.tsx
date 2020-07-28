import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Table } from 'antd'

const columns = [
  { title: '角色名称', dataIndex: 'name', key: 'name' },
  { title: '角色描述', dataIndex: 'age', key: 'age' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
]

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
]

const JurisdictionListL: React.FC<{}> = () => {
  return (
    <PageHeaderWrapper>
      <Card bordered={false}>
        <Table
          columns={columns}
          bordered
          expandable={{
            expandedRowRender: (record) => <div style={{ margin: 0 }}>{record.description}</div>,
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default JurisdictionListL
