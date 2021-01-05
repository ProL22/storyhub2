import * as React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'

export default class Read extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
           <Text>"Welcome Back"</Text>
      </SafeAreaProvider>
    )
  }
}