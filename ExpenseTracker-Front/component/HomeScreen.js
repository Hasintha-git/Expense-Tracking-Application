import React, { Component } from 'react'
import { StatusBar,View,StyleSheet,Text,TouchableOpacity } from 'react-native'

export default class componentName extends Component {

        state = {
            name:'Hasintha',
            totPrice:'50 000',
            monthIncome:'40 000'
        };
   
  render() {
    return (
        <View style={styles.container}> 
         <StatusBar backgroundColor="blue"barStyle="light-content"/>
            <View style={styles.header}>
               <Text style={styles.name}>{this.state.name}</Text>
               <Text style={styles.totTitle1}>Total in Wallet</Text>
               <Text style={styles.totPrice}>RS : {this.state.totPrice}.00</Text>
               <Text style={styles.totTitle1}>This Month Income</Text>
               <Text style={styles.monthIncome}>RS : {this.state.monthIncome}.00</Text>
               <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btnIncome}><Text style={styles.lblIncome}>Income</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnExpense}><Text style={styles.lblIncome}>Expense</Text></TouchableOpacity>
                </View>
            </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  
    container:{
        flex:1,
        backgroundColor:'white'
      },
      header:{
          top:0,
          height:300,
          backgroundColor:'blue',
          borderBottomLeftRadius:40,
          borderBottomRightRadius:40,
          paddingLeft:15,
          paddingTop:10
      },
      name: {
          color:'white',
          fontSize:20,
          fontWeight:'bold',
      },
      totTitle1:{
          color:'white',
          paddingTop:10,

      },
      totPrice:{
          color:'white',
          fontSize:38,
          fontWeight:'bold'
      },
      monthIncome:{
        color:'white',
        fontSize:28,
        fontWeight:'bold'
      },
      btnIncome:{
         backgroundColor:'white',
         width:120,
         height:33,
         borderRadius:30,
         alignItems:'center',
         justifyContent:'center',

      },
      lblIncome:{
          color:'blue',
          

      },
      btnExpense:{
        backgroundColor:'white',
        width:120,
        height:33,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10

      },
      btnBox:{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop:20
        
      }

  });