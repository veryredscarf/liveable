import React from 'react'
import "./style.less"
import classnames from 'classnames'
const Pagination =(props)=>{
  let arr = new Array(props.length).fill(1)
  let currentIndex = props.currentIndex


  return (
    <div className="swiper-pagination">
      <ul>
      {
        arr.map((item,index)=>{
          return (
            <li key={index} className={classnames({'select':currentIndex === index})} ></li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Pagination