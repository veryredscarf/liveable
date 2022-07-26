import axios from "../utils/request.js"


/***
 * 路径地址
 */

const base = {
  baseUrl:"http://localhost:5566",
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
  search:"/api/search"
}
/***
 * 请求方法
 */
const api ={
  /***
   * 获取首页热门产品1
   */
  getHomeHot1(params){
    return axios.get(base.baseUrl+base.homehot1,{
      params
    })
  },
  getHomeHot2(params){
    return axios.get(base.baseUrl+base.homehot2,{
      params
    })
  },

    /***
   * 获取搜索内容数据
   */
  getSearchData(params){
    return axios.get(base.baseUrl+base.search,{params})
  }
}

export default api