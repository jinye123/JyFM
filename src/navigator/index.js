import React from "react";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import Album from "../pages/Album";
import Category from "../pages/Category";
import BottomTabs from "../navigator/BottomTabs";
import {StyleSheet,Animated,StatusBar} from 'react-native'

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

function getAlbumOptions({route}){
  return{
    headerTitle: route.params.item.title,
    headerTransparent:true,
    headerTitleStyle:{
      opacity:0
    },
    headerBackground: () => (
      <Animated.View style={styles.headerBackGround} />
    ),
  }
}

const styles=StyleSheet.create({
  headerBackGround:{
    flex:1,
    backgroundColor:'#fff',
    opacity: 0
  }
})

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
                headerStatusBarHeight: StatusBar.currentHeight,
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
            name="Album"
            component={Album}
            options={getAlbumOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
