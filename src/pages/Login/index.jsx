import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginAction from "../../redux/actions/login"

const Login = () =>{
  const dispatch = useDispatch()

  function onLoginEventListen(userData){
    // 往redux中存储数据
    dispatch(loginAction.setLogin(userData))
    // 也把用户信息存储在本地
    localStorage.setItem("goodlive",JSON.stringify(userData))
    window.history.back()
  }
  return (
    <div>
      <LoginView onLoginEvent = {onLoginEventListen}></LoginView>
    </div>
  )
}

export default Login