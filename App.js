import * as React from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';
import Read from './Screens/Read';
import Write from './Screens/Write'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
           <AppContainer/>
      </SafeAreaProvider>
    )
  }
}
const TabNavigator=createBottomTabNavigator({
  Write:{screen:Write,
    navigationOptions:{
       tabBarIcon:<Image  source = {
          require("./assets/write.png")
         } 
         style ={{width:20,height:20}} 
       />
    }
 },


  Read:{screen:Read,
    navigationOptions:{
      tabBarIcon:<Image source = {
        require("./assets/read.png")
      }
      style={{width:20,height:20}}
        />
      
    }
  },
})
 
const AppContainer=createAppContainer(TabNavigator)