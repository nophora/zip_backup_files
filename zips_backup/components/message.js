import { StatusBar } from 'expo-status-bar';
import React,{ useRef} from 'react';
import {SafeAreaView, FlatList,Animated,ScrollView,PanResponder,TouchableWithoutFeedback ,StyleSheet, Text, View,Image, Dimensions} from 'react-native';

class Message  extends React.Component{

  state = {
    data:[
      {
      id: 1,
      icon:'../assets/alita.jpg',
      name:'alita'
      },
        {
        id: 2,
        icon:'../assets/alita.jpg',
        name:'sam'
        },
        {
          id: 3,
          icon:'../assets/alita.jpg',
          name:'john'
          },
          {
            id: 4,
            icon:'../assets/alita.jpg',
            name:'tylar'
            },
            {
              id: 5,
              icon:'../assets/alita.jpg',
              name:'jobs'
              },
              {
                id: 6,
                icon:'../assets/alita.jpg',
                name:'woker'
                },
                {
                  id: 7,
                  icon:'../assets/alita.jpg',
                  name:'poli'
                  },
                  {
                    id: 8,
                    icon:'../assets/alita.jpg',
                    name:'stive'
      },
      {
        id: 9,
        icon:'../assets/alita.jpg',
        name:'alita'
        },
        
        {
          id: 10,
          icon:'../assets/alita.jpg',
          name:'alita'
          },
          {
            id: 11,
            icon:'../assets/alita.jpg',
            name:'alita'
      },
      {
        id: 12,
        icon:'../assets/alita.jpg',
        name:'alita'
        },
        {
          id: 13,
          icon:'../assets/alita.jpg',
          name:'alita'
      },
      {
        id: 14,
        icon:'../assets/alita.jpg',
        name:'alita'
      },
      {
        id: 15,
        icon:'../assets/alita.jpg',
        name:'alita'
      },
      {
        id: 16,
        icon:'../assets/alita.jpg',
        name:'alita'
      },
      {
        id: 17,
        icon:'../assets/alita.jpg',
        name:'alita'
      },
      {
        id: 18,
        icon:'../assets/alita.jpg',
        name:'alita'
      },
      {
        id: 19,
        icon:'../assets/alita.jpg',
        name:'alita'
      },
      {
        id: 20,
        icon:'../assets/alita.jpg',
        name:'alita'
        },
          
                                                  

    ],

    animatedValue:new Animated.Value(0)
}
  
  
handleScroll=(event)=> {
  console.log('ggg',event.nativeEvent.contentOffset.x)
 
  Animated.timing(this.state.animatedValue, {
    toValue:event.nativeEvent.contentOffset.x,
    useNativeDriver: false,
  duration:0
}).start()

}

//  setNativeEvent(event.nativeEvent)  useNativeDriver: true



  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
  return(
    <View style={
      {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'flex-start',
       }
    }>
      <View style={styles.instant}>
        <Text style={styles.instanttxt}>messages</Text>
    </View>
      <View style={styles.instchat}>
      <View style={styles.instchatx}>
      <View style={styles.instchatm}>
            
      <View style={styles.instchatsc}>
      <Image style={styles.srch} source={require('../assets/orange.png')} />
            </View>

            <View style={styles.opost}>


              <ScrollView

      onScroll={this.handleScroll}
               

                 horizontal ={false}
              Style={{ width: '100%', }} horizontal={true} >
                {this.state.data.slice(0,10).map(e => {
                  const scale=this.state.animatedValue.interpolate({
                    inputRange:[0,226*e.id],
                    outputRange:[1,0]
                  })
                 
                  return(
                    <Animated.View key={e.id}
                      style={{
                        width: 60,
                        height: 60,
                        marginTop:4,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        transform: [
                          {scale:scale}
                        ],
                      
                        }}>
                  <View style={styles.barbox1} >
                    <Image style={styles.grid1} source={require('../assets/gradi.jpg')} />
                    <Image style={styles.grid1st} source={require('../assets/alita.jpg')} />
                  </View>
                  <View style={styles.twarp1} >
                    <Text style={styles.vietew2}>{e.name}</Text>
                  </View>
                </Animated.View>)
                })}
                
</ScrollView>
     

              
            </View>
            
          </View>
         
          <View style={styles.relsmg} >
          <SafeAreaView  style={styles.relsmg2} >
                <FlatList data={this.state.data}
                
                  renderItem={({ item }) => (<View style={styles.relsmgwht} >
                    <View style={styles.profll} >
                      <Image style={styles.progllicon} source={require('../assets/shop.jpg')} />
                    </View>

                    <View style={styles.profillwrds} >
                    
                      <View style={styles.profillwrds1} >
                        <View style={styles.massagename} >
                          <Text style={styles.txtmh} >Zerkcen Wiper</Text>
                        </View>
                        <View style={styles.onlinbx} >
                        </View>
                      </View>
                    
                      <View style={styles.profillwrds2} >
                        <View style={styles.profillwrds2mp} >
                          <Text style={styles.txtmh1} >Hello zerk its been a while since...</Text>
                        </View>
                        <View style={styles.profillwrds2yp} >
                          <Text style={styles.txtmh} >Now</Text>
                        </View>
                      </View>
                    
                      <View style={styles.profillwrds3} >

                        <View style={styles.profillwrds31} >
                          <View style={styles.wrds31} >
                            <Text style={styles.txtmht} >3m</Text>
                          </View>
                        </View>

                        <View style={styles.profillwrds32} >
                          <View style={styles.showx} >
                            <Text style={styles.txtmhls} >CHAT</Text>
                          </View>
                        </View>

                        <View style={styles.profillwrds33} >
                          <Image style={styles.proglliconn} source={require('../assets/shop.jpg')} />
                        </View>

                      </View>
                    </View>
                  
                  </View>)
                  }

                  keyExtractor={item => item.id.toString()}
                 
                />



              
          </SafeAreaView>

          </View>

        </View>
      </View>

    </View>
  );
}
}

