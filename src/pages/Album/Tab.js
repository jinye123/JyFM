import React from "react";
import { View, StyleSheet } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import List from "./List";
import Desc from "./Desc";

class Tab extends React.Component {
  state = {
    index: 1,
    routes: [
      {
        key: "desc",
        title: "简介",
      },
      {
        key: "album",
        title: "列表",
      },
    ],
  };

  renderScene = ({ route }) => {
    const { panRef, tabRef, nativeRef, onScrollDrag } = this.props;
    switch (route.key) {
      case "desc":
        return <Desc />;
      case "album":
        return <List
          onScrollDrag={onScrollDrag}
          nativeRef={nativeRef}
          tabRef={tabRef}
          panRef={panRef}
        />;
    }
  };

  renderTabBar = (props) => {
    return <TabBar
      {...props}
      scrollEnabled
      labelStyle={styles.labelStyle}
      tabStyle={styles.tabStyle}
      style={styles.tabbar}
      indicatorStyle={styles.indicatorStyle}
    />;
  };

  onIndexChange = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        onIndexChange={this.onIndexChange}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    width: 80,
  },
  labelStyle: {
    color: "#333",
  },
  tabbar: {
    backgroundColor: "#fff",
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    }),
  },
  indicatorStyle: {
    backgroundColor: "#eb6d48",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderColor: "#fff",
  },
});
export default Tab;
