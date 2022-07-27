import { combineReducers} from "redux"
import city from "./city" 
import search from "./search"

// 创建根reducer，并且合并其他的reducer

const rootReducer = combineReducers({
  city,
  search
})

export default rootReducer
