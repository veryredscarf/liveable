import React,{useState,useEffect} from "react"
import api from '../../../../api/index'
import HomeHotView from "../HomeHotView"

const HomeHotList =()=>{
  const [hot1List,setHot1List] = useState([]) 
  const [hot2List,setHot2List] = useState([]) 
  // 在useEffect中书写网络请求方法
  // useEffect 传递第二个参数，它是 effect 所依赖的值数组
  // useEffect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。
  useEffect(()=>{
    api.getHomeHot1().then(res=>{
      if(res.data.status===200){
        setHot1List(res.data.result)
      }
    })
  },[])

  useEffect(()=>{
    api.getHomeHot2().then(res=>{
      if(res.data.status===200){
        setHot2List(res.data.result)
      }
    })
  },[])


  return(
    <div>
      {/* 在渲染页面之前，判断前方是否返回有数据，如果请求返回了数据，则渲染页面 */}
      {
        hot1List.length>0?
        <HomeHotView data={hot1List} title={'热门产品'}></HomeHotView>:
        <div>等待数据加载</div>
      }
      {
        hot2List.length>0?
        <HomeHotView data={hot2List} title={'新品推荐'}></HomeHotView>:
        <div>等待数据加载</div>
      }
    </div>
  )
}

export default HomeHotList