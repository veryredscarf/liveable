import React ,{ useEffect,useState,}from "react";
import api from "../../../api/index"

import DetailView from "../DetailView/inex";


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
    <div>
      {
         DetailData.imgs?
        <DetailView DetailData= {DetailData} id = {props.id}></DetailView>:
        <div>还灭有返回数据</div>
        
      }
    </div>
  )
}

export default DetailList