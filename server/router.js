const express = require("express")
const router = express.Router()
const homehot = require("./data/home/homehot")
const url = require("url")
const searchData = require("./data/search/index")

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
  const search = url.parse(req.url,true).query.search
  console.log(search);
  res.send({
    status:200,
    result:searchData
  })
})


module.exports = router