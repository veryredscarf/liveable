import React from "react"
import SearchInput from "../../../component/SearchInput"
import "./style.less"

const SearchHeader =()=>{
  function backHandle(){
    
    window.history.back()
  }
  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={backHandle}>
        <i className="iconfont icon-zuojiantou"></i>
      </span>
      <div className="input-container">
        <i className="iconfont icon-search"></i>
        <SearchInput></SearchInput>
      </div>
    </div>
  )
}

export default SearchHeader