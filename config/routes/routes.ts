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
        path: '/goodsManagement/goodsList',
        name: 'goodsList',
        component: './goodsManagement/goodsList',
        routes: [
          {
            path: '/goodsManagement/goodsList',
            redirect: '/goodsManagement/goodsList/List',
          },
          {
            path: '/goodsManagement/goodsList/List',
            component: './goodsManagement/goodsList/List',
          },
          {
            path: '/goodsManagement/goodsList/addGoods',
            component: './goodsManagement/goodsList/addGoods',
          },
        ],
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
        component: './orderManagement/orderList',
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
