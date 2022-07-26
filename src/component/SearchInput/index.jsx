import React,{useState} from "react";
import { withRouter } from "react-router-dom"; 
import "./style.less"

const SearchInput = (props)=>{
  const [keywords,setkeywords] = useState('')
  function keyUpHandle(e){
    // 如果键盘敲下回车键，则执行搜索
    if(e.keyCode === 13){
      if(keywords.length > 0 ){
        props.history.push("/search/"+keywords)
      }
    }
  }

  function changeHandle(e){
    setkeywords(e.target.value)
  }

  return (
    <input className="search-input" 
      type="text" 
      value={keywords}
      onKeyUp={keyUpHandle}
      onChange={changeHandle}
    />
  )
}

export default withRouter(SearchInput)