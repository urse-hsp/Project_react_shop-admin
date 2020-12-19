import request from 'umi-request'
import { QueryTableDataProps, AmendOrdeStatusProps } from './data'

// 订单数据列表
export async function queryTableData(params: QueryTableDataProps) {
  return request(`orders`, {
    method: 'get',
    params,
  })
}

//  修改订单状态
export async function amendOrdeStatus(params: AmendOrdeStatusProps) {
  return request(`orders/${params.id}`, {
    method: 'put',
    data: {
      is_send: params.is_send,
      order_pay: params.order_pay,
      order_price: params.order_price,
      pay_status: params.pay_status,
    },
  })
}

//   查看物流信息
export async function LogisticsInformation(params: any) {
  return request(`kuaidi/${params.id}`, {
    method: 'get',
  })
}
