//importing all necessary modules
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './components/Home';
import SearchScreen from './components/SearchScreen'
import BookmarkScreen from './components/BookmarkScreen';
import DayWordScreen from './components/DayWordScreen';
import DropdownScreen from './components/DropdownScreen';
import HistoryScreen from './components/HistoryScreen';


//creating a stack navigator and setting all screens as its children
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  SearchScreen: {
    screen: SearchScreen
  },
  BookmarkScreen: {
    screen: BookmarkScreen
  },
  DayWordScreen: {
    screen: DayWordScreen
  },
  DropdownScreen: {
    screen: DropdownScreen
  },
  HistoryScreen: {
    screen: HistoryScreen
  },
},
//setting the first screen to display as Home from createStackNavigator
{
  initialRouteName: 'Home'
});

//creating a drawer navigator and using AppNavigator(which creates stack navigator) as its child
const DrawerNavigator = createDrawerNavigator({
  DrawerHome:{
    screen: AppNavigator
  }
},
//setting the first screen to display as DrawerHome from the createDrawerNavigator
{
initialRouteName: 'DrawerHome'
}
)

//creating an AppContainer to handle the navigations between different screens and using drawer navigator as the first navigation option
const AppContainer = createAppContainer(DrawerNavigator);

//exporting the AppContainer as default so that, if another file accesses this particular file, it will return AppContainer and its parameters by default
export default class App extends Component{
  render(){
    return <AppContainer />
  }
}



