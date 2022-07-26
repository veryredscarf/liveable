import React from "react";
import "./style.less"
import { withRouter } from "react-router-dom";

// 点击之后跳转到首页
const CityList =(props)=>{
  function cityClickHandle(city){
    // console.log(city);
    props.onEvent(city)
    props.history.replace("/")
    
  }

  return (
    <div className="city-list-container">
      <h3>热门城市</h3>
      <ul className="clear-fix">
          <li onClick={()=>cityClickHandle("北京")}><span>北京</span></li>
          <li onClick={()=>cityClickHandle("上海")}><span>上海</span></li>
          <li onClick={()=>cityClickHandle("天津")}><span>天津</span></li>
          <li onClick={()=>cityClickHandle("广州")}><span>广州</span></li>
          <li onClick={()=>cityClickHandle("深圳")}><span>深圳</span></li>
          <li onClick={()=>cityClickHandle("成都")}><span>成都</span></li>
          <li onClick={()=>cityClickHandle("沈阳")}><span>沈阳</span></li>
          <li onClick={()=>cityClickHandle("杭州")}><span>杭州</span></li>
          <li onClick={()=>cityClickHandle("西安")}><span>西安</span></li>
          <li onClick={()=>cityClickHandle("郑州")}><span>郑州</span></li>
          <li onClick={()=>cityClickHandle("南京")}><span>南京</span></li>
          <li onClick={()=>cityClickHandle("青岛")}><span>青岛</span></li>
          <li onClick={()=>cityClickHandle("云南")}><span>云南</span></li>
          <li onClick={()=>cityClickHandle("张家界")}><span>张家界</span></li>
          <li onClick={()=>cityClickHandle("石家庄")}><span>石家庄</span></li>

      </ul>
    </div>
  )
}

export default withRouter(CityList)