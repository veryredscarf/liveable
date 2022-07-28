import React ,{useEffect,useState} from 'react'
import CommentView from "./CommentView/index"
import api from "../../../api/index"

function Comment(props) {
  const [comment,setcomment] = useState([])
  useEffect(()=>{
    api.getComment({id:props.id})
    .then(res=>{
      console.log(res.data);
      if(res.data.status===200){
        setcomment(res.data.result.data)
      }
    })
    .catch(error=>{
      console.log(error);
    })
  },[])
  return (
    <div>
      <CommentView></CommentView>
    </div>
  )
}

export default Comment