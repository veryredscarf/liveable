import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginAction from "../../redux/actions/login"

const Login = () =>{
  const dispatch = useDispatch()

  function onLoginEventListen(userData){
    dispatch(loginAction.setLogin(userData))
    window.history.back()
  }
  return (
    <div>
      <LoginView onLoginEvent = {onLoginEventListen}></LoginView>
    </div>
  )
}

export default Login