import React, { Component } from 'react'
import {StyleSheet, View, Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstTab from '../screens/Income';
import SecondTab from '../screens/Category';
import ThirdTab from '../screens/Expense';
import FourthTab from '../screens/Summery';
import HomeScreen from '../screens/HomeScreen';
// import PiePage from '../screens/screen2/Chart';

const Tab = createBottomTabNavigator();

const IncomeTabBarButton=({children,onPress})=>(
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow
    }}
    onPress={onPress}
    >
        <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:'blue'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);
class Tabs extends Component {
  render() {
    return (
      <>
      
      
      <NavigationContainer  >
     <StatusBar barStyle="light-content"  backgroundColor="blue"/>

      <Tab.Navigator initialRouteName="Home" 
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:'white',
                borderRadius:15,
                height:90,
                
                ...styles.shadow
            }
        }}
        >
         <Tab.Screen name="Home" component={HomeScreen}
         options={{
             tabBarIcon:({focused})=>(
                 <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                     <Image
                     source={require('../assets/BottomTabIcon/Home.png')}
                     resizeMode="contain"
                     style={{
                         width:25,
                         height:25,
                         tintColor:focused ? 'blue':'#333333',
                     }}
                     />
                     <Text
                      style={{color:focused ? 'blue':'#333333',fontSize:12}}>
                         Home
                         </Text>
                 </View>
             ),
         }} />
          <Tab.Screen name="SecondTab" component={SecondTab} 
          options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image
                    source={require('../assets/BottomTabIcon/category.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? 'blue':'#333333',
                    }}
                    />
                    <Text
                     style={{color:focused ? 'blue':'#333333',fontSize:12}}>
                        Category
                        </Text>
                </View>
            ),
        }} 
          />


           <Tab.Screen name="fiveth" component={FirstTab} 
        options={{
            tabBarIcon:({focused})=>(
                <Image
                    source={require('../assets/BottomTabIcon/plus.png')}
                    resizeMode="contain"
                    style={{
                        width:40,
                        height:40,
                        tintColor:'white'
                    }}
                />
            ),
            tabBarButton: (props) => (
                <IncomeTabBarButton {...props}/>
            )

        }}
        />


          <Tab.Screen name="ThirdTab" component={ThirdTab}
          options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image
                    source={require('../assets/BottomTabIcon/expense.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? 'blue':'#333333',
                    }}
                    />
                    <Text
                     style={{color:focused ? 'blue':'#333333',fontSize:12}}>
                        Expense
                        </Text>
                </View>
            ),
        }} 
          />
          <Tab.Screen name="FourthTab" component={FourthTab} 
              options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image
                    source={require('../assets/BottomTabIcon/summery.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? 'blue':'#333333',
                    }}
                    />
                    <Text
                     style={{color:focused ? 'blue':'#333333',fontSize:12}}>
                        Summery
                        </Text>
                </View>
            ),
        }} 
          />
      </Tab.Navigator>
    </NavigationContainer>
    
  </>
    );
  }
}

export default Tabs;

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
    
//   }
// });
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignContent: 'center',
  },
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
        width:0,
        height:10,

    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  },

});