import React from "react"
import "./style.less"

export default function Star(props){
  let num = props.num 
  if(num>5) num =5
  return (
    <div className="star-container">
      {
        [1,2,3,4,5].map((element,index)=>{
            let show = num >= element ? <i className="iconfont icon-Star-copy light"></i>:
                <i className="iconfont icon-Star-copy"></i>
          return show
        })
      }
    </div>
  )
} 