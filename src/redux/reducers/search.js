import {UPDATE_SEARCH } from "../constants/index"

const defaultState = {
  search:'',
}

export default function search(state = defaultState,action){
  switch(action.type){
    case UPDATE_SEARCH:
      return {
        search:action.search
      }
      default:
         return state
  }
}