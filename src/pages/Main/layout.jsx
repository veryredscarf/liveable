import React from "react";
const Layout =(props)=>{
  console.log(props);
  return (
    <div>
      {props.children}
    </div>
  )
}
export default Layout