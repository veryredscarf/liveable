import axios from 'axios'
import qs from 'querystring'


// 处理失败状态码信息

const errorHandle = (state,info)=>{
  switch(state){
    case 400:
      alert("语义有误，当前请求无法被服务器处理")
      break;
    case 401:
      // token令牌出问题
      console.log("服务器认证失败");
      break;
    case 403:
      console.log("服务器接受到消息, 但拒绝处理");
      break;
    case 404:
      console.log("请检查网络请求地址");
      break;
    case 500:
      console.log("服务器遇到了一个没有预料的状况,导致它无法完成请求的处理,或者检查下请求参数格式是否正确");
      break;
    case 502:
      console.log("作为网关或者代理工作的服务器尝试执行请求时,从上游服务器接受到无效响应");
      break;
    default:
      console.log(info);
  }
}

// 创建axios实例

const instance = axios.create({
  timeout:5000,   // 设置超时时间
  // baseURL:""   //  还可以设置请求基本的请求地址
})

// 设置请求拦截器.use方法接受两个请求参数
instance.interceptors.request.use(
  config=>{
    if(config.method === 'post'){
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

// 设置响应拦截器
instance.interceptors.response.use(
  res=>{
    return res.status === 200?Promise.resolve(res):Promise.reject(res)
  },
  error=>{
    const {response} = error
    errorHandle(response)
  }
)

export default instance



