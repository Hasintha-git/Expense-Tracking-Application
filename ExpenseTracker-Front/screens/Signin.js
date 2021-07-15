import React, { Component } from 'react'
import { Text, View,Image ,TouchableOpacity,StatusBar,Dimensions,StyleSheet} from 'react-native'
import { Input } from 'react-native-elements';
const windowHeight=Dimensions.get('window').height;
const windowWidth=Dimensions.get('window').width;

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:'',
            password:'',
            email:'',
            response:'ddd'
          };
      }

      login(){
        this.props.navigation.navigate('Log')
      }

      async clickme() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:this.state.userName,email:this.state.email,password:this.state.password})
        };
        const response = await fetch('http://192.168.8.154:3000/api/register', requestOptions);
        const data = await response.json();
        console.log(data.token);
        console.log(data.message);
        console.log(data.status);
        
        if(data.status==200){
            this.props.navigation.navigate('Log')
            this.state.response="User Added Successfully!"
        }else{
            this.state.response="Error"
        }
    }
         
    //   this.props.navigation.navigate('Home')

  render() {
    return (
                    
          <View style={styles.container}>
            <Text style={styles.txt}>Sign Up</Text>
            <View style={{alignItems:'center',top:30}}>
            <Image source={require('../assets/login/signup.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'gray',
                  
                    }}
                    
                    />
            </View>
        
    <StatusBar backgroundColor="blue"barStyle="light-content"/>
         

            <View style={styles.loginBack}>
                <View style={styles.loginBackBack}>
                
                <Input style={styles.input}
                    placeholder='User Name'
                    onChangeText={(value) => this.setState({userName: value})}
                    autoCapitalize='none'
                />  
                <Input style={styles.input}
                    placeholder='email'
                    onChangeText={(value) => this.setState({email: value})}
                />
                <Input style={styles.input}
                    placeholder='Password'
                    onChangeText={(value) => this.setState({password: value})}
                />
              
                <TouchableOpacity style={styles.forgetPass}>
                    <Text style={{color:'red',fontSize:13,textAlign:'center'}}>Forget Password</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.btn}  
                onPress={this.clickme.bind(this)}
                >
            
                <Text style={{color:'white'}}>Sign Up</Text>

                </TouchableOpacity>
                
                <Text style={{color:'blue',fontSize:13,top:30}}>{this.state.response}</Text>
                <Text style={{color:'gray',fontSize:13,textAlign:'center',top:40}}>----------------------------------- or -----------------------------------</Text>
                
                <TouchableOpacity style={styles.signupbtn}
                 onPress={this.login.bind(this)}
                > 
                    <Text style={styles.signup}>Sign In</Text>
                </TouchableOpacity>
               
                </View>
            </View>
        </View>

    
    )
  }
}
const styles=StyleSheet.create({
    loginBack: {
        backgroundColor:'white',
        height:600,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        width:windowWidth,
        position:'relative',
        bottom:-101,
        padding:20,
   
       
    },
    loginBackBack:{
        top:60,
        alignItems:'center',
       
        height:500
    },
    container:{
        flex:1,
        backgroundColor:'blue',

    },
    input:{
        height:50,
        marginHorizontal:10,
        marginVertical:5,
         
    },
    btn: {

        backgroundColor:'blue',
        height:37,
        width:300,
        top:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },
    signupbtn:{
        backgroundColor:'green',
        height:37,
        width:150,
        top:50,
        textAlign:'center',
        borderRadius:25,

    },
    txt:{
        color:'white',
        textAlign:'center',
        top:20,
        fontSize:24
    },
    signup:{
        color:'white',
        textAlign:'center',
        top:8

    },
    forgetPass:{
        fontSize:13,
       
    }

})