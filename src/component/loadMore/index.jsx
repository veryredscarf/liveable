import React,{useEffect,useRef,useState} from "react";
import "./style.less"

const LoadMore =(props)=>{
  const loadMore = useRef()
  const [loadTop,setloadTop] = useState(10000)

  useEffect(()=>{
    // 2. 获取视口高度
    let windHeight = document.documentElement.clientHeight
    // 4.1 定义定时器变量 --定义防抖
    let timer = null

    // 1. 添加滚动事件
    window.addEventListener("scroll",()=>{
      // 3. 通过非受控组件来获取元素,并且获取元素距离视口的距离

      if(loadMore.current){
        setloadTop(loadMore.current.getBoundingClientRect().top)
        // 4.2 处理防抖
          if(timer){
            clearTimeout(timer)
            // timer = null
          }else{
            timer = setTimeout(()=>{
              if(windHeight > loadTop ){
                // 产生回调事件，请求搜索更多数据
                props.onLoadMore()
              }
            },300)
          }
      }
    })

  
  },[loadTop])
  // 方案2
  // useEffect(()=>{
  //   // 2. 获取视口高度
  //   let windHeight = document.documentElement.clientHeight
  //   // 4.1 定义定时器变量 --定义防抖
  //   let timer = null

  //   // 1. 添加滚动事件
  //   window.addEventListener("scroll",()=>{
  //     // 3. 通过非受控组件来获取元素,并且获取元素距离视口的距离
 //     let top = loadMore.current.getBoundingClientRect().top
  //     if(loadMore.current){
  //       // 4.2 处理防抖
  //         if(timer){
  //           clearTimeout(timer)
    //         timer = null
  //         }else{
  //           timer = setTimeout(()=>{
  //             if(windHeight > top ){
  //               console.log("加载更多数据");
  //             }
  //           },300)
  //         }
  //     }
  //   })

  
  // },[])
  return (
    <div className="load" ref={loadMore}>
      加载更多
    </div>
  )
}

export default LoadMore