import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import SearchScreen from './SearchScreen';

const Realm = require('realm');

savedWords = [
  {word: "a", meaning: "To greet someone..."},
  {word:  "aa", meaning: "That is my originall ..."},
  {word: "aaa", meaning: "That is my nick..."},
  {word: "aah", meaning: "That is my sir..."}
]


export default class BookmarkScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }

  componentDidMount(){

  }



  render(){
  return(
    <View style={styles.main}>
    <FlatList 
    data={savedWords}
    renderItem={({item}) => (
        <TouchableHighlight style={styles.container} /*onPress={()=> this.props.navigation.navigate("SearchScreen", {searchword: savedWords.word})}*/ >
          <View>
        <Text style={styles.nametxt}>{item.word}</Text>
        <Text style={styles.descriptiontxt}>{item.meaning}</Text>
        </View>
        </TouchableHighlight>
    )}
    />
    </View>
  )
    }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'yellow'
  },
  container: {
    backgroundColor: 'blue',
    margin: 7.0,
    borderRadius: 5.0
  }, 
  nametxt: {
    fontSize: 40.0,
    fontFamily: 'bold',
    marginLeft: 5.0,
    color: 'white'
  }, 
  descriptiontxt: {
    fontSize: 20.0,
    fontFamily: "h",
    marginLeft: 5.0,
    color: 'white'
  }, 
})