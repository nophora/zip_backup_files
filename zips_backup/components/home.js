import { StatusBar } from 'expo-status-bar';
import React, { Component, useRef} from 'react';
import {Animated,PanResponder,TouchableWithoutFeedback , StyleSheet, FlatList, Text, View,Image,ScrollView, Dimensions} from 'react-native';
import Constants from 'expo-constants'
import {LinearGradient} from 'expo-linear-gradient'

/* 
import RNSimData from react-native-sim-data
{JSON.stringify(RNSimData.getSimInfo())}
*/


import Video from './video'
import Messages from './message'

class Home extends Component{
  
  state = {
    postion: new Animated.Value(-Dimensions.get('window').height + 70),
    opacity: new Animated.Value(0),
    bar: true,
    width:new Animated.Value(Dimensions.get('window').width*2),
    up:false
  };


  check = PanResponder.create({

    onStartShouldSetPanResponder: () => {
      console.log('checking',Dimensions.get('window').width)  
      return true
    } ,
   
    onPanResponderMove: (e, gestureState) => {
      console.log('xx',gestureState.dx)  
      Animated.event([
        null,
        { dx: this.state.width }
      ], {useNativeDriver: false})(e, gestureState)
     
    },

    onPanResponderRelease: () => {
      this.state.width.extractOffset() 
    }
  })



