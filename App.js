//importing all necessary modules
import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import Home from "./components/Home";
import SearchScreen from "./components/SearchScreen";
import BookmarkScreen from "./components/BookmarkScreen";
import HistoryScreen from "./components/HistoryScreen";
import DrawerPage from "./components/DrawerPage";
import Help from "./components/Help";
import About from "./components/About";

//creating a stack navigator and setting all screens as its children
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    SearchScreen: {
      screen: SearchScreen
    },
    BookmarkScreen: {
      screen: BookmarkScreen
    },
    HistoryScreen: {
      screen: HistoryScreen
    },
    HelpScreen: {
      screen: Help
    },
    AboutScreen: {
      screen: About
    }
  },
  //setting the first screen to display as Home from createStackNavigator
  {
    initialRouteName: "Home"
  }
);

//creating a drawer navigator and using AppNavigator(which creates stack navigator) as its child
const DrawerNavigator = createDrawerNavigator(
  {
    DrawerHome: {
      screen: AppNavigator
    }
  },
  //setting other properties of the Drawer like first screen to display and the content of the Drawer
  {
    initialRouteName: "DrawerHome",
    contentComponent: DrawerPage,
    drawerType: "back"
    //hideStatusBar: true,
  }
);

//creating an AppContainer to handle the navigations between different screens and using drawer navigator as the first navigation option
const AppContainer = createAppContainer(DrawerNavigator);

//exporting the AppContainer as default so that, if another file accesses this particular file, it will return AppContainer and its parameters by default
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
