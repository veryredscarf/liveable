import React from "react"
import BuyAndStoreView from "../BuyAndStoreView/index"
// 通过读取redux数据,来判断用户是否登录
import { useSelector } from "react-redux"
 
import "./style.less"

const BuyAndStore = (props) =>{
  // 从redux中获取用户信息
  const userInfo = useSelector(state => state.login);
  // 从redux中获取用户收藏信息
  const collections = useSelector(state => state.collect) 

  console.log(userInfo);

  return (
    <div className="buy-and-store">
      <BuyAndStoreView user={userInfo} collect = {collections} id= {props.id}></BuyAndStoreView>
    </div>
  )
}

export default BuyAndStore