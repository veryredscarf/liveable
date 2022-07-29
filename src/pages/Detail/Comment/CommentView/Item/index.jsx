import React from 'react'
import Star from '../../../../../component/Star'
import "./style.less"

export default function Item(props) {
  const data = props.data
  return (
    <div className='comment-item'>
      <h3>
        <i className='iconfont icon-icon_user'></i>
        {data.username}
      </h3>
      <Star num ={data.star}></Star>
      <p>{data.comment}</p>
    </div>
    
  )
}
