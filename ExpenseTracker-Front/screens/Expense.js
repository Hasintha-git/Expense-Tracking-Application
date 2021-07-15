import React, {Component} from 'react';
import {StyleSheet, View,Image, Text,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import { Input  } from 'react-native-elements';

class Expense extends Component {
  constructor(props) {
    super(props);
      this.state={
        today : new Date().toLocaleDateString(),
        price:'',
        oldIncome:'40 000.00',
        reason:'',
        category:'Select Category',
      

       
      };
      this.clickCat = this.clickCat.bind(this)
}
  
clickCat(cat){
  this.setState({category : cat})
  }

  async clickme() {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date:this.state.today,price:this.state.price,reason:this.state.reason,category:this.state.category})
    };
    const response = await fetch('http://192.168.8.154:3000/api/Expense', requestOptions);
    const data = await response.json();
    console.log(data.token);
    console.log(data.message);
    console.log(data.status);
    
    if(data.status==200){
       console.log("Expense Added Success!");

    }else{
      console.log("Expense Added Fails!");
    }
}
  render() {
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
            onChangeText={(value) => this.setState({price: value})}
             placeholder='Input Expense'
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
{/* <Text style={styles.copyValue}>{this.state.textInputValue}</Text> */}

        </View>

        <View style={styles.inputBoxNote}>
        <Input 
          // keyboardType='numeric'
            onChangeText={(value) => this.setState({reason: value})}
             placeholder='Input Reason'
               leftIcon={
                <Image
                source={require('../assets/category/loan.png')}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor:'blue',
                }}
              />
            }
          />


        </View>
           
        <ScrollView style={styles.scrollView}>
        <View style={styles.circleBtnBox}>
        
        <TouchableOpacity style={styles.cardbox}
        onPress={() => this.clickCat('food')} 
        >
                  <Image
                     source={require('../assets/category/food.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                     
                         tintColor:'blue',
                     }}
                    />
                   
                    <Text style={styles.featuresTxt}>Foods</Text>

                     
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('vehicle')} 
>
                  <Image
                     source={require('../assets/category/vehicle.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Vehicle</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('transport')} 
>
                  <Image
                     source={require('../assets/category/transport.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Transport</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('house')} 
>
                  <Image
                     source={require('../assets/category/home.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>House</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('taxi')} 
>
                  <Image
                     source={require('../assets/category/taxi.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Taxi</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('health')} 
>
                  <Image
                     source={require('../assets/category/health.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Health</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('food-out')} 
>
                  <Image
                     source={require('../assets/category/food-out.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Eating-Out</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('party')} 
>
                  <Image
                     source={require('../assets/category/party.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Entertainment</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('sports')} 
>
                  <Image
                     source={require('../assets/category/sports.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Sports</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('cloths')} 
>
                  <Image
                     source={require('../assets/category/cloth.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Cloths</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('call')} 
>
                  <Image
                     source={require('../assets/category/call.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Communications</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('gift')} 
>
                  <Image
                     source={require('../assets/category/gift.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Gift</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('pets')} 
>
                  <Image
                     source={require('../assets/category/pets.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Pets</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('bill')} 
>
                  <Image
                     source={require('../assets/category/bill.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Bills</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('loan')} 
>
                  <Image
                     source={require('../assets/category/loan.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Loans</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
<TouchableOpacity style={styles.cardbox}
onPress={() => this.clickCat('others')} 
>
                  <Image
                     source={require('../assets/category/others.png')}
                     resizeMode="contain"
                     style={{
                         width:48,
                         height:48,
                         tintColor:'blue',
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Others</Text>
                  </TouchableOpacity>
{/* ***************************************** */}
                  </View>
                  
      </ScrollView>


      <View style={styles.inputBox3}>
        <View style={styles.circleBtnBox}>
        <Image
                    source={require('../assets/BottomTabIcon/category.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'blue',
                        right:10,
                    }}
                    />
          <Text style={styles.dateTxt}>{this.state.category}</Text>
          
          </View>
          <TouchableOpacity style={styles.btnExpense} onPress={this.clickme.bind(this)}>
 <Text style={styles.lblIncome}>Submit</Text>
</TouchableOpacity>

        </View>
        {/* <View style={styles.btnSubmitBox}>
<TouchableOpacity style={styles.btnExpense} onPress={this._onPressButton}>
 <Text style={styles.lblIncome}>Submit</Text>
</TouchableOpacity>


</View> */}

        </View>
      
      );
    }
  }
  
const styles = StyleSheet.create({
  text: {
    fontSize: 42,
  },
  featuresTxt:{
    color:'#333333',
    paddingTop:15
  },
  cardbox:{
    width:160,
    height:120,
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'center',
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
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingTop:10,
    maxHeight:140,
    borderRadius:25,
    top:30,
  },
  copyValue:{
    color:'red',
    fontSize:36,
  },
  lblIncome:{
    color:'white',
    paddingLeft:5

},
btnExpense:{
  backgroundColor:'blue',
  width:220,
  top:30,
  height:33,
  borderRadius:30,
  alignItems:'center',
  justifyContent:'center',
  flexDirection: "row",
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
  inputBox:{
    height:60,
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
  inputBoxNote:{
//  height:60,
 width:320,
 top:30,

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
  MainView: {
    flex: 1,
    alignItems:'center',
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
  inputBox2:{
    width:320,
    top:15,
    height:53,
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
inputBox3:{
  width:320,
  top:40,
  height:140,
  // paddingTop:50,
  // left:30,
  padding:20,
  backgroundColor:'white',
  borderRadius:25,
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
dateTxt:{
  color:'black',
  fontSize:18,
  fontWeight:'bold',
  justifyContent:'center',
  alignItems:'center',
},
});

export default Expense;
