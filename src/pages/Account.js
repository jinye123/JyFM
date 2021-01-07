import React from 'react'
import { View, Text, Button } from "react-native";

export default class Account extends React.Component{
  render() {
    const {navigation} = this.props
    return (
      <View>
        <Text>
          Detail
          <Button
            title="跳 转"
            onPress={() => navigation.navigate('Home')}
          />
        </Text>
      </View>
    );
  }
}