  bell = PanResponder.create({

    onStartShouldSetPanResponder: () => {
      console.log('bell')
      if (this.state.up===false) {
       
          Animated.spring(this.state.width, {
            toValue:(-Dimensions.get('window').width)*2,
            useNativeDriver: false
          }
          ).start()

     
      }
      return true
    } ,
   
    onPanResponderMove: (e, gestureState) => {
      Animated.event([
        null,
        { dy: this.state.postion }
      ], {useNativeDriver: false})(e, gestureState)
     
    },

    onPanResponderRelease: () => {
      const postion = this.state.postion
      const json = parseInt(JSON.stringify(postion))
      const point = (Dimensions.get('window').height / 4) / 2
      const hgt = (Dimensions.get('window').height / 2)
      const plus = hgt + (hgt / 4)
     
      if (this.state.bar === true) {
        Animated.spring(this.state.postion, {
          toValue: (-1 * (json) < (Dimensions.get('window').height / 4) + point)&& this.state.bar === true ? 0:-Dimensions.get('window').height + 70,
          useNativeDriver: false
        }
        ).start(() => {
          if (!(-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true) {
             this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true ? true : false })
        })
      } else {
        

        Animated.spring(this.state.postion, {
          toValue: (-1*(json) < plus) && this.state.bar === false ?Dimensions.get('window').height - 70:0,
          useNativeDriver: false
        }
        ).start(() => {
          if ((-1 * (json) < plus) && this.state.bar === false) {
           // this.setState({up:true})
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1*(json) < plus) && this.state.bar === false ? true:false })
        })



      }
    }
  })







  search = PanResponder.create({

    onStartShouldSetPanResponder: () => {
      console.log('search')
      if (this.state.up === false) {

        Animated.spring(this.state.width, {
          toValue:-Dimensions.get('window').width,
          useNativeDriver: false
        }
        ).start()
      }
      return true
    } ,
   
    onPanResponderMove: (e, gestureState) => {
      Animated.event([
        null,
        { dy: this.state.postion }
      ], {useNativeDriver: false})(e, gestureState)
     
    },

    onPanResponderRelease: () => {
      const postion = this.state.postion
      const json = parseInt(JSON.stringify(postion))
      const point = (Dimensions.get('window').height / 4) / 2
      const hgt = (Dimensions.get('window').height / 2)
      const plus = hgt + (hgt / 4)
     
      if (this.state.bar === true) {
        Animated.spring(this.state.postion, {
          toValue: (-1 * (json) < (Dimensions.get('window').height / 4) + point)&& this.state.bar === true ? 0:-Dimensions.get('window').height + 70,
          useNativeDriver: false
        }
        ).start(() => {
          if (!(-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true) {
             this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true ? true : false })
        })
      } else {
        

        Animated.spring(this.state.postion, {
          toValue: (-1*(json) < plus) && this.state.bar === false ?Dimensions.get('window').height - 70:0,
          useNativeDriver: false
        }
        ).start(() => {
          if ((-1 * (json) < plus) && this.state.bar === false) {
          //  this.setState({up:true})
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1*(json) < plus) && this.state.bar === false ? true:false })
        })



      }
    }
  })



  camera = PanResponder.create({

    onStartShouldSetPanResponder: () => {
      console.log('camera')
      if (this.state.up === false) {
        Animated.spring(this.state.width, {
          toValue:0,
          useNativeDriver: false
        }
        ).start()
      }
      return true
    } ,
   
    onPanResponderMove: (e, gestureState) => {
      Animated.event([
        null,
        { dy: this.state.postion }
      ], {useNativeDriver: false})(e, gestureState)
  

    },

    onPanResponderRelease: () => {
      const postion = this.state.postion
      const json = parseInt(JSON.stringify(postion))
      const point = (Dimensions.get('window').height / 4) / 2
      const hgt = (Dimensions.get('window').height / 2)
      const plus = hgt + (hgt / 4)
     
      if (this.state.bar === true) {
        Animated.spring(this.state.postion, {
          toValue: (-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true ? 0 : -Dimensions.get('window').height + 70,
          useNativeDriver: false
        }
        ).start(() => {
          if (!(-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true) {
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true ? true : false })
        })

        } else {
        

          Animated.spring(this.state.postion, {
            toValue: (-1 * (json) < plus) && this.state.bar === false ? Dimensions.get('window').height - 70 : 0,
            useNativeDriver: false
          }
          ).start(() => {
            if ((-1 * (json) < plus) && this.state.bar === false) {
          //    this.setState({up:true})
              this.state.postion.extractOffset()
            }
            this.setState({ bar: (-1 * (json) < plus) && this.state.bar === false ? true : false })
          })

         
        }
      
    }
  })






  messsage = PanResponder.create({

    onStartShouldSetPanResponder: () => {
      console.log('message')
      if (this.state.up === false) {
       

        Animated.spring(this.state.width, {
          toValue:Dimensions.get('window').width,
          useNativeDriver: false
        }
        ).start()
      }
      return true
    } ,
   
    onPanResponderMove: (e, gestureState) => {
      Animated.event([
        null,
        { dy: this.state.postion }
      ], {useNativeDriver: false})(e, gestureState)
     
    },

    onPanResponderRelease: () => {
      const postion = this.state.postion
      const json = parseInt(JSON.stringify(postion))
      const point = (Dimensions.get('window').height / 4) / 2
      const hgt = (Dimensions.get('window').height / 2)
      const plus = hgt + (hgt / 4)
     
      if (this.state.bar === true) {
        Animated.spring(this.state.postion, {
          toValue: (-1 * (json) < (Dimensions.get('window').height / 4) + point)&& this.state.bar === true ? 0:-Dimensions.get('window').height + 70,
          useNativeDriver: false
        }
        ).start(() => {
          if (!(-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true) {
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true ? true : false })
        })
      } else {
        

        Animated.spring(this.state.postion, {
          toValue: (-1*(json) < plus) && this.state.bar === false ?Dimensions.get('window').height - 70:0,
          useNativeDriver: false
        }
        ).start(() => {
          if ((-1 * (json) < plus) && this.state.bar === false) {
         //   this.setState({up:true})
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1*(json) < plus) && this.state.bar === false ? true:false })
        })



      }
    }
  })

  
   
  
 	
  tiktok = PanResponder.create({

    onStartShouldSetPanResponder: () => {
      console.log('tiktok')
      if (this.state.up===false) {
        
        Animated.spring(this.state.width, {
          toValue:Dimensions.get('window').width*2,
          useNativeDriver: false
        }
        ).start()
      }
      return true
    } ,
   
    onPanResponderMove: (e, gestureState) => {
      Animated.event([
        null,
        { dy: this.state.postion }
      ], {useNativeDriver: false})(e, gestureState)
     
    },

    onPanResponderRelease: () => {
      const postion = this.state.postion
      const json = parseInt(JSON.stringify(postion))
      const point = (Dimensions.get('window').height / 4) / 2
      const hgt = (Dimensions.get('window').height / 2)
      const plus = hgt + (hgt / 4)
      
      if (this.state.bar === true) {
        Animated.spring(this.state.postion, {
          toValue: (-1 * (json) < (Dimensions.get('window').height / 4) + point)&& this.state.bar === true ? 0:-Dimensions.get('window').height + 70,
          useNativeDriver: false
        }
        ).start(() => {
          if (!(-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true) {
          
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1 * (json) < (Dimensions.get('window').height / 4) + point) && this.state.bar === true ? true : false })
        })
      } else {
        

        Animated.spring(this.state.postion, {
          toValue: (-1*(json) < plus) && this.state.bar === false ?Dimensions.get('window').height - 70:0,
          useNativeDriver: false
        }
        ).start(() => {
          if ((-1 * (json) < plus) && this.state.bar === false) {
           // this.setState({up:true})
            this.state.postion.extractOffset()
          }
          this.setState({ bar: (-1*(json) < plus) && this.state.bar === false ? true:false })
        })



      }
    }
  })

  

  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
   
  
  
          
          
        

    const edge = this.state.postion.interpolate({
      inputRange:[0,(Dimensions.get('window').height)*4],
      outputRange:[18,100]
    })
   
    const color = this.state.postion.interpolate({
      inputRange:[(-(Dimensions.get('window').height))/2,0],
      outputRange: ['rgb(255,255,255)','rgb(0,0,0)']
    })



    const opacity = this.state.postion.interpolate({
      inputRange:[(-(Dimensions.get('window').height))/2,0],
      outputRange: [0,1]
    })

    const opacity2 = this.state.postion.interpolate({
      inputRange:[(-(Dimensions.get('window').height))/2,0],
      outputRange: [1,0]
    })
    
  

    
    
  
  return(
    <View style={styles.container}>
     
      <View style={{width: '100%',height: Constants.statusBarHeight ,backgroundColor:'black'}}></View>
      <View style={{  width:'100%', height:Dimensions.get('window').height-Constants.statusBarHeight, }}>
      <ScrollView style={{ width: '100%'}} horizontal ={false}
        
       >
          <View style={styles.view} >
            <View style={styles.view2h} >
              <View style={styles.view2h1} >
                <View style={styles.around} >
                <Image style={styles.profil} source={require('../assets/alita.jpg')} />
                </View>
              </View>

              <View style={styles.lozip} >
                <Image style={styles.prozip} source={require('../assets/inslg.jpg')} />
              </View>

              <View style={styles.view2h2} >
                <View style={styles.vieq} >
                <Image style={styles.sends} source={require('../assets/sedd.png')} />
                  <View style={styles.vired} >
                    <Text style={styles.texxt}>27</Text>
               </View>
                </View>
                <View style={styles.view2h2d} >
                  <View style={styles.got} ></View>
                  <View style={styles.got} ></View>
                  <View style={styles.got} ></View>
                </View>
              </View>
          </View>
        </View>

          
          <View style={styles.view2} >
          <View style={styles.view2txt} >
          <Text style={styles.texxttrd}>Tranding</Text>
          </View>
            <View style={styles.view2stst}>
              <ScrollView style={{ width: '100%'}} horizontal={true}>

              <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               
                  <View style={styles.barboxname} >
                <View style={styles.barbox} >
                <Image style={styles.grid} source={require('../assets/gradi.jpg')} />
                <Image style={styles.gridst} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp} >
                    <Text style={styles.vietew2}>alita</Text>
                  </View></View>
                
                
               



              </ScrollView>
            </View>

          </View>
          
          <View style={styles.view3} >
          <View style={styles.vcopy} >
          <Image style={styles.view3dp} source={require('../assets/gradi.jpg')} />
              <View style={styles.view3d} >
                <View style={styles.view3blu} >
                  <View style={styles.view3blu1} >
                  <Image style={styles.imagepng} source={require('../assets/image.png')} />
                  <Image style={styles.imagepng1} source={require('../assets/add.png')} />
                  </View>
                  <View style={styles.view3blu2} >
                    <Text style={styles.vietew}>Trand your views</Text></View>
              </View>
              </View>
              </View>
        </View>

          
          <View style={styles.view4} >

            <View style={styles.boxviws}>
              
              <View style={styles.headvw}>
              <Image style={styles.postpic} source={require('../assets/pts11.jpg')} />
              <LinearGradient colors={["black","rgba(255, 255, 255, 0)","rgba(0, 0, 0, 0.479)", "black"]} style={styles.boxlinier}>
                  <View style={styles.section1}>
                    <View style={styles.section1t1}>

                      <View style={styles.section1troud}>
                      <Image style={styles.sectionpic} source={require('../assets/pts11.jpg')} />
                    </View>
                    <View style={styles.ongreen}></View>
                    </View>
                    <View style={styles.section1t2}>
                      <View style={styles.secblack1}>
                        <Text style={styles.alitatext}>Alita Starnburg</Text>
                      </View>
                      <View style={styles.secblack2}>
                      <Image style={styles.loctin} source={require('../assets/location.png')} />
                      <Text style={styles.alitatext2}>Location spot</Text>
                      <Image style={styles.loctin} source={require('../assets/recent.png')} />
                      <Text style={styles.alitatext2}>2h</Text>
                      
                      </View>
                    </View>
                    <View style={styles.section1t3}>
                    <Image style={styles.unbook} source={require('../assets/nbook.png')} />
                    </View>
                  </View>  
                  <View style={styles.section2}></View> 
                  <View style={styles.section3}>
                    <View style={styles.section3b1}>
                      <Text style={styles.alitatextv}>Bigbangram will help you build your ladder
                      to fame using best tips on “how to become
                      an zips
                      <Image style={styles.loctin} source={require('../assets/love.png')} />
                       mode</Text>
                    </View>

                    <View style={styles.section3b2}>
                    <Image style={styles.lina} source={require('../assets/lina6.jpg')} />
                    <Image style={styles.lina2} source={require('../assets/lina2.jpg')} />
                      <Text style={styles.others}>Lina and
                      <Text style={styles.tok}> 2k</Text> others</Text>
                    </View>
                      
                  </View>
              </LinearGradient>
              </View>

              <View style={styles.boxcomt}>
                <View style={styles.comt}>
                  <View style={styles.comt1}>
                  <Image style={styles.love} source={require('../assets/love.png')} />
              <Text  style={styles.rate} >2k</Text>
                  </View>
                  <View style={styles.comt2}>
                  <Image style={styles.love} source={require('../assets/mesag.png')} />
              <Text  style={styles.rate} >2</Text>
                  </View>
                  <View style={styles.comt3}>
                  <Image style={styles.love} source={require('../assets/blkshr.png')} />
              <Text  style={styles.rate} >2.5k</Text>
                    </View>
              </View>
              </View>
            </View>







            <View style={styles.boxviws}>
              
              <View style={styles.headvw}>
              <Image style={styles.postpic} source={require('../assets/lina2.jpg')} />
              <LinearGradient colors={["black","rgba(255, 255, 255, 0)","rgba(0, 0, 0, 0.479)", "black"]} style={styles.boxlinier}>
                  <View style={styles.section1}>
                    <View style={styles.section1t1}>

                      <View style={styles.section1troud}>
                      <Image style={styles.sectionpic} source={require('../assets/lina2.jpg')} />
                    </View>
                    <View style={styles.ongreen}></View>
                    </View>
                    <View style={styles.section1t2}>
                      <View style={styles.secblack1}>
                        <Text style={styles.alitatext}>lina mora</Text>
                      </View>
                      <View style={styles.secblack2}>
                      <Image style={styles.loctin} source={require('../assets/location.png')} />
                      <Text style={styles.alitatext2}>Location spot</Text>
                      <Image style={styles.loctin} source={require('../assets/recent.png')} />
                      <Text style={styles.alitatext2}>2h</Text>
                      
                      </View>
                    </View>
                    <View style={styles.section1t3}>
                    <Image style={styles.unbook} source={require('../assets/nbook.png')} />
                    </View>
                  </View>  
                  <View style={styles.section2}></View> 
                  <View style={styles.section3}>
                    <View style={styles.section3b1}>
                      <Text style={styles.alitatextv}>Bigbangram will help you build your ladder
                      to fame using best tips on “how to become
                      an zips
                      <Image style={styles.loctin} source={require('../assets/love.png')} />
                       mode</Text>
                    </View>

                    <View style={styles.section3b2}>
                    <Image style={styles.lina} source={require('../assets/lina6.jpg')} />
                    <Image style={styles.lina2} source={require('../assets/lina2.jpg')} />
                      <Text style={styles.others}>Lina and
                      <Text style={styles.tok}> 2k</Text> others</Text>
                    </View>
                      
                  </View>
              </LinearGradient>
              </View>

              <View style={styles.boxcomt}>
                <View style={styles.comt}>
                  <View style={styles.comt1}>
                  <Image style={styles.love} source={require('../assets/love.png')} />
              <Text  style={styles.rate} >2k</Text>
                  </View>
                  <View style={styles.comt2}>
                  <Image style={styles.love} source={require('../assets/mesag.png')} />
              <Text  style={styles.rate} >2</Text>
                  </View>
                  <View style={styles.comt3}>
                  <Image style={styles.love} source={require('../assets/blkshr.png')} />
              <Text  style={styles.rate} >2.5k</Text>
                    </View>
              </View>
              </View>
            </View>




            

            <View style={styles.boxviws}>
              
              <View style={styles.headvw}>
              <Image style={styles.postpic} source={require('../assets/lina4.jpg')} />
              <LinearGradient colors={["black","rgba(255, 255, 255, 0)","rgba(0, 0, 0, 0.479)", "black"]} style={styles.boxlinier}>
                  <View style={styles.section1}>
                    <View style={styles.section1t1}>

                      <View style={styles.section1troud}>
                      <Image style={styles.sectionpic} source={require('../assets/lina6.jpg')} />
                    </View>
                    <View style={styles.ongreen}></View>
                    </View>
                    <View style={styles.section1t2}>
                      <View style={styles.secblack1}>
                        <Text style={styles.alitatext}>Chemp lift</Text>
                      </View>
                      <View style={styles.secblack2}>
                      <Image style={styles.loctin} source={require('../assets/location.png')} />
                      <Text style={styles.alitatext2}>Location spot</Text>
                      <Image style={styles.loctin} source={require('../assets/recent.png')} />
                      <Text style={styles.alitatext2}>2h</Text>
                      
                      </View>
                    </View>
                    <View style={styles.section1t3}>
                    <Image style={styles.unbook} source={require('../assets/nbook.png')} />
                    </View>
                  </View>  
                  <View style={styles.section2}></View> 
                  <View style={styles.section3}>
                    <View style={styles.section3b1}>
                      <Text style={styles.alitatextv}>Bigbangram will help you build your ladder
                      to fame using best tips on “how to become
                      an zips
                      <Image style={styles.loctin} source={require('../assets/love.png')} />
                       mode</Text>
                    </View>

                    <View style={styles.section3b2}>
                    <Image style={styles.lina} source={require('../assets/lina6.jpg')} />
                    <Image style={styles.lina2} source={require('../assets/lina2.jpg')} />
                      <Text style={styles.others}>Lina and
                      <Text style={styles.tok}> 2k</Text> others</Text>
                    </View>
                      
                  </View>
              </LinearGradient>
              </View>

              <View style={styles.boxcomt}>
                <View style={styles.comt}>
                  <View style={styles.comt1}>
                  <Image style={styles.love} source={require('../assets/love.png')} />
              <Text  style={styles.rate} >2k</Text>
                  </View>
                  <View style={styles.comt2}>
                  <Image style={styles.love} source={require('../assets/mesag.png')} />
              <Text  style={styles.rate} >2</Text>
                  </View>
                  <View style={styles.comt3}>
                  <Image style={styles.love} source={require('../assets/blkshr.png')} />
              <Text  style={styles.rate} >2.5k</Text>
                    </View>
              </View>
              </View>
            </View>





            <View style={styles.boxviws}>
              
              <View style={styles.headvw}>
              <Image style={styles.postpic} source={require('../assets/male.jpg')} />
              <LinearGradient colors={["black","rgba(255, 255, 255, 0)","rgba(0, 0, 0, 0.479)", "black"]} style={styles.boxlinier}>
                  <View style={styles.section1}>
                    <View style={styles.section1t1}>

                      <View style={styles.section1troud}>
                      <Image style={styles.sectionpic} source={require('../assets/man2.jpg')} />
                    </View>
                    <View style={styles.ongreen}></View>
                    </View>
                    <View style={styles.section1t2}>
                      <View style={styles.secblack1}>
                        <Text style={styles.alitatext}>Zekk mathin</Text>
                      </View>
                      <View style={styles.secblack2}>
                      <Image style={styles.loctin} source={require('../assets/location.png')} />
                      <Text style={styles.alitatext2}>Location spot</Text>
                      <Image style={styles.loctin} source={require('../assets/recent.png')} />
                      <Text style={styles.alitatext2}>2h</Text>
                      
                      </View>
                    </View>
                    <View style={styles.section1t3}>
                    <Image style={styles.unbook} source={require('../assets/nbook.png')} />
                    </View>
                  </View>  
                  <View style={styles.section2}></View> 
                  <View style={styles.section3}>
                    <View style={styles.section3b1}>
                      <Text style={styles.alitatextv}>Bigbangram will help you build your ladder
                      to fame using best tips on “how to become
                      an zips
                      <Image style={styles.loctin} source={require('../assets/love.png')} />
                       mode</Text>
                    </View>

                    <View style={styles.section3b2}>
                    <Image style={styles.lina} source={require('../assets/lina6.jpg')} />
                    <Image style={styles.lina2} source={require('../assets/lina2.jpg')} />
                      <Text style={styles.others}>Lina and
                      <Text style={styles.tok}> 2k</Text> others</Text>
                    </View>
                      
                  </View>
              </LinearGradient>
              </View>

              <View style={styles.boxcomt}>
                <View style={styles.comt}>
                  <View style={styles.comt1}>
                  <Image style={styles.love} source={require('../assets/love.png')} />
              <Text  style={styles.rate} >2k</Text>
                  </View>
                  <View style={styles.comt2}>
                  <Image style={styles.love} source={require('../assets/mesag.png')} />
              <Text  style={styles.rate} >2</Text>
                  </View>
                  <View style={styles.comt3}>
                  <Image style={styles.love} source={require('../assets/blkshr.png')} />
              <Text  style={styles.rate} >2.5k</Text>
                    </View>
              </View>
              </View>
            </View>





            <View style={styles.boxviws}>
              
              <View style={styles.headvw}>
              <Image style={styles.postpic} source={require('../assets/gold2.jpg')} />
              <LinearGradient colors={["black","rgba(255, 255, 255, 0)","rgba(0, 0, 0, 0.479)", "black"]} style={styles.boxlinier}>
                  <View style={styles.section1}>
                    <View style={styles.section1t1}>

                      <View style={styles.section1troud}>
                      <Image style={styles.sectionpic} source={require('../assets/gold1.jpeg')} />
                    </View>
                    <View style={styles.ongreen}></View>
                    </View>
                    <View style={styles.section1t2}>
                      <View style={styles.secblack1}>
                        <Text style={styles.alitatext}>Zethu namhla</Text>
                      </View>
                      <View style={styles.secblack2}>
                      <Image style={styles.loctin} source={require('../assets/location.png')} />
                      <Text style={styles.alitatext2}>Location spot</Text>
                      <Image style={styles.loctin} source={require('../assets/recent.png')} />
                      <Text style={styles.alitatext2}>2h</Text>
                      
                      </View>
                    </View>
                    <View style={styles.section1t3}>
                    <Image style={styles.unbook} source={require('../assets/nbook.png')} />
                    </View>
                  </View>  
                  <View style={styles.section2}></View> 
                  <View style={styles.section3}>
                    <View style={styles.section3b1}>
                      <Text style={styles.alitatextv}>Bigbangram will help you build your ladder
                      to fame using best tips on “how to become
                      an zips
                      <Image style={styles.loctin} source={require('../assets/love.png')} />
                       mode</Text>
                    </View>

                    <View style={styles.section3b2}>
                    <Image style={styles.lina} source={require('../assets/lina6.jpg')} />
                    <Image style={styles.lina2} source={require('../assets/lina2.jpg')} />
                      <Text style={styles.others}>Lina and
                      <Text style={styles.tok}> 2k</Text> others</Text>
                    </View>
                      
                  </View>
              </LinearGradient>
              </View>

              <View style={styles.boxcomt}>
                <View style={styles.comt}>
                  <View style={styles.comt1}>
                  <Image style={styles.love} source={require('../assets/love.png')} />
              <Text  style={styles.rate} >2k</Text>
                  </View>
                  <View style={styles.comt2}>
                  <Image style={styles.love} source={require('../assets/mesag.png')} />
              <Text  style={styles.rate} >2</Text>
                  </View>
                  <View style={styles.comt3}>
                  <Image style={styles.love} source={require('../assets/blkshr.png')} />
              <Text  style={styles.rate} >2.5k</Text>
                    </View>
              </View>
              </View>
            </View>







        </View>
      </ScrollView>
        <Animated.View  
          style={{
            marginTop:Dimensions.get('window').height-70,
           position:'absolute',
            width: '100%',
            height: Dimensions.get('window').height+40,
            borderTopLeftRadius:edge,
            borderTopRightRadius: edge,
            transform: [
              {translateY: this.state.postion}
            ],
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>



            <Animated.View style={{
      width: Dimensions.get('window').width,
      height:Dimensions.get('window').height,
     
      alignItems: 'center',
      justifyContent: 'flex-start',
                position: 'absolute',
                borderTopLeftRadius:edge,
                borderTopRightRadius:edge,
             backgroundColor:'blue' ,
      overflow: 'hidden'
                
          }} >
            <Animated.View
              
              style={{
              width: (Dimensions.get('window').width)*5,
              height: Dimensions.get('window').height,
              backgroundColor: 'pink',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              transform: [
                {translateX:this.state.width}
              ],
              
            }}>

<Messages/>
              <View style={{
                width:Dimensions.get('window').width,
                height: 100,
                backgroundColor:'red' ,
              }} ></View>

<View style={{
                width:Dimensions.get('window').width,
                height: 150,
                backgroundColor:'yellow' ,
              }} ></View>


<View style={{
                width:Dimensions.get('window').width,
                height: 200,
                backgroundColor:'blue' ,
              }} ></View>

<View style={{
                width:Dimensions.get('window').width,
                height: 250,
                backgroundColor:'black' ,
              }} ></View>

              
</Animated.View>


</Animated.View>

          
          
            <Animated.View  style={{
           width: '100%',
           height: 40,
            flexDirection: 'row',
            opacity:0,
            position: 'relative',
          
           }}>

            <View {...this.tiktok.panHandlers} style={styles.magic1}>
              <Image style={styles.merg1} source={require('../assets/time.png')} />
              <View style={styles.notfy}>
                <Text style={styles.otred} >7</Text>
              </View>
            </View>
            <View {...this.messsage.panHandlers} style={styles.magic2}>
              <Image style={styles.merg} source={require('../assets/mesagw.png')} />
              <View style={styles.notfy}>
                <Text style={styles.otred} >2</Text>
              </View>

            </View>
           
            <View  {...this.camera.panHandlers}   style={styles.magic3}>
              <Animated.View style={{
    width: 60,
    height: 60,
     position:'relative',
    marginTop:'-8%',
    borderRadius:80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:color
              }}>
                <View style={styles.magicb4c}>
                  <Text style={styles.oplus} >+</Text>
                </View>
              </Animated.View>
            </View>
           
              
            <View  {...this.search.panHandlers} style={styles.magic4}>
              <Image style={styles.merg3} source={require('../assets/search.png')} />
            </View>
            <View {...this.bell.panHandlers} style={styles.magic5}>
              <Image style={styles.merg4} source={require('../assets/bell.png')} />
              <View style={styles.notfy}>
                <Text style={styles.otred} >5</Text>
              </View>
            </View>
          </Animated.View>



      




      </Animated.View>
      </View>
      <StatusBar style='light'/>
    </View>
  );
}
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
   
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  view: {
    width:'100%',
    height:55,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius:18,
    backgroundColor: 'rgb(0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',


    shadowColor: "black",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.100,
shadowRadius:1,

elevation: 7,
  },


  view2h: {
    width: '95%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row'
  },

  view2h1: {
    width: '18%',
    height: '99%',
   alignItems: 'flex-start',
    justifyContent: 'center',
  },
    lozip: {
    width: '28%',
    height: '99%',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  prozip: {
    width: 90,
    height: 30,
    },

  around: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'orange',
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profil: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  view2h2: {
    width: '50%',
    height: '99%',
   flexDirection:'row',
     alignItems: 'center',
    justifyContent: 'flex-end',
  },

  vieq: {
    width: 40,
    height: 40,
    marginRight:'5%',
   alignItems: 'center',
    justifyContent: 'center',
  },
  sends: {
    width: 30,
    height: 30,
    position:'absolute'
  },


  vired: {
    position:'relative',
    width: '30%',
    marginTop: '48%',
    marginLeft:'48%',
    borderRadius:15,
    maxWidth:'70%',
    height: 11,
    borderWidth: 1,
    borderColor:'white',
    backgroundColor: 'red',
   flexDirection:'row',
     alignItems: 'center',
    justifyContent: 'center',
  },
  texxt: {
    fontSize: 7,
    color:'white'
  },

  view2h2d: {
    width: 7,
    height:'75%',
    justifyContent:'space-around',
  },

  got: {
    width: 4,
    height: 4,
    borderRadius:4,
    backgroundColor: 'white',
  },

  view2: {
    width: '100%',
    height: 90,
    marginTop: 20,
    alignItems:'center',
    justifyContent: 'center',
   
  },
  view2txt: {
    width: '98%',
    height: 25,
    justifyContent: 'center',
   },
  texxttrd:{
    fontWeight:'bold'
  },


  view2stst: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
   
  },

  barbox: {
    width: 50,
    height: 50,
   marginTop:'0%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },


  barboxname: {
    width: 50,
    height:80,
    marginLeft:8,
   
  },

  twarp: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
   },


  vietew2:{
    fontSize: 10,
   color:'black' 
  },


  grid: {
    width: 50,
    height: 50,
    borderRadius:50,
   position:'absolute'
  },
  gridst: {
    borderRadius: 43,
    borderWidth: 2,
    borderColor:'white',
    position:'relative',
    width: 43,
    height: 43,
   
  },

  view3: {
     width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  vcopy: {
    width: '99%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
   alignItems:'center',

   shadowColor: 'black',
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity: 0.100,
   shadowRadius: 2,  
   elevation: 5


 },

  view3dp: {
    position:'absolute',
    borderRadius: 50,
    width: '100%',
    height: 50,

   
  },
  view3d: {
    position:'relative',
    borderRadius: 46,
    width: '99%',
    height: 46,
    justifyContent: 'center',
   alignItems:'center',
   backgroundColor: 'white',
 
  },
  view3blu: {
    width: '90%',
    height: '70%',
   flexDirection:'row',
  
  },
  
  view3blu1: {
    width: '25%',
    height: '100%',
   flexDirection:'row',
    justifyContent: 'space-around',
   alignItems:'center',

 
 },

 view3blu2: {
   width: '50%',
   marginLeft:'5%',
  height: '100%',
 flexDirection:'row',
   justifyContent: 'flex-start',
   alignItems:'center',

  },
  vietew: {
    fontSize: 12,
    fontWeight:'bold',
    color:'rgb(104, 104, 104)'
  },

 
  imagepng: {
    width: 40,
    height: 40,
  },

  imagepng1: {
    width: 22,
    height: 22,
  },

  view4: {
    marginTop:'3%',
    width: '100%',
    
    height:'100%',
   alignItems:'center',
   
  },

  boxviws: {
    width: '100%',
    height: 600,
    maxHeight:'100%',
    alignItems:'center',
  
  },
  
  headvw: {
    width: '96%',
    height: '90%',
    alignItems:'center',
    backgroundColor: 'red',
    borderRadius: 16,
    shadowColor: "black",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.100,
shadowRadius:1,

elevation: 7,
  },
  boxcomt: {
    position: 'relative',
    marginTop:-20,
    width: '77%',
    borderRadius:42,
    height: 42,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.754)',
    shadowColor: "black",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.100,
shadowRadius:1,

elevation: 7,
  },

  comt: {
    width: '95%',
    height: '90%',
    justifyContent:'space-around',
    alignItems: 'center',
    flexDirection:'row',
   
  },
  
  comt1: {
    width: '30%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
   
  },
  comt2: {
    width: '30%',
    height: '90%',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'row',
  
  },
  comt3: {
    width: '30%',
    height: '90%',
    justifyContent:'flex-start',
    alignItems: 'center',
    flexDirection:'row',
  
},

  love: {
    width: 35,
    height: 35,
  },

  rate: {
    fontSize: 13,
    color:'rgb(92, 92, 92)'
  },

  postpic: {
    position:'absolute',
    width: '100%',
    height: '100%',
    borderRadius:16,
  },
  boxlinier: {
    position:'relative',
    width: '100%',
    height: '100%',
    borderRadius: 16,
   },


  section1:{
    width: '100%',
    height: 60,
    flexDirection:'row',
  },
  section1t1:{
    width: '25%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
   
    },

  section1troud:{
    width: 55,
    height: 55,
    borderRadius: 55,
    borderWidth: 2,
    borderColor:'orange',
    justifyContent: 'center',
    alignItems: 'center',
   position:'absolute',
  },
  
  ongreen: {
    position: 'relative',
    marginTop: '60%',
    marginLeft:'40%',
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor:'rgb(0, 255, 21)',
  },
  secblack1: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems:'flex-start',
  },
  alitatext: {
    fontSize: 13,
    fontWeight:'bold',
    color:'white',
  },
  alitatext2: {
    marginTop:'0.8%',
    fontSize: 11,
     color:'rgba(177, 175, 175, 0.831) ',
  },
  alitatextv: {
    marginLeft:'2%',
    fontSize: 11,
     color:'white'
  },
  secblack2: {
    width: '100%',
    height: '50%',
    flexDirection:'row',
  },

  sectionpic:{
    width: 45,
    height: 45,
    borderRadius:45,
  },



  section1t2:{
    width: '60%',
    height: '100%',
  },
  section1t3:{
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },

  unbook: {
    width: 35,
    height: 35,
  },

  loctin: {
    width: 17,
    height: 17,
  },

  section2:{
    width: '100%',
    height: '72%',
   },
  section3:{
    width: '100%',
    height: 80,
  },

  section3b1:{
    width: '100%',
    height: '50%',
   },

  section3b2:{
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
 flexDirection:'row',
  },

  lina:{
    width: 19,
    height: 19,
    marginLeft:'6%',
    borderRadius: 19,
    borderColor:'orange',
    borderWidth:1
  },
  lina2: {
    position: 'absolute',
    marginLeft:'2%',
    width: 15,
    height: 19,
    borderRadius: 19,
    borderColor:'orange',
    borderWidth:1
  },
  others: {
    marginLeft:'3%',
    color: 'white',
    fontSize:12,
  },
  tok: {
    marginLeft:'1%',
    color: 'red',
    fontSize:12,
  },

 
  magicbar1: {
    width: '100%',
    height: 40,
    flexDirection:'row',
   },

   magicbar1x: {
    width: '100%',
    height: 40,
     flexDirection: 'row',
    backgroundColor:'pink'
   },


   magic1: {
    width: '17%',
    marginLeft:'0%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },
   magic2: {
    marginLeft:'2%',
    width: '17%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
   magic3: {
    marginLeft:'2%',
    width: '27%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   },

   magicb4: {
    width: 60,
    height: 60,
     position:'relative',
    marginTop:'-8%',
    borderRadius:80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
   },

   magicb4c: {
    width: 50,
    height: 50,
    position:'relative',
    marginTop:'-6%',
    borderWidth:3,
    borderRadius:50,
    borderColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
   },
oplus:{
  marginTop:'-10%',
  fontSize:30,
  fontWeight:'bold',
color:'rgba(177, 175, 175, 0.631)'
},

   magic4: {
    marginLeft:'2%',
    width: '17%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   },
   magic5: {
    marginLeft:'2%',
    width: '17%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
   },



   merg:{
    width: 40,
    height: 40,
    position:'absolute',
  },

  merg1:{
    width: 33,
    height: 33,
    marginLeft:'5%',
    position:'absolute',
  },
  merg3:{
    width: 30,
    height: 30,
    position:'absolute',
  },

  merg4:{
    width: 28,
    height: 28,
    position:'absolute',
  },
  


  notfy:{
    width: 15,
    height: 15,
    marginTop:'30%',
    marginLeft:'38%',
    borderRadius:15,
    position:'relative',
    backgroundColor:'red',
    borderWidth:1,
    borderColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

otred:{
color:'white',
fontSize:11
},

});
