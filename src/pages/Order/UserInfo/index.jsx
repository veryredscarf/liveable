import React from 'react'

import "./style.less"

function UserInfo(props) {


  return (
    <div className='userinfo-container'>
      <p>
        <i className="iconfont icon-icon_user"></i>
        <span>{props.user.nick}</span>
      </p>
      <p>
        <i className="iconfont icon-map"></i>
        <span>{props.city.cityName}</span>
      </p>
    </div>
  )
}

export default UserInfo