import * as loginAction from "../redux/actions/login" 
import store from "../redux/store/index"


let userInfo = localStorage.getItem("goodlive")
if(userInfo){
  store.dispatch(loginAction.setLogin(JSON.parse(userInfo)))
}