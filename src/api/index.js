import axios from "../utils/request.js"


/***
 * 路径地址
 */

const base = {
  baseUrl:"http://localhost:5566",
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
  search:"/api/search",
  details:"/api/details",
  login:"/api/login"

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
   /***
   * 获取首页热门产品2
   */
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
  },

    /***
   * 获取详情内容数据
   */
  getDetailsData(params){
    return axios.get(base.baseUrl+base.details,{params})
  },

    /***
   * 登录功能数据
   */
  setLogin(params){
    return axios.post(base.baseUrl+base.login,params)
  },


}

export default api