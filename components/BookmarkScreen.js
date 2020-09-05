//importing all necessary modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList, TouchableHighlight, } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

var bookmarkStore = require('./bookmarkStore');

//requiring Realm database into the project
var Realm = require('realm');

export default class BookmarkScreen extends Component {
  //creating a constructor to handle state changes
  constructor(props) {
    super(props);
    this.state = {
      bookarray: [],
    }
  }

  //setting the navigation options for this page. Example: header title.
  static navigationOptions=({navigation}) => {
    return{
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
    const bookmarkSchema = {
      name: 'Bookmark',
      properties: {
        name: "string",
      }
    }

    //opening the database based on the bookmark schema and adding all the words in the bookmark database to a state array so that they can then be displayed on the bookmark screen
    Realm.open({
      schema: [bookmarkSchema]
    })
      .then(realm => {
        bookarraymaker = [];
        bookdata = realm.objects('Bookmark');
        //logic to put the data (from the bookmark database) into the state array of objects to be able to use it for the flatlist in the client side UI
        for (var i = 0; i < bookdata.length; i++) {
          bookarraymaker.push({ word: bookdata[i].name })
        }
  //setting the value of a global state array (of objects) called 'bookarray' to a local array (of objects) called 'bookarraymaker'
        this.setState({
          bookarray: bookarraymaker,
        })
        realm.close();
      })
      //this part will catch any error that will be encountered in opening the database
    .catch(error => {
      console.log('There was an error in opening the database.')
    })

  }
  

  removeHandler(word){
  //This part takes care of removing a word from the bookmark list on the screen and also making sure it is removed from the bookmark database
   for(var i=0; i<this.state.bookarray.length; i++){
     if(this.state.bookarray[i].word == word){
       var statearray = this.state.bookarray;
       statearray.splice(i,1);
       this.setState({
         bookarray: statearray
       })
       break;
     }
   }
   bookmarkStore.bookmarkdelete(word);
  }

  //the part of the code to run first(on condition that there is no componentDidMount etc...) when this file is accessed by the app
  render() {
    return (
      <View style={styles.main}>
        <FlatList
          data={this.state.bookarray}
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