import React, { Component } from 'react'

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Login from './Login'
import Signin from './Signin'


const switchNavigator=createSwitchNavigator({
  Log:Login,
  Sign:Signin
})

const Auth=createAppContainer(switchNavigator)

export default Auth;