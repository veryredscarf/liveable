import React from "react";
import "./style.less"

const CurrentCity =(props)=>{
  return(
    <div className="current-city">
      <h2>当前城市：{props.city}</h2>
    </div>
  )
}

export default CurrentCity