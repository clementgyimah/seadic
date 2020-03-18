import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList, TouchableHighlight, } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const Realm = require('realm');

savedWords = [
  { word: "a", meaning: "To greet someone..." },
  { word: "aa", meaning: "That is my originall ..." },
  { word: "aaa", meaning: "That is my nick..." },
  { word: "aah", meaning: "That is my sir..." },
  { word: "aahed", meaning: "To greet someone..." },
  { word: "aahing", meaning: "That is my originall ..." },
  { word: "aahs", meaning: "That is my nick..." },
  { word: "aal", meaning: "That is my sir..." }
]


export default class BookmarkScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      wordname: ""
    }
  }



  componentDidMount() {
    const wordSchema = {
      name: 'Word',
      properties: {
        name: 'string',
        displayname: 'string',
        plural: 'string',
        tense: 'string',
        other: 'string',
        abbreviation: 'string',
        article: 'string',
        prefix: 'string',
        suffix: 'string',
        noun: 'string',
        verb: 'string',
        synonyms: 'string',
        antonyms: 'string',
        adjective: 'string',
        adverb: 'string',
        interjection: 'string',
        preposition: 'string',
        conjunction: 'string',
        pronoun: 'string',
        history: 'string',
      }
    }

    Realm.open({ schema: [wordSchema] })
      .then(realm => {
        word = realm.objects('Word').filtered(`name = "a"`);

        this.setState({ wordname: word[0].noun })
        realm.close();
      })
  }



  render() {
    return (
      <View style={styles.main}>
        <View><FlatList
          data={savedWords}
          keyExtractor={(item, index) => item.word}
          renderItem={({ item }) => (
            <View style={styles.main}>
            <TouchableHighlight style={styles.container} onPress={()=> this.props.navigation.navigate("SearchScreen", {searchword: item.word})} >
              <View>
                <Text style={styles.nametxt}>{item.word}</Text>
                <Text style={styles.descriptiontxt}>{item.meaning}</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.removebutton}>
            <Icon.Button name="remove" size={30} color="blue" backgroundColor="white" onPress={null}></Icon.Button>
            </View>
            </View>
          )}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    margin: 3.0,
  },
  container: {
    width: Dimensions.get('window').width*(10/12),
    backgroundColor: 'blue',
    margin: 3.0,
    borderRadius: 5.0,
  },
  removebutton: {
    width: Dimensions.get('window').width*(2/12),
    justifyContent: "center",
    alignItems: "center",
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