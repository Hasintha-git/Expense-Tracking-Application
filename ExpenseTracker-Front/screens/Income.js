import React, {Component} from 'react';
import {StyleSheet, View,ScrollView, Text,StatusBar,Image,TouchableOpacity, Alert} from 'react-native';
import { Input  } from 'react-native-elements';
// import {  Text } from 'native-base';
import IncomeView from './IncomeView';

class Income extends Component {
 
  state={

    today : new Date().toLocaleDateString(),
    textInputValue:'...',
    oldIncome:'40 000.00',
  };
  handleClick() {
    console.log('Click happened');
  }
  async clickme() {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date:this.state.today,price:this.state.textInputValue})
    };
    const response = await fetch('http://192.168.8.154:3000/api/Income', requestOptions);
    const data = await response.json();
    console.log(data.token);
    console.log(data.message);
    console.log(data.status);
    
    if(data.status==200){
       console.log("Income Added Success!");

    }else{
      console.log("Income Added Fails!");
    }
}

  render() {
    return (
      <View style={styles.MainView}>
         <StatusBar backgroundColor="blue" barStyle="light-content"/>
         <View style={styles.box1}>
          <View style={styles.circleBtnBox}>
        <Image
                    source={require('../assets/income/income3.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'white',
                    }}
                    />
            <Text style={styles.titltTxt}>Income</Text>
          </View>
        </View>
        <View style={styles.inputBox2}>
        <View style={styles.circleBtnBox}>
        <Image
                    source={require('../assets/BottomTabIcon/home/date.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'blue',
                        right:10,
                    }}
                    />
          <Text style={styles.dateTxt}>{this.state.today}</Text>
          </View>
        </View>
        
        <View style={styles.inputBox}>
        <Input 
          keyboardType='numeric'
            onChangeText={(value) => this.setState({textInputValue: value})}
             placeholder='Salary Input'
               leftIcon={
                <Image
                source={require('../assets/category/bill.png')}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor:'blue',
                }}
              />
            }
          />
<View style={styles.btnSubmitBox}>
<TouchableOpacity style={styles.btnExpense}  onPress={this.clickme.bind(this)}>
 <Text style={styles.lblIncome}>Submit</Text>
</TouchableOpacity>
<Text style={styles.copyValue}>{this.state.textInputValue}</Text>

</View>

        </View>

        <View style={styles.scrollView}>
            <IncomeView></IncomeView>
        </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingTop:10,
    maxHeight:260,
    borderRadius:25,
    top:30,
  },
  lblIncome:{
    color:'white',
    paddingLeft:5

},

btnExpense:{
  backgroundColor:'blue',
  width:130,
  height:33,
  borderRadius:30,
  alignItems:'center',
  justifyContent:'center',
  flexDirection: "row",
},
btnBox:{
  justifyContent:'center',
  alignItems:'center',
  
},
copyValue:{
  color:'red',
  fontSize:36,
  top:30,
  paddingBottom:20,
},
  MainView: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
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
  btnSubmitBox:{
   
    justifyContent:'center',
    alignItems:'center',
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
  dateTxt:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
  },
  inputBox:{
    // height:60,
    width:320,
    top:20,

    padding:20,
    backgroundColor:'white',
    borderRadius:40,
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
incomeCard:{
  width:320,
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
}
});

export default Income;
