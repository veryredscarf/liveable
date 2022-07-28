import { SET_LOGIN,OUT_LOGIN } from "../constants";

export function setLogin(user){
  return {
    type:SET_LOGIN,
    user
  }
}
export function outLogin(){
  return {
    type:OUT_LOGIN
  }
}