import React,{useEffect,useState} from "react";
import SearchListView from "../SearchListView";
import api from "../../../api/index"
// 引入下拉加载框
import LoadMore from "../../../component/loadMore";

const SearchList = (props) => {
  const [searchData,setsearchData] = useState([])
  // 通过请求判断是否有返回数据
  const [hasMore,sethasMore] = useState(false)

  // 通过判断props.searchContent值的变化来不断请求新的数据，从而实现搜索功能
  useEffect(()=>{
    http()
    // 设置返回箭头函数到达恢复状态的效果，在组件卸载前清空状态
    return () => {
      setsearchData([])
      sethasMore(false)
    }
  },[props.searchContent])

  // 监听loadmore组件回传的事件函数
  function loadMoreHandle(){
    http()
  }
  function http(){
    api.getSearchData({
      search:props.searchContent
    }).then(res=>{
      if(res.data.status ===200){
        // 合并数据把之前的数据和请求道的数据进行合并累计
        setsearchData(searchData.concat(res.data.result.data))
        
        sethasMore(res.data.result.hasMore)
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      {/* 判断是否有数据返回，如果没有返回则显示提示框，直到有返回值 */}
      {
        searchData.length> 0?
        <SearchListView search ={searchData}></SearchListView>:
        <div>等待数据返回</div>
      }
      {
        hasMore?
        <LoadMore onLoadMore={loadMoreHandle}></LoadMore>:
        <div>没有更多数据了，你还想要啥</div>
      }
      
    </div>
  )
}

export default SearchList