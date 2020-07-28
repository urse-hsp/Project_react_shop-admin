import demo from './demo'
import routess from './routes'

const routes = [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            icon: 'smile',
            path: '/user/login',
            component: './user/login',
          },
          // {
          //   name: 'register-result',
          //   icon: 'smile',
          //   path: '/user/register-result',
          //   component: './user/register-result',
          // },
          // {
          //   name: 'register',
          //   icon: 'smile',
          //   path: '/user/register',
          //   component: './user/register',
          // },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['user'],
        routes: [...routess, ...demo, { component: '404' }],
      },
    ],
  },
]
export default routes
