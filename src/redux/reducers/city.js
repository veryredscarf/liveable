import {INIT_CITY,CHANGE_CITY} from "../constants/index"

// 初始化
const defaultState = {
  cityName:"北京"
}

const city = (state = defaultState,action) =>{
  switch(action.type){
    case INIT_CITY:
      return{
        cityName:action.cityName
      };
    case CHANGE_CITY:
      return{
        cityName:action.cityName
      };
    default:
      return state
  }
}

export default city