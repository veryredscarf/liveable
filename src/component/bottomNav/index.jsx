import React from "react";
import "./style.less"
//引入reactdom高亮,也就是添加跳转的
import {NavLink} from "react-router-dom"

const BottomNav = ()=>{
  return (
    <div className="nav-footer">
      <ul className="clear-fix">
        <li>
          <NavLink exact="true" to='/'>
            <i className="iconfont icon-home"></i>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to='/shop'>
            <i className="iconfont icon-shangcheng"></i>
            商城
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to='/life'>
            <i className="iconfont icon-jiangbei"></i>
            生活服务
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to='/profile'>
            <i className="iconfont icon-friend"></i>
            我的
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default BottomNav