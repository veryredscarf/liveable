import React from "react";
import { Link } from "react-router-dom";
import "./style.less"
import SearchInput from "../SearchInput/index";


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
          <Link to="/order">
            <i className="iconfont icon-cart"></i>
          </Link>
          

        </div>
        <div className="home-header-middle">
          <div className="search-container">
              <i className="iconfont icon-search"></i>
              <SearchInput></SearchInput>
            </div>
        </div>
    </div>
  )
}

export default HeaderNav