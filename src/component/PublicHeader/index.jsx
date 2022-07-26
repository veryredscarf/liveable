import React from "react";
import "./style.less"
import { withRouter } from "react-router-dom";

const PublicHeader=(props)=>{
  function backHandle (){
    /***
     * 返回上一页有两种方案
     * 1.通过路由。go(-1)
     *    props.history.go(-1),结合 withRouter包裹组件
     * 2. 通过window对象得返回事件
     *    window.history.back()
     */
    props.history.go(-1)
    // window.history.back()

  }
  return (
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="iconfont icon-zuojiantou"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  )
}

export default  withRouter(PublicHeader)     