import React,{ useState } from "react";
import CitySelect from 'react-city-select';
// 导入城市数据
import cityData from "../../../data/data.json"
import "./style.less"
import { withRouter } from "react-router-dom";


const CityLists =(props)=>{

  const [citysData,setCitysState] = useState(cityData.result.citylist)
  function handleSelectCity(cityData){
    console.log(cityData);
    props.onEvent(cityData.name)
  }

  return (
    <div className="cityLists">
      <h3>城市列表</h3>
      <CitySelect
        // 传入数据
        data= {citysData}
        onSelectItem ={handleSelectCity}
      >  
      </CitySelect> 
    </div>
  )
}

export default withRouter(CityLists)