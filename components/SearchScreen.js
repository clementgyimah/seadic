//importing all necessary modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconThin from 'react-native-vector-icons/AntDesign';
var bookmarkStore = require('./bookmarkStore');
var historyStore = require('./historyStore');

//requiring Realm database into the project
const Realm = require('realm');

export default class SearchScreen extends Component {
  //creating a constructor to handle state changes
  constructor(props) {
    super(props);
    this.state = {

      wordname: "",
      worddisplayname: "",
      wordplural: "",
      wordtense: "",
      wordother: "",
      wordabbreviation: "",
      wordarticle: "",
      wordprefix: "",
      wordsuffix: "",
      wordnoun: "",
      wordverb: "",
      wordsynonyms: "",
      wordantonyms: "",
      wordadjective: "",
      wordadverb: "",
      wordinterjection: "",
      wordpreposition: "",
      wordconjunction: "",
      wordpronoun: "",
      wordhistory: "",
      keyword: "",
      mainword: "",
    };
  }

  //setting the navigation options for this page. Example: header title.
  static navigationOptions = ({navigation}) => {
    return{
    headerTitle: "Seadic",
    headerLeft: <IconThin.Button 
      name="arrowleft" size={20} color="white" backgroundColor="#2F1976" onPress={() => navigation.goBack()}
    ></IconThin.Button>,
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

    const historySchema = {
      name: 'History',
      properties: {
        name: "string",
      }  
    }

    //opening the database and creating or populating it with objects(words in this case)
    Realm.open({ schema: [wordSchema, historySchema] })
      .then(realm => {

        //setting the state of a particular state variable called 'keyword' to the word gotten from any screen that is navigating to this screen
        this.setState({ keyword: this.props.navigation.state.params.searchword })

        //setting a local variable called 'keyword' to the value of the global state variable called 'keyword'
        keyword = this.state.keyword

        //setting a local variable called 'historywords' to the data in the history database
        var historywords = realm.objects('History')
        //condition to check if there is nothing in the history database, then we store what is coming as the first word in it
        if(historywords.length == 0){
        realm.write(() => {
          const historyword = realm.create('History', {
            name: keyword
          })
        })
      }
      //else if there is some data already in the history database, then we use for loop to check if the word to be stored is not already in the history database
       else{
        for(var i = 0; i < historywords.length; i++){
          if (historywords[i].name == keyword) {
              break;
          }
          //logic to check and store the word if we have reach the end of the history data list without finding the word already in the list
          else if(i == (historywords.length - 1)){
            realm.write(() => {
              const historymarkword = realm.create('History', {
                name: keyword
              })
            })
          }
      }
    }
    
        //filtering the words in the database to find the word that matches with what has been searched. It will be put in a list containing only that one word
        mainword = realm.objects('Word').filtered(`name = "${keyword}"`)

        //setting the state of some global-state variables to the properties of the word being searched
        this.setState({
          wordname: mainword[0].name, worddisplayname: mainword[0].displayname, wordtense: mainword[0].tense, wordhistory: mainword[0].history,
          wordplural: mainword[0].plural, wordprefix: mainword[0].prefix, wordsuffix: mainword[0].suffix, wordother: mainword[0].other,
          wordabbreviation: mainword[0].abbreviation, wordarticle: mainword[0].article, wordnoun: mainword[0].noun, wordverb: mainword[0].verb,
          wordsynonyms: mainword[0].synonyms, wordantonyms: mainword[0].antonyms, wordadjective: mainword[0].adjective, wordadverb: mainword[0].adverb,
          wordinterjection: mainword[0].interjection, wordpreposition: mainword[0].preposition, wordconjunction: mainword[0].conjunction, wordpronoun: mainword[0].pronoun
        })

        realm.close();
      }
      )

      //this part will catch any error that will be encountered in opening the database
      .catch(error => {
        console.log('There was an error in opening the database.')
      })

  }


  //creating different functions (<functionname>decide ) to decide whether some properties of some words should be shown on the "Search Screen" or not
  otherdecide() {
    if (this.state.wordother !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Other:</Text>
          <Text style={styles.deftxt}> {this.state.wordother}</Text>
        </View>
      )
    }
  }

