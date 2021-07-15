import React, { Component } from 'react'
import { StatusBar,View,StyleSheet,Text,TouchableOpacity,Image } from 'react-native'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
        this.state = {
            name:'Hasintha',
            totPrice:'',
            monthIncome:'',
        };
        this.getAllData('cat')
        this.getMonthIncome('month')
      }
   
      async getAllData(cat){
        const response = await fetch('http://192.168.8.154:3000/api/getIncome');
        const data=await response.json();
        
        // this.setState({oldIncome : data.price})
        let tot=0;
        for (let index = 0; index < data.length; index++) {
           const element = data[index].price;
           tot+=element;
          console.log(element);
          
          } 
          this.setState({totPrice:tot})
          console.log(this.state.totPrice);
          console.log(tot);
      
          }

          async getMonthIncome(cat){
            const response = await fetch('http://192.168.8.154:3000/api/getLast');
            const data=await response.json();
            this.setState({monthIncome:data.price})
          
            }

  render() {
    return (
        <View style={styles.container}> 
         <StatusBar backgroundColor="blue"barStyle="light-content"/>
            <View style={styles.header}>
            <View style={styles.btnBox}>
               <Text style={styles.name}>{this.state.name}</Text>
             
               <Image source={require('../assets/logout.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:'gray',
                        position:'absolute',
                        right:10,
                        
                    }}
                    
                    />
               
               </View>
               <Text style={styles.totTitle1}>Total in Wallet</Text>
               <Text style={styles.totPrice}>RS : {this.state.totPrice}.00</Text>
               <Text style={styles.totTitle1}>This Month Income</Text>
               <Text style={styles.monthIncome}>RS : {this.state.monthIncome}.00</Text>

               <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btnIncome}>
                  
               
        <Image
                    source={require('../assets/income/income3.png')}
                    resizeMode="contain"
                    style={{
                        width:15,
                        height:15,
                        tintColor:'#333333',
                    }}
                    />
      <Text style={styles.lblIncome}>Income</Text>              

                  
                      
                  </TouchableOpacity>


                <TouchableOpacity style={styles.btnExpense}>
                  
                <Image
                    source={require('../assets/BottomTabIcon/home/expense.png')}
                    resizeMode="contain"
                    style={{
                        width:15,
                        height:15,
                        tintColor:'#333333',
                    }}
                    />
      <Text style={styles.lblIncome}>Expense</Text>              


                  </TouchableOpacity>
                </View>

                <View style={styles.circleBtnBoxMain}>

                <View style={styles.circleBtnBox}>
                <View style={{alignItems:'center',justifyContent:'center',top:0}}>
                  
                  <View style={{backgroundColor:'#4834d4',borderRadius:50,padding:8}} >
                    <Image
                    source={require('../assets/BottomTabIcon/home/date.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:'#54a0ff',
                    }}
                    />
                    </View>

                    <Text
                     style={{color:'#54a0ff',fontSize:12}}>
                        Date
                        </Text>
                    </View>
                  </View>
                  
                    <View style={styles.circleBtnBox}>
                      <View style={{alignItems:'center',justifyContent:'center',top:0}}>
                      
                      <View style={{backgroundColor:'#4834d4',borderRadius:50,padding:8}} >
                        <Image
                        source={require('../assets/BottomTabIcon/home/note.png')}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor:'#54a0ff',
                        }}
                        />
                    </View>

                    <Text
                     style={{color:'#54a0ff',fontSize:12}}>
                        Note
                        </Text>
                     </View>
                  </View>
                  
                  <View style={styles.circleBtnBox}>
                <View style={{alignItems:'center',justifyContent:'center',top:0}}>
                  
                  <View style={{backgroundColor:'#4834d4',borderRadius:50,padding:8}} >
                    <Image
                    source={require('../assets/BottomTabIcon/home/bestincome.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:'#54a0ff',
                    }}
                    />
                    </View>

                    <Text
                     style={{color:'#54a0ff',fontSize:12}}>
                        Best Income
                        </Text>
                   </View>
                  </View>


                  <View style={styles.circleBtnBox}>
                <View style={{alignItems:'center',justifyContent:'center',top:0}}>
                  
                  <View style={{backgroundColor:'#4834d4',borderRadius:50,padding:8}} >
                    <Image
                    source={require('../assets/BottomTabIcon/home/search.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:'#54a0ff',
                    }}
                    />
                    </View>

                    <Text
                     style={{color:'#54a0ff',fontSize:12}}>
                        Search
                        </Text>
                   </View>
                  </View>
                </View>
            </View>
      
            
            {/* **************** */}

            <Text style={styles.featuresTxtTitle}>Features</Text>
            <View style={styles.fetureBox}>
                  <View style={styles.box1}>
                    <Image
                     source={require('../assets/fetures/income2.png')}
                     resizeMode="contain"
                     style={{
                         width:75,
                         height:75,
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Analyze Your Income</Text>
                  </View>
                  <View style={styles.box1}>
                  <Image
                     source={require('../assets/fetures/expense.png')}
                     resizeMode="contain"
                     style={{
                         width:90,
                         height:90,
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Calculate Your Expense</Text>
                  </View>
            </View>
            <View style={styles.fetureBox2}>
                  <View style={styles.box1}>
                  <Image
                     source={require('../assets/fetures/balance.png')}
                     resizeMode="contain"
                     style={{
                         width:100,
                         height:100,
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Find Your Balance</Text>
                  </View>
                  <View style={styles.box1}>
                  <Image
                     source={require('../assets/fetures/plans.png')}
                     resizeMode="contain"
                     style={{
                         width:80,
                         height:80,
                         
                        //  tintColor:'#54a0ff',
                     }}
                    />

                      <Text style={styles.featuresTxt}>Note Down Your Plans</Text>
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
          height:320,
          backgroundColor:'blue',
          borderBottomLeftRadius:38,
          borderBottomRightRadius:38,
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
         width:130,
         height:33,
         borderRadius:30,
         alignItems:'center',
         justifyContent:'center',
         flexDirection: "row",

      },
      lblIncome:{
          color:'#333333',
          paddingLeft:5

      },
    
      btnExpense:{
        backgroundColor:'white',
        width:130,
        height:33,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:30,
        flexDirection: "row",
      },
      btnBox:{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop:10,
        paddingLeft:0

        
      },
      circleBtnBox:{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop:15,
        paddingLeft:28
      },
      circleBtnBoxMain:{
        flexDirection: "row",
        flexWrap: "wrap",
      },
      fetureBox:{
        flexDirection: "row",
        flexWrap: "wrap",
        padding:20,
        paddingBottom:0,
        paddingTop:0,
      
      },
      box1:{
        width:150,
        height:120,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        shadowColor:'black',    
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:20,
        shadowOffset:{
          width:0,
          height:10,
        },
      },
       
      // box2:{
      //   width:10,
      //   height:120,
      //   backgroundColor:'white',
      // },
      fetureBox2:{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft:20,
        
          
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
      featuresTxt:{
        bottom:10,
        textAlign:'center',
        color:'gray',
        padding:10
        
      },
      featuresTxtTitle:{
        paddingLeft:10,
        fontWeight:'bold',
        fontSize:24,
        padding:7,
        color:'#333333'
      }

  });