import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Listen from "../pages/Listen";
import Account from "../pages/Account";
import Found from "../pages/Found";
import HomeTabs from "./HomeTabs";
import IconFont from "../assets/iconfont";

const Tab = createBottomTabNavigator();

export default class BottomTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#f86442",
        }}
      >
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: "首页",
            tabBarIcon: ({ color, size }) => <IconFont name="icon-shouye" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: "我听",
            tabBarIcon: ({ color, size }) => <IconFont name="icon-wotingwokan" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: "发现",
            tabBarIcon: ({ color, size }) => <IconFont name="icon-faxian" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "账号",
            tabBarIcon: ({ color, size }) => <IconFont name="icon-wode" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}
