import React ,{useState}from "react";
import api from "../../../api";
// 引入验证规则
import validator from "../../../utils/validator";
import classnames from "classnames";
import "./style.less"


const LoginView = (props) =>{
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  // 存储错误信息，方便后面做校验使用
  const [errors,setErrors] = useState({})

  function changeHandle(e){
    
    let value = e.target.value
    if(e.target.name === "username"){
      setUserName(value)
    }else if(e.target.name === "password"){
      setPassword(value)
    }
  
  }
  function clickHandle(e){
    e.preventDefault()
    var {isValid,errors} = validator({
      username:userName,
      password
    })

    // 验证成功  isValid为false
    if(!isValid){
      api.setLogin({
        password,
        usename:userName
      }).then(res=>{
        if(res.data.status ===200){
          // 登录成功
          console.log(res.data);
          setErrors({})
         props.onLoginEvent(res.data)
        }else{
          // 登陆失败
          console.log("登陆失败");
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }else{
      console.log(errors);
      setErrors(errors)
    }

  }
  return (
    <div id="login-container">
      <form action="" onSubmit={clickHandle}>
      <div className={classnames("input-container phone-container",{'input-container-error':errors.username})}>
      {/* <div className="input-container phone-container input-container-error"> */}
          <i className="iconfont icon-shouji"></i>
          <input type="text"
            placeholder="用户名/手机号"
            value={userName}
            name="username"
            onChange= {changeHandle}
          />
        </div>
        {/* <div className="input-container password-container"> */}
      <div className={classnames("input-container password-container",{'input-container-error':errors.password})}>

          <i className="iconfont icon-yuechi"></i>
          <button>发送验证码</button>
          <input type="password"
              placeholder="请输入验证码"
              value={password}
              name="password"
              onChange= {changeHandle}
              />
        </div>
        <button className="btn-login">登录</button>
      </form>
    </div>
  )
}

export default LoginView