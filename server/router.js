const express = require("express")
const router = express.Router()
const homehot = require("./data/home/homehot")
const url = require("url")
const searchData = require("./data/search/index")
const details = require("./data/details/index")
const bodyParser = require("body-parser")


// 引入mock
const Mock = require("mockjs")
const { Random } = require("mockjs")




/***
 * 首页热门数据
 */
router.get("/home/hot1",(req,res)=>{
  const cityName = url.parse(req.url,true).query.cityName
  console.log(cityName);
  res.send({
    status:200,
    result:homehot.hot1,
    city:cityName
  })
})
router.get("/home/hot2",(req,res)=>{
  const cityName = url.parse(req.url,true).query.cityName
  console.log(cityName);
  res.send({
    status:200,
    result:homehot.hot2,
    city:cityName
  })
})

/***
 * 搜索结果页面数据
 */



router.get("/search",(req,res)=>{
  var data = Mock.mock({
    hasMore: true,
    'data|6': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: Random.integer(),
      title:Random.csentence(5,15),
      houseType:`${Random.integer(60, 100)}/${Random.integer(60, 100)}| ${Random.integer(3,5)}室${Random.integer(1,3)} - ${Random.float(80, 200, 2)}㎡`,
      price:`<h3>${Random.integer(1000,3000)}</h3>`,
      rentType:Random.cword(2),
      img:Random.image('800x600', Random.color(), Random.color(), 'png', '点我观看美羊  羊洗澡')
  }]
  })
  const search = url.parse(req.url,true).query.search
  console.log(search);
  res.send({
    status:200,
    result:data,
    
  })
})


/***
 * Mock测试
 */



//  id: Math.random().toString().slice(2),
//  title: "豪宅 · 使馆壹号院4居室-南",
//  houseType: "17/19层| 4室1厅 - 273.97 ㎡",
//  price: "<h3>130000</h3>",
//  rentType: "整租",
//  img: "http://iwenwiki.com/api/livable/search/1.jpg"


router.get("/mock",(req,res)=>{
  var data = Mock.mock({
    'data|6': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: Random.integer(),
      title:Random.csentence(5,15),
      houseType:`${Random.integer(60, 100)}/${Random.integer(60, 100)}| ${Random.integer(3,5)}室${Random.integer(1,3)} - ${Random.float(80, 200, 2)}㎡`,
      price:`<h3>${Random.integer(1000,3000)}</h3>`,
      rentType:Random.cword(2),
      img:Random.image('800x600', Random.color(), Random.color(), 'png', '点我观看美羊羊洗澡')
  }]
  })
  res.send({
    status:200,
    result:data
  })
})


/***
 * 详情页面数据
 */

router.get("/details",(req,res)=>{
  const id  = url.parse(req.url,true).query.id
  console.log(id);
  res.send({
    status:200,
    result:details
  })
})

/***
 * post传参   ---登录功能
 */

router.post("/login",(req,res)=>{
  const {usename,password} = req.body
  if(usename&&password){
    res.send({
      status:200,
      token:"hudfuhsufhoua;fdqur.eoqworujoisohaugi;ugcyauysmmLkzjxoilkpopw",
      nick:Random.csentence(5,7)
    })
  }else{
    res.send({
      status:401,
      msg:"搞锤子，用户名和密码错误"
    })
  }
})

module.exports = router