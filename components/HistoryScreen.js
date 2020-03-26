//importing all necessary modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList, TouchableHighlight, } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

var historyStore = require('./historyStore');

//requiring Realm database into the project
var Realm = require('realm');

export default class BookmarkScreen extends Component {
  //creating a constructor to handle state changes
  constructor(props) {
    super(props);
    this.state = {
      historyarray: [],
    }
  }

  //setting the navigation options for this page. Example: header title.
  static navigationOptions = ({navigation}) => {
    return {
    headerTitle: "Seadic",
    headerLeft: <Icon.Button 
      name="arrowleft" size={20} color="white" backgroundColor="#2F1976" onPress={() => navigation.goBack()}
    ></Icon.Button>,
    headerStyle: {
      backgroundColor: "#2F1976"
    },
    headerTintColor: "white",
    headerTitleStyle:{
      fontWeight: 'bold',
      paddingLeft: (Dimensions.get('window').width)/10
    },
  }
  }

  //the part of code to run first as soon as the app is mounted here
  componentDidMount() {
     //creating a schema (to the database) based on which some objects can be created according to in the database
    const historySchema = {
      name: 'History',
      properties: {
        name: "string",
      }
    }

    //opening the database based on the history schema and adding all the words in the history database to a state array so that they can then be displayed on the history screen
    Realm.open({
      schema: [historySchema]
    })
      .then(realm => {
        historyarraymaker = [];
        historydata = realm.objects('History');
        //logic to put the data (from the history database) into an array of objects to be able to use it for the flatlist in the client side UI
        for (var i = 0; i < historydata.length; i++) {
          historyarraymaker.push({ word: historydata[i].name })
        }
  //setting the value of a global state array (of objects) called 'historyarray' to a local array (of objects) called 'historyarraymaker'
        this.setState({
          historyarray: historyarraymaker,
        })
        realm.close();
      })
      //this part will catch any error that will be encountered in opening the database
    .catch(error => {
      console.log('There was an error in opening the database.')
    })

  }
  

  removeHandler(word){
  //This part takes care of removing a word from the history list on the screen and also making sure it is removed from the history database
   for(var i=0; i<this.state.historyarray.length; i++){
     if(this.state.historyarray[i].word == word){
       var statearray = this.state.historyarray;
       statearray.splice(i,1);
       this.setState({
         historyarray: statearray
       })
       break;
     }
   }
   historyStore.historydelete(word);
  }

  //the part of the code to run first(on condition that there is no componentDidMount etc...) when this file is accessed by the app
  render() {
    return (
      <View style={styles.main}>
        <FlatList
          data={this.state.historyarray}
          keyExtractor={(item, index) => item.word}
          renderItem={({ item }) => (
            <View style={styles.main}>
              <TouchableHighlight underlayColor="blue" style={styles.container} onPress={() => this.props.navigation.navigate("SearchScreen", { searchword: item.word })} >
                <View>
                  <Text style={styles.nametxt}>{item.word}</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.removebutton}>
                <Icon.Button name="close" size={30} color="red" backgroundColor="white" onPress={()=> this.removeHandler(item.word)}></Icon.Button>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

//StyleSheet to take care of all styling in this page
const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    margin: 3.0,
  },
  container: {
    width: Dimensions.get('window').width * (10 / 12),
    backgroundColor: '#33A0FF',
    margin: 3.0,
    borderRadius: 5.0,
  },
  removebutton: {
    width: Dimensions.get('window').width * (2 / 12),
    justifyContent: "center",
    alignItems: "center",
  },
  nametxt: {
    fontSize: 30.0,
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