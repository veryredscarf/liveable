import React,{useState} from "react";
import "./style.less"

/***
 * tabs视图结构
 */

const Tabs = (props) =>{
  const  [ currentIndex,setcurrentIndex] = useState(0)
  function tabClickHandle(index){
    setcurrentIndex(index)
  }
  function tabActiveHandle(index){
    return currentIndex === index ? "Tab_title active" : "Tab_title"
  }
  return (
    <div>
      <ul className="Tab_title_wrap">
        {
          React.Children.map(props.children,(element,index)=>{
             return <li onClick={()=>tabClickHandle(index)} className={tabActiveHandle(index)} key={index}>{element.props.label}</li>
          })
        }
        
      </ul>

      <div>
        {
          React.Children.map(props.children,(element,index) =>{
            return(
              <div>
                {currentIndex === index? element.props.children:""}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tabs