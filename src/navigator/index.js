import React from "react";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import Detail from "../pages/Detail";
import Category from "../pages/Category";
import BottomTabs from "../navigator/BottomTabs";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeTabs";
  switch (routeName) {
    case "HomeTabs":
      return "首页";
    case "Listen":
      return "我听";
    case "Found":
      return "发现";
    case "Account":
      return "我的";
    default:
      return "首页";
  }
}

export default class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            ...Platform.select({
              android:{
                headerStatusBarHeight: Statusbar.currentHeight,
              }
            }),
            headerBackTitle:'返回',
            headerTintColor:'#333',
            headerStyle: {},
          }}
        >
          <Stack.Screen
            name="Index"
            component={BottomTabs}
            options={({ route }) => {
              const routName = getHeaderTitle(route);
              if (routName === "首页") {
                return {
                  headerTitle: "",
                  headerTransparent: true,
                };
              } else {
                return {
                  headerTitle: routName,
                };
              }
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              headerTitle: "分类",
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: "详情",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
