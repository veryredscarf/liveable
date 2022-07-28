import React ,{useState,useEffect}from "react"
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import * as collectActions from "../../../redux/actions/collect"
import "./style.less"

const BuyAndStoreView = (props) =>{


  const dispatch = useDispatch()
  const [ isCollect,setisCollect] = useState(true)

  // 在页面初始化渲染之后，便根据商品数据查询用户收藏信息,从而显示在页面上数据
  useEffect(()=>{
    setisCollect(isStore())
  },[])

  function clickStoreHnadle(){
    // 判断上一个组件传来的用户信息参数
    // 如果用户的登录，则允许收藏
    if(props.user.user.token){
      // 二次判断用户是否收藏，如果收藏了，则取消收藏，如果没有收藏，则取消收藏
      if(isStore()){
        // 已经收藏
        setisCollect(true)
        dispatch(collectActions.removeCollect(props.id))

      }else{
        // 没有收藏
        setisCollect(false)
        dispatch(collectActions.setCollect(props.id))

      }
    }else{
      // 没有登录数据请登录 ,跳转的登陆页面
      props.history.push("/login")
    }
  }


     /***
     *  用户收藏判断
     *  return boolean
     *  true : 表示已经收藏了，false表示还没有收藏
     */
      function isStore(){
        let collect = props.collect
        let id = props.id
        // 数组的some方法，只要有一个元素符合条件则返回true，否则返回false
        return collect.some(item =>{
          return item === id
        })
    }


  return (
    <div className="buy-sotre-container clear-fix">
      <div className="item-container float-left">
         {
          isCollect ?
            <button onClick={clickStoreHnadle} className="selected">收藏</button>:
            <button onClick={clickStoreHnadle} className = "selected o">已收藏</button>
        }
        
      </div>

      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
      
    </div>
  )
}

export default withRouter(BuyAndStoreView)