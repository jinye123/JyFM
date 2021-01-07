import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Listen from "../pages/Listen";
import Account from "../pages/Account";
import Found from "../pages/Found";
import Detail from "../pages/Detail";

const Tab = createBottomTabNavigator();

export default class BottomTabs extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor:'#f86442'
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel:'首页'
            }}
            component={Home}
          />
          <Tab.Screen
            name="Listen"
            options={{
              tabBarLabel:'我听'
            }}
            component={Listen}
          />
          <Tab.Screen
            name="Found"
            options={{
              tabBarLabel:'发现'
            }}
            component={Found}
          />
          <Tab.Screen
            name="Account"
            options={{
              tabBarLabel:'我的'
            }}
            component={Account}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
