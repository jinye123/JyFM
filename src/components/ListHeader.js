import React from 'react';

import { Text, View ,StyleSheet} from "react-native";
import IconFont from "../assets/iconfont";

export default class ListHeader extends React.Component{
  render() {
    const {title} = this.props
    return (
      <View style={styles.listHeaderBox}>
        <Text style={styles.listHeader}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.listsHeaderLink}>查看更多</Text>
          <IconFont name="icon-chakangengduo" size="12" color="#999999" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHeaderBox: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listHeader: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333",
  },
  listsHeaderLink: {
    fontSize: 12,
    color: "#999999",
    alignItems: "center",
    justifyContent: "center",
  }
});

