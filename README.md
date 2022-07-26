# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



#### 技术栈
React ,ReactHook ,ReactRouter ,Redux ,Axios ,Less ,其他插件

#### 完成功能
1. 首页展示
2. 城市管理
3. 搜索功能
4. 上拉加载
5. 详情页
6. 收藏功能
7. 订单评价

#### Less支持的配置
在react脚手架构建的项目中，默认支持的是css/sass/scss。需要自己配置less,所以需要调出webpack构建文件拉取出来配置
1. 执行命令: npm run ehect
    1.1 切记如果是老版本是，进入项目之后，如果需要涉及到更改配置文件，不要更改任何文件，直接执行命令再更改，如果更改文件之后在执行命令会报错。
    1.2 如果报错了，那就先删除初始化文件时添加的.git文件，有时他是处于隐藏状态，需要让他显示出来，在删除，删除之后在执行命令
    1.3 如果拉取配置文件成功之后，运行项目失败，那么需要删除依赖包，重新安装，然后再运行
2. 安装less依赖  npm install less less-loader -S
3. 修改配置文件 
    第一步1步： 在// style files regexes 注释语下边      新增文件匹配配置
      const lessRegex = /\.less$/;
      const lessModuleRegex = /\.module\.less$/;
    第二步 找到webpack插件配置处
      新增less插件配置  ,原理如同配置sass一般，但是需要把sass配置中的sass字样换成less
                   {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'icss',
                  },
                },
                'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'local',
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'less-loader'
              ),
            },
#### 配置网络请求
1. 安装依赖
 npm install axios -S
2. 配置相关文件 
  配置网络请求方法和拦截器



#### 配置初始化样式
1. 配置初始化css样式
2. 字体图标库：iconfont  字体图标库



 #### 首页展示  
 1. 创建基本的四个页面
 2. 创建路由
    2.1 安装依赖：npm install react-dom-router -S
    2.2 配置AppRouter文件 

### 底部导航实现
  <NavLink exact="true" to='/'> 其中的exact表示匹配路由  ，当 exact="true" 表示严格匹配路由    exact="false" 表示正常匹配路由

### 顶部导航
  1. 配置rem，在index.html中
### 焦点轮播图
  切记这个轮播图只适合15版本，16版本，17版本的react，18版本的react不适合，如果不合适的话，那么就需要卸载react安装老版本的react
  参考文档：https://react-swipeable-views.com/demos/demos/

### 安装类的样式库  classnames
1. 这个库有助于我们对元素进行一些判断处理时，样式是否生效或者选择生效的效果，类似于vue的判断处理
            <li key={index} className={classnames({'select':判断条件})} ></li>

#### 搭建服务器环境提供数据
    1. 插件介绍 cors 用于后端处理跨域问题，在server文件夹中的index.js文件夹处理跨域问题
    2. 安装依赖 npm install express -S   npm install cors -S
    3. 苦于使用cors 后台解决
    4. 自定义数据来源 server/data文件夹中

### 首页列表数据显示
    - 组件分类：
      - 智能组件（HomeHotList）：处理数据，包含处理数据，过滤数据
      - 木偶组件（HomeHotView）：试图适配
    - reactHook useeffect业务分离
###   实现城市管理
1. 创建城市管理页面实现路由跳转
2. 实现路由嵌套，将共享底部导航得页面做成二级路由：layout布局
3. 城市页面组件效果实现 PublicHeader，currentCity ，cityList

4. 集成redux，通过他来存储城市页面，根据城市不同，UI会渲染不同的结果
     - redux- Store,  Reducer , Actions
     - 安装依赖 npm install redux --save     安装redux
     - 安装依赖 npm install react-redux --save    安装插件使其在react中更加适合
     - 安装依赖 npm install redux-devtools-extension --save   安装redux插件拓展

     创建redux
5. 关联Redux,存储城市数据
6. 城市列表的ABC形式表现
    1. 安装依赖 npm i react-city-select  -S
    2. 具体页面在page/City/cityLists中都是，src/data/data.json存储的是全国城市信息数据
    3. 参考网页http://www.voidcc.com/project/react-city-select

### 实现搜索功能
1. 创建搜索页面，配置路由
2. 把搜索输入框抽离成单独组件
3. 监听keyCode进行路由跳转 keyCode ===13
4. 携带参数跳转路由 三个步骤 ：
   - 在路由配置文件中，在跳转到的路由上加一个:关键字
      比如这样：  <Route path='/search/:keywords' component={Search} />  keywords是跳转路由是携带的参数key，可以是任何你想设置的
   - 在路由跳转页面src/component/SearchInput/index.jsx中有定义，
      
      1. 首先是通过设置状态，用来保存当时输入的内容
      2. 其次是通过onChange事件获取到输入值，通过e.target.value并且保存到状态中,还可以通过ref来获取到元素实例
      3. 在路由跳转时加上值就行了，不用写key  因为配置路由时已经写了key  如：props.history.push("/search"+keywords)   此处keywords是输入内容
      4. 判断，当输入内容长度大于0时，才能跳转
   - 在跳转到的搜索页面中，使用useParams获取到传递过来的参数，前面搜索  房子 ; 搜索页面的地址栏显示： http://localhost:3000/#/search/房子

5. 实现搜索网络请求的接口
      - 由于后台的问题，每次搜索返回的都是相同的数据
      - 在api中定义请求方法
6. 关于列表数据渲染的注意事项
 - 我们以前都是直接在获取列表数据后直接渲染，但是我们需要Item去渲染每一个试图
  - 渲染html结构
  jsx代码：
  <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}}></p>

