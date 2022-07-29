import React,{createContext, useState} from "react";
import { useParams } from "react-router-dom";
import DetailList from "./DetailList";
// 使用


export const GoodContext = createContext(null)


const Detail = ()=>{
  const params = useParams()
  // const [currentId,setCurrentId] = useState(params.id)
  console.log(params.id);
  return (
    <div>
      <GoodContext.Provider  value={1}>
        <DetailList id = {params.id}></DetailList>
      </GoodContext.Provider>

    </div>
  )
}

export default Detail