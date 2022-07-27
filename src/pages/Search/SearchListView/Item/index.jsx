import React,{useState} from "react";
import DefaultImg from "../../../../assets/images/占位.png"
// 方案一 引入图片异步处理
import { LoadImgAsync } from "../../../../utils/loadImg";

//  方案2 引入react的懒加载组件
// import LazyLoad from 'react-lazyload';

import { Link } from "react-router-dom";
import "./style.less"

const Item = (props) => {
  const [currenImg,setCurrentImg] = useState(DefaultImg)
  const data = props.data
   LoadImgAsync(data.img).then(res=>{
    setCurrentImg(res.url)
  }).catch(error=>{
    console.log(error);
  })
  // const ImgDefault = <img src={DefaultImg} alt="" />

  return (
    <div className="list-item">
    {/* // 方案1 */}
      <Link to={`/detail/${data.id}`}>
        <img src={currenImg} alt=""/>
        <div className="mask">
          <div className="left">
            <p>{data.title}</p>
            <p>{data.houseType}</p>
          </div>
          <div className="right">
            <div className="btn">
              {data.rentType}
            </div>
            <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}}></p>
          </div>
        </div>            
      </Link>


          {/* 方案2  缺点，也是缺失了效果能够一张一张加载图片的效果 */}
          {/* <LazyLoad  placeholder={ImgDefault}>
            <img src={data.img} alt="" />
            <div className="mask">
            <div className="left">
              <p>{data.title}</p>
              <p>{data.houseType}</p>
            </div>
            <div className="right">
              <div className="btn">
                {data.rentType}
              </div>
              <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}}></p>
            </div>
          </div>
          </LazyLoad> */}


    </div>
  )
}

export default Item