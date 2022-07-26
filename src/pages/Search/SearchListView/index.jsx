import React from "react";
import Item from "./Item/index"

const SearchListView = (props) => {
  console.log(props.search);
  return (
    <div>
      {
        props.search.map((item,index)=>{
          return <Item data = {item} key = {index}></Item>
        })
      }
    </div>
  )
}

export default SearchListView