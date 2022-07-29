import React ,{useEffect}from 'react'
import { useSelector, } from 'react-redux'
import { withRouter } from 'react-router-dom'
import OrderHeader from "../../component/PublicHeader"
import UserInfo from './UserInfo'
import OrderList from './OrderList'

 function Order(props) {
  const city = useSelector(state => state.city)
  const user = useSelector(state => state.login.user)
  useEffect(()=>{
    if(!user.token){
      props.history.push("/login")
    }
  })

  return (
    <div>
      <OrderHeader title={"订单评价"}></OrderHeader>
      <UserInfo city = {city} user= {user}></UserInfo>
      <OrderList user= {user}></OrderList>
    </div>
  )
}

export default withRouter(Order)