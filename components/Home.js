//importing all necessary modules
import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var dicwords = require('./dictionaryWords');

var Realm = require('realm');


export default class Home extends Component{
    //creating a constructor to handle state changes
    constructor(props){
        super(props);
        this.state = {
            appbarcond: false,
            text: "",
            storewords: true,
        }
    }

    componentDidMount(){

        if(this.state.storewords == true){
            dicwords.dicwords();
        }
        this.setState({
            storewords: false
        })

    }

    //setting the navigation options of the navigations that will be done in the app. Example: header title.
    static navigationOptions= {
        headerTitle: "Seadic",
        headerRight: <Icon.Button name="search" size={20} color="#25145E" backgroundColor="#FFBE33"
        onPress={null}
        ></Icon.Button>,
        headerLeft: <Icon.Button name="align-justify" size={20} color="#25145E" backgroundColor="#FFBE33"
        onPress={null}></Icon.Button>,
        headerStyle: {
            backgroundColor: '#FFBE33',
        },
        headerTintColor: '#25145E',
        headerTitleStyle:{
            fontWeight: 'bold',
            paddingLeft: (Dimensions.get('window').width)/10,
          },
    };

    //function to change the search section(when pressed) in the home to a text field and a search button
    decider(){
        if (this.state.appbarcond){
            return(
                <View style={styles.searchbox}>
            <TextInput placeholder={"Type the word here ..."} placeholderTextColor={"white"} maxLength={20} onSubmitEditing={null} 
            returnKeyType={"search"} style={styles.inputstyle} onChangeText={(text) => this.setState({text})} autoFocus={true}>
            </TextInput>
            <View style={styles.buttonview}>
            <View><TouchableOpacity style={styles.buttonstyle} activeOpacity={10}
            onPress={() => this.props.navigation.navigate('SearchScreen', {searchword: this.state.text.toLowerCase()})}>
            <Text style={styles.buttontext}>Search</Text></TouchableOpacity></View>
            </View>
            </View>
            
            )
        }
        else{
            return (
                <View style={styles.searchicon}>
                    <TouchableHighlight style={styles.iconsstyle} onPress={() => this.setState({appbarcond: true})}>
                <Icon name="search" size={25} color="white"></Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.homedidvision} onPress={() => this.setState({appbarcond: true})}><Text style={styles.hometext} >Search</Text></TouchableHighlight>
                </View>
            )
            
            }
        
        
    }

    
    generateRandomWord(){

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
            var wordlength = realm.objects('Word').length;
            var minvalue = 0;
            var maxvalue = wordlength;
            randomvalue = Math.floor(Math.random() * (30 - minvalue + 1 )) + 1;
            
            var randint =  new Promise((resolve, reject) => {
                resolve(realm.objects('Word')[randomvalue].name)
            })
            randint.then( (word) => {this.props.navigation.navigate("SearchScreen", { searchword: word })} )
            randint.catch(error => {
                console("There was an error when trying to resolve a promise of assigning random word from database words to a variable called randint");
            })
        realm.close();  
        })
          .catch(error => {
            console.log('There was an error in opening the database.')
          })
    }

    //the part of the code to run first(on condition that there is no componentDidMount etc...) when this file is accessed by the app
    render(){
        return (
             //the components to return are all wrapped in a scroll view
             <ImageBackground
             source={require('./Reading.jpg')}
             style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
             >
            <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
                
                {this.decider()}

                <View style={styles.searchicon}>
                <TouchableHighlight style={styles.iconsstyle} onPress={() => this.props.navigation.navigate('DayWordScreen')}>
                <Icon name="calendar" size={25} color="white"></Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.homedidvision}
                onPress={() => this.props.navigation.navigate('DayWordScreen')}>
                <Text style={styles.hometext}>Word of the day</Text></TouchableHighlight>
                </View>

                <View style={styles.searchicon}>
                <TouchableHighlight style={styles.iconsstyle} onPress={() => this.props.navigation.navigate('HistoryScreen')}>
                <Icon name="history" size={25} color="white"></Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.homedidvision}
                onPress={() => this.props.navigation.navigate('HistoryScreen')}>
                <Text style={styles.hometext}>History</Text></TouchableHighlight>
                </View>

                <View style={styles.searchicon}>
                <TouchableHighlight style={styles.iconsstyle} onPress={() => this.props.navigation.navigate('BookmarkScreen')}>
                <Icon name="bookmark" size={25} color="white"></Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.homedidvision}
                onPress={() => this.props.navigation.navigate('BookmarkScreen')}>
                <Text style={styles.hometext}>Bookmark</Text></TouchableHighlight>
                </View>

                <View style={styles.searchicon}>
                <TouchableHighlight style={styles.iconsstyle} onPress={() => this.generateRandomWord()}>
                <Icon name="random" size={25} color="white"></Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.homedidvision}
                 onPress={() => this.generateRandomWord()}>
                <Text style={styles.hometext}>Random Word</Text></TouchableHighlight>
                </View>
                 </ScrollView>
                 </ImageBackground>
                 
        )
    }
}

//StyleSheet to take care of all styling in the app
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        //backgroundColor: "#ECF0F1"
    },
    searchicon:{
      flexDirection: 'row',
      paddingLeft: 5,
    },
    searchbox: {
        flexDirection: 'row',
        marginBottom: 8
    },
    inputstyle: {
        backgroundColor: "pink",
        width: Dimensions.get('window').width*(2/3),
        borderRadius: 50,
        fontSize: 17,
    },
    buttonview: {
    justifyContent: 'center',
    paddingLeft: 10,
    width: (Dimensions.get('window').width*(1/3))*0.8,
    },   
    buttonstyle: {
    elevation: 10,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: "#25145E",
    alignItems: 'center',
    
    },
    buttontext: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    homedidvision: {
        height: Dimensions.get("window").height/10,
        justifyContent: 'center', 
        marginLeft: 20,
        marginBottom: 8
    },
    hometext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"  
    },
    iconsstyle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#25145E',
        borderRadius: 150,
        width: 50,
        height: 60,
        marginBottom: 8
    }
})