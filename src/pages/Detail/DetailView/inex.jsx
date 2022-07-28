import React,{ useEffect,useState} from "react";
import DetailHeader from "../../../component/PublicHeader/index"
import Swiper from "../../../component/swiper/index"
import BuyAndStore from "../BuyAndStore";
import Tabs from "../../../component/Tabs";
import Comment from "../Comment";
import "./style.less"

const DetailView =(props) =>{
  let DetailData = props.DetailData
  
 
  return (
    <div>
      <DetailHeader title={"详情页"}></DetailHeader>
       <div>
          <Swiper banners= {DetailData.imgs}></Swiper>
          <Tabs>
            <div label="详情">
              <div  className="detail-info">
                <h3>{DetailData.title}</h3>
                <div className="box">
                  <ul>
                    <li>
                      <span>{DetailData.price}/月</span>
                      <p>租金</p>
                    </li>
                    <li>
                      <span>{DetailData.info.type}</span>
                      <p>房屋类型</p>
                    </li>
                    <li>
                      <span>{DetailData.houseType}</span>
                      <p>面积</p>
                    </li>
                  </ul>
                </div>

                <div className="info">
                  <div className="info-list">
                    <p>类型:{DetailData.info.type}</p>
                    <p>朝向:{DetailData.info.orientation}</p>
                  </div>              
                  <div className="info-list">
                    <p>楼层:{DetailData.info.level}</p>
                    <p>装修:{DetailData.info.style}</p>
                  </div>              
                  <div className="info-list">
                    <p>年代:{DetailData.info.years}</p>
                  </div>              
                </div>
              </div>
            </div>

            <div label ="评价">
               <Comment id = {props.id}></Comment>
            </div>
          </Tabs>

          <BuyAndStore id = {props.id}></BuyAndStore>
        </div>
  


    </div>
  )
}

export default DetailView