  pluraldecide() {
    if (this.state.wordplural !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Plural:</Text>
          <Text style={styles.deftxt}> {this.state.wordplural}</Text>
        </View>
      )
    }
  }

  tensedecide() {
    if (this.state.wordtense !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Tense:</Text>
          <Text style={styles.deftxt}> {this.state.wordtense}</Text>
        </View>
      )
    }
  }

  historydecide() {
    if (this.state.wordhistory !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>History:</Text>
          <Text style={styles.deftxt}> {this.state.wordhistory}</Text>
        </View>
      )
    }
  }

  articledecide() {
    if (this.state.wordarticle !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Article:</Text>
          <Text style={styles.deftxt}> {this.state.wordarticle}</Text>
        </View>
      )
    }
  }

  prefixdecide() {
    if (this.state.wordprefix !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Prefix:</Text>
          <Text style={styles.deftxt}> {this.state.wordprefix}</Text>
        </View>
      )
    }
  }

  suffixdecide() {
    if (this.state.wordsuffix !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Suffix:</Text>
          <Text style={styles.deftxt}> {this.state.wordsuffix}</Text>
        </View>
      )
    }
  }

  abbreviationdecide() {
    if (this.state.wordabbreviation !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Abbreviation:</Text>
          <Text style={styles.deftxt}> {this.state.wordabbreviation}</Text>
        </View>
      )
    }
  }

  noundecide() {
    if (this.state.wordnoun !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Noun:</Text>
          <Text style={styles.deftxt}> {this.state.wordnoun}</Text>
        </View>
      )
    }
  }

  verbdecide() {
    if (this.state.wordverb !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Verb:</Text>
          <Text style={styles.deftxt}> {this.state.wordverb}</Text>
        </View>
      )
    }
  }

  synonymsdecide() {
    if (this.state.wordsynonyms !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Synonyms:</Text>
          <Text style={styles.deftxt}> {this.state.wordsynonyms}</Text>
        </View>
      )
    }
  }

  antonymsdecide() {
    if (this.state.wordantonyms !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Antonyms:</Text>
          <Text style={styles.deftxt}> {this.state.wordantonyms}</Text>
        </View>
      )
    }
  }

  adjectivedecide() {
    if (this.state.wordadjective !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Adjective:</Text>
          <Text style={styles.deftxt}> {this.state.wordadjective}</Text>
        </View>
      )
    }
  }

  adverbdecide() {
    if (this.state.wordadverb !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Adverb:</Text>
          <Text style={styles.deftxt}> {this.state.wordadverb}</Text>
        </View>
      )
    }
  }

  interjectiondecide() {
    if (this.state.wordinterjection !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Interjection:</Text>
          <Text style={styles.deftxt}> {this.state.wordinterjection}</Text>
        </View>
      )
    }
  }

  prepositiondecide() {
    if (this.state.wordpreposition !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Preposition:</Text>
          <Text style={styles.deftxt}> {this.state.wordpreposition}</Text>
        </View>
      )
    }
  }

  conjunctiondecide() {
    if (this.state.wordconjunction !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Conjunction:</Text>
          <Text style={styles.deftxt}> {this.state.wordconjunction}</Text>
        </View>
      )
    }
  }

  pronoundecide() {
    if (this.state.wordpronoun !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Pronoun:</Text>
          <Text style={styles.deftxt}> {this.state.wordpronoun}</Text>
        </View>
      )
    }
  }


  //the part of the code to run first(on condition that there is no componentDidMount etc...) when this file is accessed by the app
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameview}>
          <View style={styles.nametxtview}><Text style={styles.nametxt}> {this.state.worddisplayname}</Text></View>
          <View style={styles.bookmark}><Icon.Button name="bookmark" size={30} color="white" backgroundColor="#25145E" onPress={() => bookmarkStore.bookmarkadd(this.state.wordname)} ></Icon.Button></View>
        </View>
        <View style={styles.scroll}>
          <ScrollView>
            <View>

              {this.pluraldecide()}

              {this.tensedecide()}

              {this.articledecide()}

              {this.noundecide()}

              {this.verbdecide()}

              {this.adjectivedecide()}

              {this.adverbdecide()}

              {this.prepositiondecide()}

              {this.pronoundecide()}

              {this.abbreviationdecide()}

              {this.prefixdecide()}

              {this.suffixdecide()}

              {this.synonymsdecide()}

              {this.antonymsdecide()}

              {this.interjectiondecide()}

              {this.conjunctiondecide()}

              {this.historydecide()}

              {this.otherdecide()}

            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

//StyleSheet to take care of all styling in this page
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameview: {
    backgroundColor: "#25145E",
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nametxt: {
    fontSize: 25,
    color: "white",

  },
  nametxtview: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
  }
  ,
  scroll: {
    backgroundColor: "yellow",
    flex: 8,
    padding: 10.0
  },
  indview: {
    paddingBottom: 15,
  },
  indtxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "red",
    paddingBottom: 5,
    paddingTop: 5,
  },
  deftxt: {
    fontSize: 15,
    color: "#25145E",
  },
  bookmark: {
    flex: 2,
    alignItems: "center",
  },

})