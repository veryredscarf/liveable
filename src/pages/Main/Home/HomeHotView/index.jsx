import React from "react"
import "./style.less"

const HomeHotView =(props)=>{
  const {data,title} = props
  return(
    <div className="hotproduct">
      <h3>{title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {
            data.map((item,index)=>{
              return (
                <li key={index}>
                  <a href={item.link}>
                    <img src={item.img} alt=""/>
                    <span>{props.city+item.title}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default HomeHotView