import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Animated, StyleSheet, BackHandler, Text, View,Image,TouchableWithoutFeedback, Dimensions} from 'react-native';

class Form extends React.Component  {
  
    state = {
        form: true,
        login:false,
        signup: false,
      
        white:new Animated.Value(Dimensions.get('window').height-330),
        dot1:new Animated.Value(40),
        dot2:new Animated.Value(8),
        dot3: new Animated.Value(8),
        text:new Animated.Value(1),
}
//officialactivate.comactivate.com





    login = () => {

        if (this.state.form === true && this.state.login === false &&
            this.state.signup == false) {
           
                Animated.timing(this.state.dot1, {
                    toValue: 8,
                    duration: 1000,
                  
                            useNativeDriver: false,
            }).start()
            

            Animated.timing(this.state.dot2, {
                toValue:40,
                duration: 1000,
                  
                        useNativeDriver: false,
            }).start()

            Animated.timing(this.state.dot3, {
                toValue: 8,
                duration: 1000,
                   
                        useNativeDriver: false,
        }).start()


    }

        setTimeout(() => {
            this.setState({
                form: false,
                signup:false,
                login:true

            })      
        }, 4000);

    }

    signup = () => {

        if (this.state.form === true && this.state.login === false &&
            this.state.signup == false) {
                Animated.timing(this.state.text, {
                    toValue: 0,
                    duration: 400,
                       
                            useNativeDriver: false,
            }).start()
                Animated.timing(this.state.white, {
                    toValue: Dimensions.get('window').height - 80,
                    duration: 850,
                        
                            useNativeDriver: false,
            }).start()


            Animated.timing(this.state.dot1, {
                toValue: 8,
                duration: 1000,
              
                        useNativeDriver: false,
        }).start()
        

        Animated.timing(this.state.dot2, {
            toValue:8,
            duration: 1000,
              
                    useNativeDriver: false,
        }).start()

        Animated.timing(this.state.dot3, {
            toValue: 40,
            duration: 1000,
               
                    useNativeDriver: false,
    }).start()





            }


    

        
        setTimeout(() => {
            this.setState({
                form: false,
                login:false,
                signup:true

            })      
        }, 800);
    }

    
    back = () => {

        BackHandler.addEventListener('hardwareBackPress', ()=> {
            
            if (this.state.form === false &&( this.state.login === true ||
                this.state.signup == true)) {
                Animated.timing(this.state.text, {
                    toValue: 1,
                    duration: 800,
                           
                    useNativeDriver: false,
                }).start()
                Animated.timing(this.state.white, {
                    toValue: Dimensions.get('window').height - 330,
                    duration: 850,
                            
                    useNativeDriver: false,
                }).start()
    
    
                Animated.timing(this.state.dot1, {
                    toValue: 40,
                    duration: 1000,
                  
                    useNativeDriver: false,
                }).start()
            
    
                Animated.timing(this.state.dot2, {
                    toValue: 8,
                    duration: 1000,
                  
                    useNativeDriver: false,
                }).start()
    
                Animated.timing(this.state.dot3, {
                    toValue: 8,
                    duration: 1000,
                   
                    useNativeDriver: false,
                }).start()
            }
    
    
    
    
    
    
    
            this.setState({
                login: false,
                signup: false,
                form: true,
            })





            
          
             
              return true;
            
        });
        
      
    }

