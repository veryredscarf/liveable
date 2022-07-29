import React from 'react'
import Item from './Item'
import "./style.less"

function CommentView(props) {
  const data = props.data
  return (
    <div className='comment-list'>
      <ul>
        {
          data.map((ele,index) =>{
            return <Item data ={ele} key={index}></Item>
          })
        }
      </ul>
      
      
      
    </div>
  )
}

export default CommentView