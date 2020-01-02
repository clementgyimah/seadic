//importing all necessary modules
import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component{
    //creating a constructor to handle state changes
    constructor(props){
        super(props);
        this.state = {
            appbarcond: false,
            text: "",
        }
    }

    //setting the navigation options of the navigations that will be done in the app. Example: header title.
    static navigationOptions= {
        headerTitle: "Home",
        headerRight: <Icon.Button name="search" size={20} color="white" backgroundColor="blue"
        onPress={null}
        ></Icon.Button>,
        headerLeft: <Icon.Button name="align-justify" size={20} color="white" backgroundColor="blue"
        onPress={null}></Icon.Button>,
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleStyle:{
            fontWeight: 'bold',
            paddingLeft: 50,

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
            <Icon.Button name="search" size={30} color="blue" backgroundColor="white" onPress={() => this.setState({appbarcond: true})}></Icon.Button>
                <TouchableHighlight style={styles.homedidvision} onPress={() => this.setState({appbarcond: true})}><Text style={styles.hometext} >Search</Text></TouchableHighlight>
                </View>
            )
            
            }
        
        
    }

    //the part of the code to run first(on condition that there is no componentDidMount etc...) when this file is accessed by the app
    render(){
        return (
            //the components to return are all wrapped in a scroll view
            <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
                {this.decider()}

                <View style={styles.searchicon}>
                <Icon.Button name="calendar" size={30} color="blue" backgroundColor="white"
                onPress={() => this.props.navigation.navigate('DayWordScreen')}
                ></Icon.Button>
                <TouchableHighlight style={styles.homedidvision}
                onPress={() => this.props.navigation.navigate('DayWordScreen')}>
                <Text style={styles.hometext}>Word of the day</Text></TouchableHighlight>
                </View>

                <View style={styles.searchicon}>
                <Icon.Button name="history" size={30} color="blue" backgroundColor="white"
                onPress={() => this.props.navigation.navigate('HistoryScreen')}
                ></Icon.Button>
                <TouchableHighlight style={styles.homedidvision}
                onPress={() => this.props.navigation.navigate('HistoryScreen')}>
                <Text style={styles.hometext}>History</Text></TouchableHighlight>
                </View>

                <View style={styles.searchicon}>
                <Icon.Button name="bookmark" size={30} color="blue" backgroundColor="white"
                onPress={() => this.props.navigation.navigate('BookmarkScreen')}
                ></Icon.Button>
                <TouchableHighlight style={styles.homedidvision}
                onPress={() => this.props.navigation.navigate('BookmarkScreen')}>
                <Text style={styles.hometext}>Bookmark</Text></TouchableHighlight>
                </View>

                <View style={styles.searchicon}>
                <Icon.Button name="random" size={30} color="blue" backgroundColor="white"
                onPress={() => this.props.navigation.navigate('RandomWordScreen')}
                ></Icon.Button>
                <TouchableHighlight style={styles.homedidvision}
                 onPress={() => this.props.navigation.navigate('RandomWordScreen')}>
                <Text style={styles.hometext}>Random Word</Text></TouchableHighlight>
                </View>
                 </ScrollView>
        )
    }
}

//StyleSheet to take care of all styling in the app
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    searchicon:{
      flexDirection: 'row',
      paddingLeft: 5,
    },
    searchbox: {
        flexDirection: 'row',
    },
    inputstyle: {
        backgroundColor: "pink",
        width: Dimensions.get('window').width*(2/3),
        borderRadius: 50,
        fontSize: 17
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
    backgroundColor: "blue",
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
    },
    hometext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black"  
    },
})