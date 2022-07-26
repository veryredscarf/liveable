import React from 'react'
import {HashRouter as Router,Route,Switch } from 'react-router-dom'
import Home from '../pages/Main/Home/index'
import LifeService from '../pages/Main/LifeService/index'
import Profile from '../pages/Main/Profile/index'
import Shop from '../pages/Main/Shop/index'
import BottomNav from '../component/bottomNav'
import City from "../pages/City/index"
import Search from "../pages/Search/index"
import Detail from '../pages/Detail'
import Login from "../pages/Login/index"
import Order from '../pages/Order'

import Layout from "../pages/Main/layout"

const AppRouter = ()=>{
  return (
    <Router>
      
      <Switch>
        <Route path='/city' component={City} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/search/:keywords' component={Search} />
        <Route path='/login' component={Login} />
        <Route path='/order' component={Order} />
        <Layout>
          <BottomNav/>
          <Switch>
            <Route path='/' exact  component ={Home}/>
            <Route path='/life' component={LifeService} />
            <Route path='/profile' component={Profile} />
            <Route path='/shop' component={Shop} />
          </Switch>
        </Layout>       
      </Switch>
    </Router>
  )
}


export default AppRouter
