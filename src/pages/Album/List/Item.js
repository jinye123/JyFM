import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Touchable from "../../../components/Touchable";

export default class Item extends React.Component {
  onPress = () => {
    const { data, onPress } = this.props;
    if (onPress) {
      onPress(data);
    }
  };

  render() {
    const { data } = this.props;
    return (
      <Touchable style={styles.item} onPress={this.onPress}>
        <View style={styles.content}>
          <Text style={styles.tag}>{data["type"] ? "音频" : "视频"}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.time}>{data.duration}分钟</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomColor: "#e3e3e3",
  },
  tag: {
    fontSize: 10,
    height: 16,
    width: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#969799",
    textAlign: "center",
    lineHeight: 14,
    borderRadius: 4,
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    paddingHorizontal: 10,
    lineHeight: 18,
  },
  currentStep: {
    color: "#DCAA53",
  },
  time: {
    color: "#666",
    fontSize: 11,
    width: 45,
    textAlign: "right",
  },
});