export default Message;
//

const styles = StyleSheet.create({

  instant: {
    width: '100%',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  instanttxt: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'white'
  },
  instchat: {
    width: '100%',
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
  },
  instchatx: {
    marginTop: 8,
    width: '100%',
    height: Dimensions.get('window').height - 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  instchatm: {
    width: Dimensions.get('window').width,
    height: 70,
    marginTop: 7,
    justifyContent: 'flex-start',
  
    flexDirection: 'row',
  },

  instchatsc: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 3,
    borderColor: 'orange',
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  opost: {
    width: Dimensions.get('window').width - 47,
    marginLeft: 3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  srch: {
    width: 25,
    height: 25,

  },
 

  barbox1: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid1st: {
    width: 43,
    height: 43,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  twarp1: {
    width: '100%',
    height: 10,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  relsmg: {
    width: '100%',
    height: 500,
    position: 'relative',
    marginTop: -3.5,
    backgroundColor: 'white',
   justifyContent: 'flex-start',
    alignItems: 'center',
  
  },
  relsmg2: {
    width: '100%',
    height: 400,
    marginTop: 5,
    backgroundColor: 'pink',
  
  
  },
 

  
  
  relsmgwht: {
    width: '100%',
    height: 60,
    position:'relative',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  
  },
   profll: {
    width: 60,
    height: '100%',
   justifyContent: 'center',
     alignItems: 'center',
    
  },
  progllicon: {
    width: 50,
    height: 50,
    borderRadius:60,
    justifyContent: 'center',
     alignItems: 'center',
  
  },
  profillwrds:{
    width:Dimensions.get('window').width-60 ,
    height: '100%',
   justifyContent: 'center',
     alignItems: 'center',
  
  },
  profillwrds1:{
    width:'100%',
    height: 15,
    flexDirection:'row',
   justifyContent: 'flex-start',
    
  },
  massagename:{
    width:'80%',
    height: '100%' ,
  justifyContent: 'center',
     alignItems: 'flex-start',
  
  },
  txtmh: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'black'
  },
  onlinbx: {
    width:'20%',
    height: 3 ,
    backgroundColor: 'rgb(50, 255, 43)',
  },

  profillwrds2:{
    width:'100%',
    height: 30,
    flexDirection:'row',
   justifyContent: 'flex-start',
     alignItems: 'center',
  
  },
  profillwrds2mp:{
    width:'80%',
    height: '100%',
    flexDirection:'row',
   justifyContent: 'flex-start',
     alignItems: 'center',
  
  },
  profillwrds2yp:{
    width:'20%',
    height: '100%',
    flexDirection:'row',
   justifyContent: 'center',
     alignItems: 'center',
  
  },
  profillwrds2:{
    width:'100%',
    height: 30,
    flexDirection:'row',
   justifyContent: 'flex-start',
     alignItems: 'center',
  
  },

  txtmhls: {
    fontSize: 9,
    color:'rgb(50, 255, 43)'
  },

  txtmh1: {
    fontSize: 9,
    fontWeight: 'bold',
    color:'black'
  },


  profillwrds3:{
    width:'100%',
    height: 15,
    flexDirection:'row',
    justifyContent: 'center',
     alignItems: 'center',
  
  },

  profillwrds31:{
    width:'20%',
    height: '100%',
    flexDirection:'row',
   justifyContent: 'center',
     alignItems: 'center',
  
  },

  wrds31:{
    width:35,
    height: 15,
    borderRadius:5,
    backgroundColor: 'rgb(50, 255, 43)',
   justifyContent: 'center',
     alignItems: 'center',
  
  },

  txtmht: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop:-2,
    color:'white'
  },

  profillwrds32:{
    width:'60%',
    height: '100%',
    flexDirection:'row',
   justifyContent: 'center',
     alignItems: 'center',
  
  },

  profillwrds33:{
    width:'20%',
    height: '100%',
    flexDirection:'row',
    justifyContent: 'center',
     alignItems: 'center',
  
  },

  proglliconn: {
    width: 12,
    height: 12,
    borderRadius:15
  },


  showx: {
    width: 60,
    height: '95%',
    borderWidth: 2,
    borderColor: 'rgb(50, 255, 43)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8
  }

});

//<Video play={this.state.bar} edge={edge} opacity={opacity2} />

