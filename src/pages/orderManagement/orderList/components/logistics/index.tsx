import React from 'react'
import { Modal, Timeline } from 'antd'

interface CreateFormProps {
  modalVisible: boolean
  onCancel: () => void
  logisticsInformationList: any
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel, logisticsInformationList } = props

  return (
    <Modal destroyOnClose title="物理信息" visible={modalVisible} onCancel={() => onCancel()} footer={null}>
      <Timeline reverse>
        {logisticsInformationList &&
          logisticsInformationList.map((item: any) => {
            return (
              <Timeline.Item key={item.context}>
                {item.context}
                <div>{item.time}</div>
              </Timeline.Item>
            )
          })}
      </Timeline>
    </Modal>
  )
}

export default CreateForm
