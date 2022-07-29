import React,{useState,useEffect,useRef} from 'react'
import api from '../../../../api'
import "./style.less"


/**
 * 两个按钮：
 *    评价：未评价，
 *    已评价：评论完毕，不可再被点击
 */

export default function OrderListViewItem(props) {
  const data = props.data
  const commentContent = useRef()

  // 用来保存当前评论框的状态
  const [currentCommentState,setState] = useState(0)
  useEffect(() => {
    setState(data.commentState)
  }, [])
  

  function clickHandle(){
    setState(1)
  }
  function cancleHandle(){
    setState(0)
  }
  function subHandle(){
    setState(0)
    api.submitComment({
      id:data.id,
      username:props.user.nick,
      content:commentContent.current.value
    }).then(res=>{
      if(res.data.status ===200){
        setState(2)
      }else{
        setState(0)
      }
     
    })
  }
  return (
    <div className='order-item-container clear-fix'>
      <div className='order-item-img float-left'>
        <img src={data.img} alt=""/>
      </div>
      <div className='order-item-comment float-right'>
        {
         currentCommentState===0?
          <button onClick={clickHandle} className="btn">评价</button>
           :currentCommentState===1?""
           :<button onClick={clickHandle} className="unselected-btn btn" disabled>已评价</button>
        }
        
      </div>

      <div className='oder-item-content'>
        <span>商户: {data.title}</span>
        <span>类型: {data.houseType}</span>
        <span>价格: {data.price}</span>
      </div>

        {
          currentCommentState ===1?
          <div className='comment-text-container'>
            <textarea ref = {commentContent} style={{width:"100%",height:"80px"}} className='comment-text' ></textarea>
            <button onClick={subHandle} className='btn'>提交</button>
            <button onClick={cancleHandle} className='btn unselected-btn'>取消</button>
          </div>:""
        }



    </div>
  )
}
