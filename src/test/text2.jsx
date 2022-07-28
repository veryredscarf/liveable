import React,{useContext,useEffect} from 'react'
import {GlobalContext} from './test1'

export default function FilmItem(props) {
  let {name, poster,grade,synopsis}  = props
  const value = useContext(GlobalContext)
  useEffect(()=>{
    console.log(value.info);
  },[value])

  // console.log(context)
  return <div className="filmitem" onClick={()=>{
              console.log(synopsis)
              // this.props.onEvent(synopsis)

              // value.info = "2222222"

              // console.log(value)

              value.changeInfo(synopsis)
          }}>
              <img src={poster} alt={name}/>
              <h4>{name}</h4>
              <div>观众评分：{grade}</div>
          </div> 
}
