import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
var Realm = require('realm');



export default class DrawerPage extends Component {

    //This function takes care of generating a random word from the words in the database and display the meaning of the word using the search screen
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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgblock}>
                    <View style={styles.imgview}>
                        <ImageBackground
                            source={require('./seadic.jpg')}
                            style={styles.imgstyle}
                        /></View>
                </View>
                <View style={styles.txtscroll}>
                    <ScrollView>
                        <View style={styles.touchableview}>
                            <TouchableOpacity activeOpacity={50} style={styles.touchabledrawericon} onPress={() => this.props.navigation.navigate("Home")}>
                                <Icon name="home" size={20}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={50} style={this.touchabledrawertxt} onPress={() => this.props.navigation.navigate("Home")}>
                                <Text style={styles.drawertxt}>Home</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.touchableview}>
                            <TouchableOpacity activeOpacity={50} style={styles.touchabledrawericon} onPress={() => this.props.navigation.navigate("BookmarkScreen")}>
                                <Icon name="bookmark" size={20}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={50} style={this.touchabledrawertxt} onPress={() => this.props.navigation.navigate("BookmarkScreen")}>
                                <Text style={styles.drawertxt}>Bookmark</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.touchableview}>
                            <TouchableOpacity  activeOpacity={50} style={styles.touchabledrawericon} onPress={() => this.props.navigation.navigate("DayWordScreen")}>
                                <Icon name="calendar" size={20}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={50} style={this.touchabledrawertxt} onPress={() => this.props.navigation.navigate("DayWordScreen")}>
                                <Text style={styles.drawertxt}>Word of the Day</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.touchableview}>
                            <TouchableOpacity activeOpacity={50} style={styles.touchabledrawericon} onPress={() => this.generateRandomWord()}>
                                <Icon name="random" size={20}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={50} style={this.touchabledrawertxt} onPress={() => this.generateRandomWord()}>
                                <Text style={styles.drawertxt}>Random Word</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.touchableview}>
                            <TouchableOpacity activeOpacity={50} style={styles.touchabledrawericon} onPress={() => this.props.navigation.navigate("HistoryScreen")}>
                                <Icon name="history" size={20}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={50} style={this.touchabledrawertxt} onPress={() => this.props.navigation.navigate("HistoryScreen")}>
                                <Text style={styles.drawertxt}>History</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View >
        )
    }
}

//StyleSheet to take care of all styling in this page
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1

    },
    imgview: {
        height: 150,
        width: 150,
        borderRadius: 80,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    imgstyle: {
        width: 100,
        height: 100,
    },
    imgblock: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFBE33",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    txtscroll: {
        flex: 7
    },
    drawertxt: {
        color: "#25145E",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20
    },
    touchableview: {
        borderBottomWidth: 1,
        borderBottomColor: "pink",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10
        
    },
    touchabledrawertxt: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    touchabledrawericon: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    }
})