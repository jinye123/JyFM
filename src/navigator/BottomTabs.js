import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Listen from "../pages/Listen";
import Account from "../pages/Account";
import Found from "../pages/Found";

const Tab = createBottomTabNavigator();

export default class BottomTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor:'#f86442'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
        />
        <Tab.Screen
          name="Found"
          component={Found}
        />
        <Tab.Screen
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    );
  }
}
