import React from 'react'
import {View,Text,Button} from 'react-native'

export default class Home extends React.Component{
  render() {
    const {navigation} = this.props
    return (
      <View>
        <Text>
          Home
          <Button
            title="去详情页"
            onPress={() => navigation.navigate('Detail')}
          />
        </Text>
      </View>
    );
  }
}
