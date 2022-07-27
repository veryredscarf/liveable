import {UPDATE_SEARCH } from "../constants/index"



export function updateSearch(search){
  return {
    type:UPDATE_SEARCH,
    search
  }
}