import React, { Component } from 'react'
import {StyleSheet, View,Image, Text,FlatList} from 'react-native';

export default class ExpenseView extends Component {
  constructor(props) {
    super(props);
    this.state={
      oldIncome:'40 000.00',
      total:'',
      isLoading:true,
      priceData:[]
    };
  

}

      async componentDidMount(){
        await fetch('http://192.168.8.154:3000/api/getExpense')
        .then((response)=> response.json())
        .then((responseJson)=>{
          this.setState ({
            isLoading: false,
            priceData : responseJson
          })
        })
      }
      _renderItem=({item,index})=>{
        return(
         
          <View style={styles.incomeCard}>
        
        <Text 
          style={{
            color:'blue',
            left:20,
        }}
        >{item.reason}</Text>
  
          <Text style={styles.oldincomeTxt}>{item.price}</Text>
          </View>
        )
      }

  render() {
    let{priceData,isLoading}=this.state
    return (
      <>
    
    <View style={styles.circleBtnBox}>
            
            <FlatList
             data={priceData}
             scrollEnabled={true}
             renderItem={this._renderItem}
             keyExtractor={(item,index) => index.toString()}
            />
   
           </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
    incomeCard:{
      width:305,
      height:80,
      backgroundColor:'white',
      borderRadius:10,
      left:5,
      // alignItems:'center',
      justifyContent:'center',
      margin:5,
      shadowColor:'black',    
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5,
      shadowOffset:{
        width:0,
        height:10,
      },
    },
    oldincomeTxt:{
      position:'absolute',
      right:20,
      color:'#333333',
      fontWeight:'bold',
      fontSize:18
    },
    circleBtnBox:{
      flexDirection: "row",
      flexWrap: "wrap",
  
  
    },
    scrollView: {
      backgroundColor: 'white',
      maxHeight:260,
      borderRadius:25,
    },
    scroll:{
      height:100,
      maxWidth:320,
      top:20
    },
    pieChart:{
      alignItems:'center',
      maxWidth:100,
      shadowColor:'black',    
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5,
      shadowOffset:{
        width:0,
        height:10,
      },
    },
    inputBox2:{
      width:320,
      top:15,
      height:63,
      // paddingTop:50,
      // left:30,
      padding:20,
      backgroundColor:'white',
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center',
      shadowColor:'black',    
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5,
      shadowOffset:{
        width:0,
        height:10,
      },
  },
    MainView: {
      flex: 1,
      backgroundColor: 'white',
      alignItems:'center'
    },
    box1:{
      width:360,
      height:70,
      backgroundColor:'blue',
      // borderBottomLeftRadius:10,
      // borderBottomRightRadius:10,
      paddingLeft:10,
      justifyContent:'center',
      shadowColor:'black',    
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:20,
      shadowOffset:{
        width:0,
        height:10,
      },
    },
    circleBtnBox:{
      flexDirection: "row",
      flexWrap: "wrap",
  
  
    },
    titltTxt:{
      color:'white',
      fontSize:22,
      fontWeight:'bold',
      paddingLeft:10
    },
    titltSub:{
      color:'gray',
      fontSize:22,
      fontWeight:'bold',
      paddingLeft:10
    },
    txtBalance:{
      color:'red',
      fontSize:24
    }
  });
  