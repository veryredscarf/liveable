import React,{useEffect,useState} from 'react'
import OrderListView from '../OrderListView';
import api from '../../../api'

export default function OrderList(props) {
  const [orderLists,setOrderList] = useState([])
  useEffect(()=>{
    console.log(props.user.nick);
    api.getOrderComment({
      username:props.user.nick
    })
    .then(res=>{
      if(res.data.status===200){
        setOrderList(res.data.result)
      }
    })
  },[])
  return (
    <div>
      {
        orderLists.length>0?
          <OrderListView user = {props.user} data={orderLists}></OrderListView>:
          <div>正在加速力........</div>

      }
    </div>
  )
}
