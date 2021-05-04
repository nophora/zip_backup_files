import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions} from 'react-native';

class Timelin  extends  React.Component{
  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
  return(
    <View style={styles.container}>
     
     <View style={styles.scroll}>
        <View style={styles.statebar}></View> 
        <View style={styles.post}></View> 
        <View style={styles.postview}></View>    
     </View>
    </View>
  );
}
}

export default Timeln;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: 'rgb(255, 145, 0)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflowY: 'scroll',
    backgroundColor: 'rgb(75, 255, 20)',
  
    },
    scroll: {
        width:'100%',
        height:500,
        backgroundColor:'rgb(255, 231, 20)'
    },
    statebar: {
      width:'100%',
      height:40,
      backgroundColor:'rgb(68, 0, 255)'
  },
  post: {
    width:'100%',
    height:40,
    backgroundColor:'rgb(0, 97, 195)'
},
postview: {
  width:'100%',
  height:300,
  backgroundColor:'rgb(0, 255, 128)'
},
});
