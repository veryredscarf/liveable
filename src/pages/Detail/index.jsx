import React from "react";
import { useParams } from "react-router-dom";


const Detail = ()=>{
  const params = useParams()
  return (
    <div>
        商品详情页{params.id}
    </div>
  )
}

export default Detail