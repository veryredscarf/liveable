import React from 'react'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home/index'
import LifeService from '../pages/LifeService/index'
import Profile from '../pages/Profile/index'
import Shop from '../pages/Shop/index'
import BottomNav from '../component/bottomNav'

const AppRouter = ()=>{
  return (
    <Router>
      <BottomNav/>
      <Switch>
        <Route path='/' exact={false}  component ={Home}/>
        <Route path='/life' component={LifeService} />
        <Route path='/profile' component={Profile} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </Router>
  )
}


export default AppRouter
