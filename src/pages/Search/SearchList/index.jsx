import React,{useEffect,useState} from "react";
import SearchListView from "../SearchListView";
import api from "../../../api/index"

const SearchList = (props) => {
  const [searchData,setsearchData] = useState([])
  useEffect(()=>{
    api.getSearchData({
      search:props.searchContent
    }).then(res=>{
      if(res.data.status ===200){
        setsearchData(res.data.result.data)
      }
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      {/* 判断是否有数据返回，如果没有返回则显示提示框，直到有返回值 */}
      {
        searchData.length> 0?
        <SearchListView search ={searchData}></SearchListView>:
        <div>等待数据返回</div>
      }
      
    </div>
  )
}

export default SearchList