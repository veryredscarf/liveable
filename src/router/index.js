import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home/index'
import LifeService from '../pages/LifeService/index'
import Profile from '../pages/Profile/index'
import Shop from '../pages/Shop/index'
import BottomNav from '../component/bottomNav'

const AppRouter = ()=>{
  return (
    <Router>
      <BottomNav/>
      <Routes>
        <Route path='/' exact={false}  element ={<Home/>}/>
        <Route path='/life' element ={<LifeService/>}/>
        <Route path='/profile' element ={<Profile/>}/>
        <Route path='/shop' element ={<Shop/>}/>
      </Routes>
    </Router>
  )
}


export default AppRouter
