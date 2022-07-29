import React ,{useEffect,useState,createContext} from 'react'
import CommentView from "./CommentView/index"
import api from "../../../api/index"
import LoadMore from "../../../component/loadMore/index"
import "./style.less"


function Comment(props) {

  const [comment,setcomment] = useState([])
  const [hasmore,setHasmore] = useState(false)
  useEffect(()=>{
    http()
  },[])


  function onEventListern(){
    http()
  }
  function http(){
    api.getComment({id:props.id})
    .then(res=>{
      console.log(res.data);
      if(res.data.status===200){
        setcomment(comment.concat(res.data.result.data))
        setHasmore(res.data.result.hasMore)
  
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
  
    <div>
      {
        comment.length>0?
        <CommentView data={comment}></CommentView>:
        <div>
          等待数据加载
        </div>
      }
      {
        hasmore?
        <LoadMore onLoadMore = {onEventListern}></LoadMore>:
        <div className='noData'>没数据了,大咩</div>
        }
    </div>
  )
}

export default Comment