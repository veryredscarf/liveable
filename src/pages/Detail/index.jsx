import React,{createContext, useState} from "react";
import { useParams } from "react-router-dom";
import DetailList from "./DetailList";
// 使用

export const GoodContext = React.createContext()



const Detail = ()=>{
  const params = useParams()
  // const [currentId,setCurrentId] = useState(params.id)
  console.log(params.id);
  return (
    <div>
      {/* <GoodContext value={{name:"1"}}> */}
        <DetailList id = {params.id}></DetailList>
      {/* </GoodContext> */}
        

    </div>
  )
}

export default Detail