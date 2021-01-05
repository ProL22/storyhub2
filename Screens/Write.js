import * as React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Button} 
  from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'

export default class Write extends React.Component{
  constructor(){
    super()
    this.state={
          author:'',
          story:'',
          title:''  
    }
  }
  submitstory=()=>{
    db.collection("submited_stories").add({
      "Author":author,
      "Title":title,
      "Story":story
    })
    this.setState({
      author:'',
      story:'',
      title:''
    })
  }
  render(){
    return(
    <SafeAreaProvider>
      <View>
             <Header
                      backgroundColor={'grey'}
                      centerComponent={{text:'Story Hub',
                                        style:{fontSize:25}
                    }}    
             />
             <KeyboardAvoidingView>
                                    <TextInput 
                                               style={{ border:'solid',
                                                        width:250,
                                                        height:80
                                                    }}
                                              placeholder={'Author Name'}
                                              maxLength={25}
                                              onChangeText={(text)=>{
                                                this.setState({
                                                      authorname:text
                                                })
                                              }
                                            }                                    
                                    />                 
                                    <TextInput 
                                              style={{ border:'solid',
                                                       width:250,
                                                       height:80,
                                                       margin:20
                                                     }}
                                              placeholder={'Title'}
                                              onChangeText={(text)=>{
                                                  this.setState({
                                                      title:text
                                                  })
                                              }
                                            }
                                         />
                                    <TextInput
                                              style={{ border:'solid',
                                                       width:230,
                                                       height:150,
                                                       margin:20
                                                     }}
                                              placeholder={"Story"}
                                              multiline={true}
                                              numberOfLines={10}
                                              onChangeText={(text)=>{
                                                this.setState({
                                                  story:text
                                                })
                                              }
                                            }

                                    /> 
                                              

             </KeyboardAvoidingView>
             <Button title='Submit' color='red'onPress={this.submitstory}/>
      </View>
      </SafeAreaProvider>
    )
  }
}