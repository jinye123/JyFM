import React from 'react';
import {View,Text} from 'react-native';
import {test} from "@/utils";

export default class App extends React.Component{
  render() {
    const a=test()
    return (
      <View>
        <Text>App{a}</Text>
      </View>
    );
  }
}
