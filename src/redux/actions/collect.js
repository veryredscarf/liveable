import { REMOVE_COLLECT,ADD_COLLECT  } from "../constants";
export function setCollect(collect){
  return {
    type:ADD_COLLECT,
    collect
  }
}
export function removeCollect(id){
  return {
    type:REMOVE_COLLECT,
    id
  }
}