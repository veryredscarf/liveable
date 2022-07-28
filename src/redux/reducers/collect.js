import {ADD_COLLECT,REMOVE_COLLECT}  from "../constants"
import { findIndex } from "lodash";

const defaultState = []

export default function collect(state = defaultState,action){
  switch (action.type){
    case ADD_COLLECT:
      return [  
        ...state,
        action.collect
     ];
    case REMOVE_COLLECT:
      const currentIndex = findIndex(state,item => item===action.id)
      return [
        ...state.slice(0,currentIndex),
        ...state.slice(currentIndex+1)
      ];
    default:
      return state

  }
}
