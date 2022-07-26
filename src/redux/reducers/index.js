import { combineReducers} from "redux"
import city from "./city" 

// 创建根reducer，并且合并其他的reducer

const rootReducer = combineReducers({
  city
})

export default rootReducer
