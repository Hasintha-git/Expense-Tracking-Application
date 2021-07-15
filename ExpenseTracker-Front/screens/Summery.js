import React, {Component} from 'react';
import {StyleSheet, View,Image, Text,StatusBar, TouchableOpacity,TheDropView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Income from '../screens/Income';

import IncomeView from '../screens/IncomeView';
import ExpenseView from '../screens/ExpenseView';

// import PieChart from 'react-native-pie-chart';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryPie} from 'victory-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const data={
  income:[
    {x:'07/02/21',y:1000},
    {x:'07/05/21',y:1500},
    {x:'08/05/21',y:2000},
    {x:'07/1/21',y:500},
  ],
  expense:[
    {x:'07/02/21',y:50000},
    {x:'07/05/21',y:40000},
    {x:'08/05/21',y:20000},
    {x:'07/1/21',y:50000},
  ],
}
class Summery extends Component{
  constructor(props) {
    super(props);
    this.state={
      oldIncome:'40 000.00',
      };
  }
 
  _onPressButton() {
  alert("hi")
  }

  render() {
    // const chart_wh = 250
    // const series = [123, 321, 123, 789, 537]
    // const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
  return (
    <View style={styles.MainView}>
       <StatusBar backgroundColor="blue" barStyle="light-content"/>
         <View style={styles.box1}>
          <View style={styles.circleBtnBox}>
        <Image
                    source={require('../assets/BottomTabIcon/home/expense.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'white',
                    }}
                    />
            <Text style={styles.titltTxt}>Expense</Text>
          

          </View>
        </View>
        <View style={styles.inputBox2}>
        <View style={styles.circleBtnBox}>
        <Image
                    source={require('../assets/category/bill.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'blue',
                        right:10,
                    }}
                    />
          <Text style={styles.txtBalance}>50000.00</Text>
          </View>
        </View>
      <ScrollView style={styles.scroll} nestedScrollEnabled ={true}>

      <Text style={styles.titltSub}>Income</Text>
      <VictoryPie data={data.income}  colorScale='cool' />
      <TouchableOpacity onPress={this._onPressButton}>
     
        </TouchableOpacity>

      
        <IncomeView></IncomeView>
       
        
        
{/* ******************************expense************************** */}
<Text style={styles.titltSub}>Expense</Text>
          <VictoryPie data={data.expense}  colorScale='blue' />
      
        <ExpenseView></ExpenseView>
        
        
        </ScrollView>

      
     
      </View>
      
      );
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

    borderRadius:25,
  },
  scroll:{
    height:100,
    maxWidth:320,
    top:20,
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
    alignItems:'center',
    maxHeight:620
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

export default Summery;
