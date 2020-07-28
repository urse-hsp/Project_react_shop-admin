# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

## 我的项目+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## 更改内容

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
useState ad useEffect 用法
你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
const [count, setCount] = useState(0); 设置初始值   初始值 / 改变值的方法

1、路由工程化，分区模块
2、更改了login页面 路由中删除了，注册页和注册结果页。
3、删除掉了 手机号登录模块 和忘记密码还要其他登录方式和注册账户 设置了自动登录功能
4、service写入我的后台服务器的api接口，修改接口登录对接，跳转后保存admin数据判断是自动登录存储。设置固定前缀存储在工具文件中全局调用设置接口
5、页面自定义页脚 在components中 基础布局页面更用，user布局页面更用
6、头部布局，退出页面增加确认弹窗 。删除 站内搜索栏去除组件，删除 使用文档
7、基础布局页面取出存储数据判断是否登录，user布局页面取出存储数据判断是否登录
8、更改用户右上角信息，AvatarDropdown 修改数据。全局models 更改user。ts  接口请求删除 更换成获取本地数据等。
