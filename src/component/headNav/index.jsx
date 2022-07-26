import React from "react";
import { Link } from "react-router-dom";
import "./style.less"


const HeaderNav =(props)=>{
  return (
    <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{props.cityName}</span>
            <i className="iconfont icon-arrow-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="iconfont icon-cart"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="iconfont icon-search"></i>
            <input type="text"  />
          </div>
        </div>
    </div>
  )
}

export default HeaderNav