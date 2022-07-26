import React from "react";
import { Link } from "react-router-dom";
import "./style.less"

const Item = (props) => {
  console.log(props);
  const data = props.data
  return (
    <div className="list-item">
        <Link>
          <img src={data.img} alt=""/>
          <div className="mask">
            <div className="left">
              <p>{data.title}</p>
              <p>{data.houseType}</p>
            </div>
            <div className="right">
              <div className="btn">
                {data.rentType}
              </div>
              {/* 利用react的api解析并渲染html标签 */}
              <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}}></p>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default Item