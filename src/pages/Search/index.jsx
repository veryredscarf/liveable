import React from "react";
// 通过useParams钩子获取到路由参数
import { useParams } from "react-router-dom";
import SearchList from "./SearchList";


const Search = ()=>{

  const params = useParams()
  return (
    <div>
      <SearchList searchContent = {params.keywords}></SearchList>
    </div>
  )
}

export default Search