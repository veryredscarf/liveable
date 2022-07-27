import React from "react";
// 通过useParams钩子获取到路由参数
import { useParams } from "react-router-dom";
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";



const Search = ()=>{

  const params = useParams()
  return (
    <div>
      <SearchHeader ></SearchHeader>
      <SearchList searchContent = {params.keywords}></SearchList>
    </div>
  )
}

export default Search