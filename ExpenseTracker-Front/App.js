import React, { Component } from 'react'

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Tabs from './navigation/tabs'
// import Login from './screens/Login'
import FlashScreen from './component/FlashScreen'
import Login from './screens/Auth'



const switchNavigator=createSwitchNavigator({
 
  Flash:FlashScreen,
  Log:Login,
  Home:Tabs,
})

const App=createAppContainer(switchNavigator)

export default App;