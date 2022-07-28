import React ,{useState,useEffect,useContext}from "react"
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import * as collectActions from "../../../redux/actions/collect"


// import {GoodContext} from '../../Detail/index'

import "./style.less"


const BuyAndStoreView = (props) =>{

  // console.log(GoodContext,1);

  // const name = useContext(GoodContext) 
  // console.log(name);
  // useEffect(()=>{
  //   console.log(name);
  // },[name])




  const dispatch = useDispatch()
  const [ isCollect,setisCollect] = useState(false)

  // 在页面初始化渲染之后，便根据商品数据查询用户收藏信息,从而显示在页面上数据
  useEffect(()=>{
    setisCollect(isStore())
  },[])

  console.log(isCollect);

  function clickStoreHnadle(){
    // 判断上一个组件传来的用户信息参数
    // 如果用户的登录，则允许收藏
    if(props.user.user.token){
      // 二次判断用户是否收藏，如果收藏了，则取消收藏，如果没有收藏，则取消收藏
      if(isStore()){
        // 取消收藏
        console.log(22222222);
        setisCollect(false)
        dispatch(collectActions.removeCollect(props.id))


      }else{
        // 已经收藏
        console.log(11111);
        setisCollect(true)
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
          console.log(id);
          console.log(collect);

        // 数组的some方法，只要有一个元素符合条件则返回true，否则返回false
        return collect.some(item => item ===id)
    }


  return (
    <div className="buy-sotre-container clear-fix">
      <div className="item-container float-left">
         {
          !isCollect ?
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