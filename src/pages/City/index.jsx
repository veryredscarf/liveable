import React, { useState } from "react"
import PublicHeader from "../../component/PublicHeader"
import CurrentCity from "./CurrentCity"
import CityList from "./CityList"
// 引入redux，把数据关联进redux中,使用useSelector。可以让我们读取数据，使用useDispatch，获取dispatch对象
import {useSelector,useDispatch} from "react-redux"
import {initCity,changeCity} from "../../redux/actions/city"


const City =()=>{
  // // 定义一个状态用来接受子组件传来的数据，并且传给currentcity组件，当前设置默认在北京
  // const [cityName,setCityName] = useState("北京")

  const dispatch = useDispatch()
  const city = useSelector(state=>state.city)

  // 通过向子组件传递一个函数，并且在组件中调用该函数传递参数
 function onCityEvent(currentCity){
  console.log("父组件接受",currentCity);
  dispatch(changeCity(currentCity))
  // setCityName(currentCity)
}  

  return(
    <div>
      <PublicHeader title={"城市选择"}></PublicHeader>
      <CurrentCity  city={city.cityName}></CurrentCity>
      <CityList onEvent={onCityEvent}></CityList>
    </div>
  )
}

export default City