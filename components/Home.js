//importing all necessary modules
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var dicwords = require('./dictionaryWords');

var Realm = require('realm');


export default class Home extends Component {
    //creating a constructor to handle state changes
    constructor(props) {
        super(props);
        this.state = {
            appbarcond: false,
            text: "",
        }
    }

    //the part of code to run first as soon as the app is mounted here
    componentDidMount() {

	 if (Realm.exists({path: Realm.defaultPath})){
            console.log("The dictionary file already exist")
        }
        else{
            dicwords.dicwords();
        }

    }

    //function to check if we should change the search section on the home screen from (icon and word) to (text field and button) using a state variable called appbarcond
    handleSearchState() {
        this.setState({
            appbarcond: false
        })
    }

    //setting the navigation options for this page. Example: header title.
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Seadic",
            headerLeft: <Icon.Button name="align-justify" size={20} color="#25145E" backgroundColor="#FFBE33"
                onPress={() => navigation.openDrawer()}></Icon.Button>,           
            headerStyle: {
                backgroundColor: '#FFBE33',
            },
            headerTintColor: '#25145E',
            headerTitleStyle: {
                fontWeight: 'bold',
                paddingLeft: (Dimensions.get('window').width) / 10,
            },
        }
    };

    //function to change the search section(when pressed) in the home to a text field and a search button
    decider() {
        if (this.state.appbarcond) {
            return (
                <View style={styles.searchbox}>
                    <TextInput placeholder={"Type the word here ..."} placeholderTextColor={"white"} maxLength={20} onSubmitEditing={null}
                        returnKeyType={"search"} onEndEditing={() => this.props.navigation.navigate('SearchScreen', { searchword: this.state.text.toLowerCase() }) } style={styles.inputstyle} onChangeText={(text) => this.setState({ text })} autoFocus={true}>
                    </TextInput>
                    <View style={styles.buttonview}>
                        <View><TouchableOpacity style={styles.buttonstyle} activeOpacity={50}
                            onPress={() => this.props.navigation.navigate('SearchScreen', { searchword: this.state.text.toLowerCase() })}>
                            <Text style={styles.buttontext}>Search</Text></TouchableOpacity></View>
                    </View>
                </View>

            )
        }
        else {
            return (
                <View style={styles.searchicon}>
                    <TouchableOpacity activeOpacity={50} style={styles.iconsstyle} onPress={() => this.setState({ appbarcond: true })}>
                        <Icon name="search" size={25} color="white"></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={50} style={styles.homedidvision} onPress={() => this.setState({ appbarcond: true })}><Text style={styles.hometext} >Search</Text></TouchableOpacity>
                </View>
            )

        }

    }



    dayword() {
        //the schema or structure of the "Word of the Day" data and "Words" data being stored
        const dayWordSchema = {
            name: 'DayWord',
            properties: {
                name: "string",
                year: "int",
                month: "int",
                day: "int"
            }
        }

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

        //opening the database based on the Words schema and the Word of the day schema
        Realm.open({ schema: [wordSchema, dayWordSchema] })
            .then(realm => {
                var dayword = realm.objects('DayWord');
                var currentyear = new Date().getFullYear();
                var currentmonth = new Date().getMonth();
                var currentday = new Date().getDay();
                //condition to check if there is nothing in the Word of the Day database, then we store what is coming as the Word of the Day in it
                if (dayword.length == 0) {

                    var wordlength = realm.objects('Word').length;
                    var minvalue = 0;
                    var maxvalue = wordlength;
                    var randomvalue = Math.floor(Math.random() * (maxvalue - minvalue + 1)) + 1;
                    var randomvaluegenerated = realm.objects('Word')[randomvalue].name
                    realm.write(() => {
                        const daywordvalue = realm.create('DayWord', {
                            name: randomvaluegenerated,
                            year: currentyear,
                            month: currentmonth,
                            day: currentday
                        })
                    })
                    var randomword = new Promise((resolve, reject) => {
                        resolve(randomvaluegenerated)
                    })
                    randomword.then((word) => {
                        this.props.navigation.navigate("SearchScreen", { searchword: word })
                    })

                    randomword.catch(error => {
                        console("There was an error when trying to resolve a promise of storing new Word of the Day and assigning Random Word from database schema(Words) to a variable called randomword");
                    })

                }
                // handler for the condition of either maintaining the Word of the Day (if day has not ended) or changing the word of the day (if day has ended)
                else {

                    var databaseyear = realm.objects("DayWord")[0].year;
                    var databasemonth = realm.objects("DayWord")[0].month;
                    var databaseday = realm.objects("DayWord")[0].day;

                    //check if day has not changed or ended
                    if (currentyear == databaseyear && currentmonth == databasemonth && currentday == databaseday) {
                        var databaseword = new Promise((resolve, reject) => {
                            resolve(realm.objects("DayWord")[0].name)
                        })
                        databaseword.then((value) => {
                            this.props.navigation.navigate("SearchScreen", { searchword: value })
                        })
                        databaseword.catch(error => {
                            console("There was an error when trying to resolve a promise of assigning the Word of the Day from database words to a variable called databaseword");
                        })
                    //else handler for day has changed or ended
                    }
                    else {
                        var wordlength = realm.objects('Word').length;
                        var minvalue = 0;
                        var maxvalue = wordlength;
                        var randomvalue = Math.floor(Math.random() * (maxvalue - minvalue + 1)) + 1;
                        var mainvalue = realm.objects('Word')[randomvalue].name
                        realm.write(() => {
                            realm.objects("DayWord")[0].name = mainvalue
                            realm.objects("DayWord")[0].year = currentyear
                            realm.objects("DayWord")[0].month = currentmonth
                            realm.objects("DayWord")[0].day = currentday
                        })
                        var randomword = new Promise((resolve, reject) => {
                            resolve(mainvalue)
                        })
                        randomword.then((word) => {
                            this.props.navigation.navigate("SearchScreen", { searchword: word })
                        })

                        randomword.catch(error => {
                            console("There was an error when trying to resolve a promise of updating Word of the Day and assigning Random Word from database schema(Words) to a variable called randomword");
                        })

                    }

                }
                realm.close();

            }
            )
            //this part will catch any error that will be encountered in opening the database
            .catch(error => {
                console.log('There was an error in opening the database.')
            })

    }


    generateRandomWord() {

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
                randomvalue = Math.floor(Math.random() * (maxvalue - minvalue + 1)) + 1;

                var randint = new Promise((resolve, reject) => {
                    resolve(realm.objects('Word')[randomvalue].name)
                })
                randint.then((word) => { this.props.navigation.navigate("SearchScreen", { searchword: word }) })
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
            //the components to return are all wrapped in a scroll view
            <ImageBackground
                source={require('./Reading.jpg')}
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
            >
                <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>

                    {this.decider()}

                    <View style={styles.searchicon}>
                        <TouchableOpacity activeOpacity={50} style={styles.iconsstyle} onPress={() => this.props.navigation.navigate('BookmarkScreen')}>
                            <Icon name="bookmark" size={25} color="white"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={50} style={styles.homedidvision}
                            onPress={() => this.props.navigation.navigate('BookmarkScreen')}>
                            <Text style={styles.hometext}>Bookmark</Text></TouchableOpacity>
                    </View>

                    <View style={styles.searchicon}>
                        <TouchableOpacity activeOpacity={50} style={styles.iconsstyle} onPress={() => this.dayword()}>
                            <Icon name="calendar" size={25} color="white"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={50} style={styles.homedidvision}
                            onPress={() => this.dayword()}>
                            <Text style={styles.hometext}>Word of the Day</Text></TouchableOpacity>
                    </View>

                    <View style={styles.searchicon}>
                        <TouchableOpacity activeOpacity={50} style={styles.iconsstyle} onPress={() => this.generateRandomWord()}>
                            <Icon name="random" size={25} color="white"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={50} style={styles.homedidvision}
                            onPress={() => this.generateRandomWord()}>
                            <Text style={styles.hometext}>Random Word</Text></TouchableOpacity>
                    </View>

                    <View style={styles.searchicon}>
                        <TouchableOpacity activeOpacity={50} style={styles.iconsstyle} onPress={() => this.props.navigation.navigate('HistoryScreen')}>
                            <Icon name="history" size={25} color="white"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={50} style={styles.homedidvision}
                            onPress={() => this.props.navigation.navigate('HistoryScreen')}>
                            <Text style={styles.hometext}>History</Text></TouchableOpacity>
                    </View>

                </ScrollView>
            </ImageBackground>

        )
    }
}

//StyleSheet to take care of all styling in this page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        //backgroundColor: "#ECF0F1"
    },
    searchicon: {
        flexDirection: 'row',
        paddingLeft: 5,
    },
    searchbox: {
        flexDirection: 'row',
        marginBottom: 8
    },
    inputstyle: {
        backgroundColor: "pink",
        width: Dimensions.get('window').width * (2 / 3),
        borderRadius: 50,
        fontSize: 17,
    },
    buttonview: {
        justifyContent: 'center',
        paddingLeft: 10,
        width: (Dimensions.get('window').width * (1 / 3)) * 0.8,
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
        height: Dimensions.get("window").height / 10,
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
