# 移动端脚手架（基于vue-cli3）
## 1. 目录结构
```
├── public/                             #静态资源（不会被打包）
│   └── ...                                   
├── src/
│   ├── assets/
│   │   ├── img/
│   │   ├── js/
│   │   │   └── imgList.js              #项目中用到的图片数组
│   │   ├── less/
│   │   │   └── global.less             #less全局变量
│   │   └── media/
│   ├── axios/
│   ├── common/                         #通用工具类
│   │   ├── js/
│   │   │   ├── getImg.js               #获取资源目录下的所有图片 
│   │   │   ├── preloadImg.js           #资源预加载
│   │   │   └── share.js                #通用微信分享
│   │   ├── less/
│   │   │   └── reset.less              #初始化样式
│   ├── components/                     #组件
│   ├── mock/                           #mock数据
│   ├── router/  
│   ├── views/  
│   ├── App.vue  
│   ├── main.js
│   ├── store.js
│   ├── .browserslistrc
│   ├── .env.development                #开发环境的变量
│   ├── .env.production                 #生产环境的变量
│   ├── .env.sit                        #测试环境的变量
│   ├── .eslintignore                   #eslint忽略的目录
│   ├── .eslintrc.js                    #eslint配置
│   ├── .gitignore        
│   ├── babel.config.js                 #babel配置
│   ├── package-lock.json               
│   ├── package.json                    
│   ├── postcss.config.js
│   ├── README.md
│   └── vue.config.js             
```
## 2. 脚手架集成
### 2.1 Eslint 代码格式化
脚手架已经集成Eslint，具体配置在配置文件`.eslintrc.js`中可以查看。  
目前代码规范使用Airbnb,格式化使用prettier
#### 2.1.1使用配合vscode插件自动格式化
1. 下载vscode插件`Eslint`
2. 打开vscode配置文件`settings.json`添加以下配置
```json
  //根据文件后缀名定义vue文件类型
  "files.associations": {
    "*.vue": "vue"
  },
  // eslint
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    "vue",
    "html"
  ],
```
添加完之后，修改代码，`Ctr+S` 保存之后编辑器会自动格式化

### 2.2 环境分离
#### 2.2.1 环境配置文件
>.env.development  
>.env.sit  
>.env.production  

```js
// 所有环境变量必须以VUE_APP_开头（官方文档要求）
// 测试环境添加此变量，应用production模式的打包配置
NODE_ENV = "production"
// 资源域名（本地不用修改）
VUE_APP_RESOURCE_URL="/"   
// 服务器的域名（本地不用修改）
VUE_APP_BASE_URL="/"         
// 是否启用MOCK数据
VUE_APP_MOCK_ENABLED=true
// 开发环境后端服务器地址
VUE_APP_SERVE_URl="http://localhost:8090"
// 区分环境 本地"develoment" 测试 "sit" 生产 "production"
VUE_APP_ENV= "development"
```
>为什么使用`VUE_APP_ENV`，而不使用node默认的环境变量`NODE_ENV`?  
>脚手架`sit`和`production`环境的打包模式都是`production`([关于vue-cli模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F))，所以默认的环境变量`NODE_ENV`是相同的，都是`production`


测试、生产环境只需配置`VUE_APP_RESOURCE_URL` 和`VUE_APP_BASE_URL`

#### 2.2.2 开发环境中mock数据和后端代理切换
开发过程中前端可以使用mock模拟后端数据进行开发联调，如果本地需要调用后台接口，可以在本地配置文件`.env.development`中将`VUE_APP_MOCK_ENABLED`设置为`false`，并设置后端服务地址`VUE_APP_SERVE_URl`即可

#### 2.2.3 测试、生产环境打包
```js
// 构建测试包
npm run sit
// 构建生产包
npm run pro
```
### 2.3 全局Less
需要全局使用的less变量定义在`global.less`中
### 2.4 资源预加载
#### 2.4.1 获取图片目录
当运行`npm run test`或`npm run pro`时会执行
`getImg.js`自动获取`img`目录下的图片并导入`imgList.js`。
也可以手动执行`npm run getImg`手动获取。目前生成的图片格式如下
```js
const imgList=
{
/*
key:目录文件夹名称
value:当前目录下的图片路径（相对于img目录）
注：ROOT表示根目录
*/
"index":["index/test1.png","index/test2.png"],
"pop":["pop/test3.png"],
"ROOT":["test3.png"]
}
export default imgList
```
#### 2.4.2 预加载
`preloadImg.js`中封装了预加载的方法
`Loading.vue` 页面中已使用，loading样式根据项目设计图自行开发。
### 2.5 px2rem自动转换
按照设计图宽`750px`自动计算尺寸。页面样式单位和设计图保持一致即可，如设计图中按钮宽`100px`，css中写`100px`，编译之后会自动转换成`1rem`

