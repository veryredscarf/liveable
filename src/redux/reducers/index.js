import { combineReducers} from "redux"
import city from "./city" 
import search from "./search"
import login from "./login"
import collect from "./collect"
// 创建根reducer，并且合并其他的reducer

const rootReducer = combineReducers({
  city,
  search,
  login,
  collect
})

export default rootReducer
