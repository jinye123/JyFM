import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
const Stack = createStackNavigator()
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";

export default class Navigator extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerStyleInterpolator:HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled:true,
            gestureDirection:'horizontal'
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle:'首页'
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle:'详情'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
