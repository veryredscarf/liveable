import React ,{useState}from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// 引入图片资源

import "./style.less"
import Pagination from "./Pagination/index"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const  SwiperComponent =(props)=> {
  const [index,setIndex] = useState(0)

  function handleChangeIndex  (index)  {
      setIndex(index)
  };
    return (
      <div className="swiper">
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {
          props.banners.map((ele,index) =>{
            return (
              <div className="swiper-view" key={index}>
                <img src={ele} alt=""/>
              </div>
            )
          })
        }

        </AutoPlaySwipeableViews>
        {/* 并且将当前轮播图下标传递到对应组件中 */}
        <Pagination currentIndex={index} length={props.banners.length}></Pagination>
      </div>
    );
  
}

export default SwiperComponent;