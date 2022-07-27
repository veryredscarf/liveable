import React,{useEffect, useState} from "react";
import { withRouter } from "react-router-dom"; 
// 导入redux进行 读取数据和填写数据
import {useSelector,useDispatch} from "react-redux"
import * as searchAction from "../../redux/actions/search"

// 引入路由对象，获取获取路由上的数据
import { useParams } from "react-router-dom";
import "./style.less"

const SearchInput = (props)=>{
  const [keywords,setkeywords] = useState('')
  const dispatch= useDispatch()
  const reduxKeyWords =  useSelector(state=>state.search)
  const params = useParams();

  function keyUpHandle(e){
    // 如果键盘敲下回车键，则执行搜索
    if(e.keyCode === 13){
      if(keywords.length > 0 ){
        props.history.push("/search/"+keywords)
        dispatch(searchAction.updateSearch(keywords))
      }
    }
  }
  // 监听redux中的数据变化以及路由上的数据之后，回传在页面上显示
  useEffect(()=>{ 
    if(params.keywords){
      dispatch(searchAction.updateSearch(params.keywords))
    }else{
      dispatch(searchAction.updateSearch(""))
    }
    
    setkeywords(reduxKeyWords.search)
  },[reduxKeyWords.search, params.keywords])


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