import React from 'react'
import HeaderNav from '../../../component/headNav'
import SwiperComponent from '../../../component/swiper'
import Banner1 from "../../../assets/images/banner1.png"
import Banner2 from "../../../assets/images/banner2.png"
import Banner3 from "../../../assets/images/banner3.png"
import HomeHotList from './HomeHotList/index'
import {useSelector} from "react-redux"

const Home = ()=>{
  const city = useSelector(state=>state.city)
  return (
     <div>
      {/* 在首页banner导航处添加城市名称 */}
      <HeaderNav cityName={city.cityName}></HeaderNav>
      <SwiperComponent banners={[Banner1,Banner2,Banner3]}></SwiperComponent>
      {/* 同时也往列表页传递城市名称，这样方便在获取首页列表数据时，请求对应城市的数据 */}
      <HomeHotList cityName={city.cityName}></HomeHotList>
     </div>
  )
}

export default Home