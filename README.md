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
7. 搜索头部实现
    - 通过window.history.back()实现返回功能

8. 实现上拉加载数据功能--组件复用
    - 上拉加载组件封装
    - 实现流程
     1. 监听滚动事件 ---生命周期中
     2. 判断条件方式1：传统浏览器的方法： 滚动高度（卷入高度）+ 视口高度（正文显示高度）> 容器列表高度
     2. 判断条件方式2：react中自带方法： getBoundingClientRect() 动态获取距离视口的位置，其中有left，right ，top，bottom属性，
        分别对应  元素的左边到左边视口的距离 ；元素的右边到左边视口的距离 ；元素的上边对应上边视口的距离 ；元素的下边对应上边视口的距离 
        注意：上述都是元素的 左边，右边等，表示这些值都不包括元素自身的高度的
    3. 由于使用滚动监听事件会触发多次，因此我们需要用防抖的方式来
       参考站点：https://segmentfault.com/a/1190000018428170
       防抖：在一个期限值内，如果发起多次请求，以最后一次为准
       节流：在一个期限值内，只发起一次请求
    4.  产生回调事件，请求搜索更多数据

9. 给searchList组件中的状态依赖使用添加参数，监听地址栏数据，如果变化时，自动调用函数
  useEffect(()=>{
    http()
  },[props.searchContent])
10. 完成搜索时，同步改变搜索框内容,回退路由时，搜索框中的内容也跟着变化
    - 利用redux完成
11. 处理图片资源加载慢时，使用占位图片占位，图片加载完成之后，替换图片
    - loadImg.js中，
    处理方法上一些不好的地方：这个图片渲染是啪的一下，全都渲染好了，不是我们想象中一张一张渲染好
    方案2，也是使用react -懒加载组件的方法来处理数据  参考文档：https://www.csdn.net/tags/OtTaggwsOTc1MTUtYmxvZwO0O0OO0O0O.html
    首先安装依赖，然后将组件包裹整个展示区域否则会出现文字堆叠的效果
              <LazyLoad  placeholder={ImgDefault}>
            <img src={data.img} alt="" />
            <div className="mask">
            <div className="left">
              <p>{data.title}</p>
              <p>{data.houseType}</p>
            </div>
            <div className="right">
              <div className="btn">
                {data.rentType}
              </div>
              {/* 利用react的api解析并渲染html标签 */}
              <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}}></p>
            </div>
          </div>
          </LazyLoad>

#### 商品详情页
1. 创建页面，配置路由

#### MOck.js
  1. 模拟数据，完全随机化
   - 用于在搜索数据中
   - 参考网址  http://mockjs.com/
  2. 在项目文件夹下安装不是服务器目录安装 安装：npm install mockjs --save 




#### 项目中遇到的问题   
1. 在文件地址：component/loadMore/index.jsx，我们给滚动刷新添加了一个节流操作
  - 我的想法是分析判断条件，为什么判断灭有执行这个操作，于是我查询到了在清除定时器的时候，会返回一个值给变量，因此给判断带来干扰
  - 随后我便清除定时器之后，再将变量设置为null，解决了问题
2. 但是查看资料说，如果我们的滚动方法定义在useEffect中，我们可以利用useffect缓存的原因来处理这个问题，最开始我们useffect的第二个参数是一个空数组
    因此useffect只会触发一次，但是如果我们定义成一个可以变化的值，那么useffect会随着数据的改变而不断的刷新
3. 于是我们使用了useState来储存一个（元素距离顶部的高度）参数， 这个参数的初始值最开始设置为0 ，（设置为0会出现问题的，待会说）
4. 这样也成功解决了问题
5. 但是还没有完全结束：最开始我们设置的状态值为0，最后赋值为元素顶部距离视口的高度，这样出现了一个问题，最开始页面时进入页面时触发了事件，
   - 分析原因可能是因为最开始页面还没有渲染导致判断条件成功判断，于是我们最开始给元素设置一个超大值，让他最开始不满足条件即可。

        

