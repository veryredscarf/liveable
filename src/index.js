import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/common.less"
// 待引入字体图标样式文件
import "./assets/css/iconfont.css"
// 引入路由文件
import AppRouter from './router/index';

import {Provider} from "react-redux"
import store from "./redux/store/index"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>


  ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
