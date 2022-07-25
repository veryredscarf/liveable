import React from 'react'
import HeaderNav from '../../component/headNav'
import SwiperComponent from '../../component/swiper'
import Banner1 from "../../assets/images/banner1.png"
import Banner2 from "../../assets/images/banner2.png"
import Banner3 from "../../assets/images/banner3.png"

const Home = ()=>{
  return (
     <div>
      <HeaderNav></HeaderNav>
      <SwiperComponent banners={[Banner1,Banner2,Banner3]}></SwiperComponent>
     </div>
  )
}

export default Home