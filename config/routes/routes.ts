const routes = [
  {
    path: '/',
    redirect: '/usersManagement/usersList',
  },
  {
    path: '/usersManagement',
    name: 'users',
    icon: 'user',
    routes: [
      {
        name: 'usersList',
        path: '/usersManagement/usersList',
        component: './usersManagement/usersList',
      },
    ],
  },
  {
    path: '/jurisdictionManagement',
    name: 'jurisdiction',
    icon: 'BorderRight',
    routes: [
      {
        name: 'roleList',
        path: '/jurisdictionManagement/roleList',
        component: './jurisdictionManagement/roleList',
      },
      {
        name: 'jurisdictionList',
        path: '/jurisdictionManagement/jurisdictionList',
        component: './jurisdictionManagement/jurisdictionList',
      },
    ],
  },
  {
    path: '/goodsManagement',
    name: 'goods',
    icon: 'shopping',
    routes: [
      {
        name: 'goodsList',
        path: '/goodsManagement/goodsList',
        component: './goodsManagement/goodsList',
      },
      {
        name: 'classifyList',
        path: '/goodsManagement/classifyList',
        component: './goodsManagement/classifyList',
      },
      {
        name: 'goodsClassify',
        path: '/goodsManagement/goodsClassify',
        component: './goodsManagement/goodsClassify',
      },
    ],
  },
  {
    path: '/orderManagement',
    name: 'order',
    icon: 'Snippets',
    routes: [
      {
        name: 'usersList',
        path: '/orderManagement/orderList',
        component: './orderManagement/OrderList',
      },
    ],
  },
  {
    path: '/dataStatisticsManagement',
    name: 'dataStatisticsManagement',
    icon: 'dashboard',
    routes: [
      {
        name: 'dataReport',
        path: '/dataStatisticsManagement/dataReport',
        component: './dataStatisticsManagement/dataReport',
      },
    ],
  },
]
export default routes