    UNSAFE_componentWillMount() {
        this.back()
    }

    
    render() {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
 
    
        return (
            <View style={styles.container}>
                <Image style={styles.imgage} source={require('../assets/login.jpg')} />
                <View style={styles.log}>
                    <View style={{
    
    width: '100%',
    height:'55%',
    justifyContent: 'center',
    alignItems:'center',
   
  }}>
                        <Animated.View style={{width: '90%',height:'55%',opacity:this.state.text}}>
                            <Text style={{ color:'rgb(0, 0, 0)',fontWeight: "bold", fontSize: 25 }}>We bring you</Text>
                            <Text style={{ color:'rgb(0, 0, 0)', fontWeight: "bold", fontSize: 25 }}>closer to the</Text>
                            <Text style={{color:'rgb(0, 0, 0)', fontWeight: "bold", fontSize: 25 }}>people and things</Text>
                            <Text style={{color:'rgb(0, 0, 0)', fontWeight: "bold", fontSize: 25 }}>you <Text style={{ fontWeight: "bold",color:'rgb(255, 0, 13)'}}>love</Text></Text>
                        </Animated.View>
                        <Animated.View style={{width: '90%',height: '35%',opacity:this.state.text}}>
                            <Text style={{ fontWeight: "bold", color: 'rgb(195, 195, 195)' }}>ALL ARE WELLCOME</Text>
                        </Animated.View>
                        <View style={styles.lr3}>
                            <View style={{ width: 200, flexDirection: 'row', height: '30%' }}>
                                <Animated.View style={{ borderRadius: 20,width: this.state.dot1 , height: 8, backgroundColor: 'rgb(0, 0, 0)' }}></Animated.View>
                                <Animated.View style={{ borderRadius: 20, width:this.state.dot2, marginLeft: '3%', height: 8, backgroundColor: 'rgb(0, 0, 0)' }}></Animated.View>
                                <Animated.View style={{borderRadius: 20, width:this.state.dot3, height: 8, marginLeft: '3%', backgroundColor: 'rgb(0, 0, 0)' }}></Animated.View>
                            </View>
                        </View>
          
                    </View>
                    <Animated.View style={{
   
    backgroundColor: '#ffff',
    width: '100%',
    height:this.state.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems:'center'}}>
                        <View style={styles.loginbox}>
                            <TouchableWithoutFeedback onPress={this.login}>
                                <View style={styles.loginbox1}>
                                <Image style={{ width: 32, height: 29, marginLeft: '-2%' }} source={require('../assets/mss.png')} />
                                <Text style={{ marginLeft: '2%', color: 'rgb(0,0,0)', fontSize: 14 }} >Sign in with your facebook</Text>
                            </View>
                                 </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={this.login}>
                                <View style={styles.loginbox2}>
                                <Text style={{ color: '#ffff', fontSize: 14 }} >Sign in with your email</Text>
                                </View>
                                   </TouchableWithoutFeedback>
                        </View>
                     
                        <View style={styles.logintex}>
                            {this.state.form === true &&
                            <TouchableWithoutFeedback onPress={this.signup}>
                                <View><Text onPress={this.signup} style={{ color: 'rgb(0,0,0)', fontSize: 14 }} >Not a member? signup now</Text>
                                    </View>
                                    </TouchableWithoutFeedback>}
                                
                            {this.state.login === true || this.state.signup === true && <View style={styles.logup}>
                                <Text style={{ color: '#ffff', fontSize: 14 }} >{this.state.login?'login':'signup'}</Text>
                            </View>}
                            {this.state.form === true || this.state.login === true && <Text style={{ color: 'rgb(64, 93, 255)', fontSize: 14 }} >forget password</Text>}
                            </View>
                    </Animated.View>
                </View>
     
                <StatusBar style="auto" />
            </View>
        );
    }
}


export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 145, 0)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgage:{
    width:Dimensions.get('window').width,
    height: '70%',
    position:'absolute'
   
  },
  log: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: 'rgba(255, 55, 21,0.400)',
    position: 'relative',
    justifyContent:'flex-end'
  },
 
  loginbox: {
    backgroundColor: '#ffff',
    width: '80%',
    marginTop:12,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  loginbox1: {
    backgroundColor: '#ffff',
    width: 250,
    height: 50,
    borderWidth:1,
    borderColor: 'rgb(0,0,0)',
    borderStyle: 'solid',
    borderRadius:14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  loginbox2: {
    backgroundColor: 'rgb(0,0,0)',
    width: 250,
    height:50,
    borderColor: 'rgb(0,0,0)',
    borderStyle: 'solid',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems:'center'
   
    },
    logup: {
        backgroundColor: 'orange',
        width: 200,
        height:40,
        borderColor: 'rgb(0,0,0)',
        borderStyle: 'solid',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems:'center'
       
    },
    loginlong: {
        backgroundColor: 'slategray',
        width: 120,
        height:10,
        borderColor: 'rgb(0,0,0)',
        borderStyle: 'solid',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems:'center'
       
      },
  logintex: {
    backgroundColor: '#ffff',
    width: '80%',
    marginTop:'3%',
    height: '27%',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  
  
  lr3: {
    width: '90%',
    height: '10%',
  }
});
