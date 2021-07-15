import React, {Component} from 'react';
import {StyleSheet, View, Text,StatusBar,ScrollView,Image} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

class Category extends Component {
  render() {
    return (
      <View style={styles.MainView}>
         <StatusBar backgroundColor="blue"barStyle="light-content"/>
        <View style={styles.box1}>
        <View style={styles.circleBtnBox}>
        <Image
                    source={require('../assets/BottomTabIcon/category.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'gray',
                    }}
                    />
        <Text style={styles.titltTxt}>Category</Text>
</View>
        </View>

        <ScrollView style={styles.scrollView}>
        <View style={styles.circleBtnBox}>
        
        <View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
<View style={styles.cardbox}>
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
                  </View>
{/* ***************************************** */}
                  </View>
                  
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleBtnBox:{
    flexDirection: "row",
    flexWrap: "wrap",


  },
  box1:{
    
    height:70,
    backgroundColor:'blue',
    // borderBottomLeftRadius:10,
    // borderBottomRightRadius:10,
    alignItems:'center',
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
  MainView: {
    flex: 1,
    backgroundColor:'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  titltTxt:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    paddingLeft:10
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingTop:10,
    maxHeight:580
  },
  text: {
    fontSize: 42,
  },
  featuresTxt:{
    color:'#333333',
    paddingTop:15
  }
});

export default Category;
