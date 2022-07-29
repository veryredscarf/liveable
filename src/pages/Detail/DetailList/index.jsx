import React ,{ useEffect,useState,createContext}from "react";
import api from "../../../api/index"
import DetailView from "../DetailView/inex";

// export const GoodContext = createContext(null)

const DetailList = (props) =>{

  const [DetailData,setDetailData] = useState({})
  useEffect(()=>{
    api.getDetailsData({
      id:props.id
    }).then(res=>{
      if(res.status===200)
      console.log(res.data.result);
      console.log(res.data);
        setDetailData(res.data.result)
    })
  },[])
  return (
    // <GoodContext.Provider  value={1}>
    <div>
      {
         DetailData.imgs?
        <DetailView DetailData= {DetailData} id = {props.id}></DetailView>:
        <div>还灭有返回数据</div>
        
      }
    </div>
    // </GoodContext.Provider>
  )
}

export default DetailList