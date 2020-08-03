import React, { Component } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Table, Tag } from 'antd'
import { getJurisdictionList } from '@/services/example'

interface TableListItem {
  dataList: any
  item: any
}

const columns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key',
    width: 60,
  },
  {
    title: '权限名称',
    dataIndex: 'authName',
    key: 'id',
  },
  {
    title: '路径',
    dataIndex: 'path',
    key: 'id',
  },
  {
    title: '权限等级',
    dataIndex: 'level',
    key: 'level',
    render: (_: any) => {
      let level = null
      if (Number(_) === 0) {
        level = <Tag color="green">一级</Tag>
      } else if (Number(_) === 1) {
        level = <Tag color="blue">二级</Tag>
      } else {
        level = <Tag color="orange">三级</Tag>
      }
      return level
    },
  },
]

class JurisdictionList extends Component<TableListItem> {
  state = {
    dataList: [], // 列表数据
    pageSize: 16, // 一页显示16条
  }

  // 读取数据
  async componentDidMount() {
    const { data, meta } = await getJurisdictionList()
    data.map((item: any, index: any) => {
      const Obj = item
      Obj.key = index + 1
      return Obj
    })
    if (meta.status === 200) {
      this.setState({
        dataList: data,
      })
    }
  }

  // 切换显示条数
  onShowSizeChange = (current: any, size: any) => {
    this.setState({
      pageSize: size,
    })
  }

  render() {
    const { dataList } = this.state
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Table
            dataSource={dataList}
            columns={columns}
            bordered
            pagination={{
              pageSize: this.state.pageSize,
              pageSizeOptions: ['5', '10', '16', '20'],
              showSizeChanger: true,
              // total: dataList.length,
              onShowSizeChange: this.onShowSizeChange,
              showQuickJumper: true,
            }}
          />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default JurisdictionList
