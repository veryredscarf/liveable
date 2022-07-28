import React from "react";
import { useParams } from "react-router-dom";
import DetailList from "./DetailList";
// 使用



const Detail = ()=>{
  const params = useParams()
  console.log(params.id);
  return (
    <div>
        <DetailList id = {params.id}></DetailList>

    </div>
  )
}

export default Detail