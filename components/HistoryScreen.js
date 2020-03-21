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

  //setting the navigation options of the navigations that will be done in the app. Example: header title.
  static navigationOptions= {
    headerTitle: "Seadic",
    headerStyle: {
      backgroundColor: "#2F1976"
    },
    headerTintColor: "white",
    headerTitleStyle:{
      fontWeight: 'bold',
      paddingLeft: (Dimensions.get('window').width)/10
    },
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

    //opening the database and creating or populating it with objects(words in this case)
    Realm.open({
      schema: [historySchema]
    })
      .then(realm => {
        historyarraymaker = [];
        historydata = realm.objects('History');
        //logic to put the data (from the bookmark database) into an array of objects to be able to use it for the flatlist in the client side ui
        for (var i = 0; i < historydata.length; i++) {
          historyarraymaker.push({ word: historydata[i].name })
        }
  //setting the value of a global state array (of objects) called 'bookarray' to a local array (of objects) called 'bookarraymaker'
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
              <TouchableHighlight style={styles.container} onPress={() => this.props.navigation.navigate("SearchScreen", { searchword: item.word })} >
                <View>
                  <Text style={styles.nametxt}>{item.word}</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.removebutton}>
                <Icon.Button name="close" size={30} color="#33C3FF" backgroundColor="white" onPress={()=> this.removeHandler(item.word)}></Icon.Button>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

//StyleSheet to take care of all styling in the app
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