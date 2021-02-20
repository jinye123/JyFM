import React from 'react';

import { View ,Text ,StyleSheet} from "react-native";
import {MaterialTopTabBar} from "@react-navigation/material-top-tabs";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from "./Touchable";

export default class TopTabBarWrapper extends React.Component{
  render() {
    const {props} = this
    return (
      <View style={styles.container}>
        <View style={styles.topTabBarView}>
          <MaterialTopTabBar {...props} style={styles.tabBar} />
          <Touchable style={styles.categoryBtn} onPress={()=>alert('点击分类')}>
            <Text>分类</Text>
          </Touchable>
        </View>
        <View style={styles.bottomBox}>
          <Touchable style={styles.searchBox}>
            <Text style={{color:'#666'}}>搜索课程</Text>
          </Touchable>
          <Touchable style={styles.historyBox}>
            <Text>历史记录</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:getStatusBarHeight(),
    backgroundColor:'#ffffff',
  },
  topTabBarView:{
    flexDirection:'row',
    alignItems:'center',
  },
  tabBar:{
    flex:1,
    elevation:0,
  },
  categoryBtn:{
    paddingHorizontal:10,
    borderLeftWidth:StyleSheet.hairlineWidth,
    borderLeftColor:'#ccc'
  },
  bottomBox:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal:10
  },
  searchBox:{
    flex:1,
    height:33,
    paddingHorizontal: 10,
    backgroundColor:'#f7f8fa',
    borderRadius:15,
    justifyContent:'center',
  },
  historyBox:{
    paddingHorizontal:10
  }
});

