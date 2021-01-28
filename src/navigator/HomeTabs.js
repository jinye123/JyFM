import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../pages/Home";

const Tab = createMaterialTopTabNavigator();

export default class HomeTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        lazy
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            width: 80,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            borderRadius: 2,
            marginLeft: 30,
            backgroundColor: "#f86442",
          },
          activeTintColor: "#f86442",
          inactiveTintColor: "#333333",
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: "推荐",
        }} />
      </Tab.Navigator>
    );
  }
}
