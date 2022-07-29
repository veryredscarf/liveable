import React from 'react'
import OrderListViewItem from './Item';

export default function OrderListView(props) {
  console.log(props.data);
  return (
    <div>

      {
        props.data.map((ele,index)=>{
          return <OrderListViewItem user={props.user} key={index} data={ele} ></OrderListViewItem>
        })
      }
      
    </div>
  )
}
