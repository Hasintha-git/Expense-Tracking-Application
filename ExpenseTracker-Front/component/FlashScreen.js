
import React, { Component } from 'react'
import {Text,StyleSheet,StatusBar,Button,View, ActivityIndicator} from 'react-native';
import { Image } from 'react-native-elements';


export default class FlashScreen extends Component {
  
 componentDidMount(){
  setTimeout(() => {
    this.props.navigation.navigate('Log')
  }, 4000);
 }

  render() {
    return (
      <View style={styles.container}> 
       <StatusBar backgroundColor="blue"barStyle="light-content"/>
       <Image
                    source={require('../assets/main/logo3.png')}
                    resizeMode="contain"
                    style={{
                        width:150,
                        height:150,
                        alignItems:'center',
                        justifyContent:'center'
                        // tintColor:'red'
                    }}
                    PlaceholderContent={<ActivityIndicator />}
                    />
        {/* <Text style={styles.txt}>Expense Tracking</Text> */}
          <ActivityIndicator size='large' color='white' style={{margin:10}}/>
      
      </View>
    )
  }
}
const styles=StyleSheet.create({
    txt:{
        color:'#333333',
        fontSize:23,

        textAlign:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontFamily:'lucida grande',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
      }
  });