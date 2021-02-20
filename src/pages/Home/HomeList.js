import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Touchable from "../../components/Touchable";
import ListHeader from "../../components/ListHeader";

export default class HomeList extends React.Component {

  onPress = (item) => {
    const {onPressItem} = this.props
    onPressItem(item);
  };

  _renderItem = (list = []) => list.map((item, index) => {
    return (
      <Touchable onPress={() => this.onPress(item)} style={styles.listItem} key={item.id}>
        <Image style={styles.listImage} source={{ uri: item["purl"] }} />
        <View style={styles.rightBox}>
          <Text numberOfLines={2} style={styles.listTitle}>{item["title"]}</Text>
          <View style={styles.rightBottomBox}>
            <Text style={styles.listSubTitle}>{item["count"]}人一起学习</Text>
            <Text style={styles.listPrice}>￥{item["price"]}</Text>
          </View>
        </View>
      </Touchable>
    );
  });

  render() {
    const { listObj } = this.props;
    return (
      <View style={styles.listContainer}>
        <ListHeader title={listObj["name"]} />
        <View style={styles.list}>
          {this._renderItem(listObj.list)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 8,
    backgroundColor: "#ffffff",
  },
  list: {
    height: "auto",
  },
  listItem: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  listImage: {
    width: 120,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
  },
  rightBox: {
    flex: 1,
    justifyContent: "space-between",
  },
  listTitle: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold",
  },
  rightBottomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listSubTitle: {
    color: "#999999",
    fontSize: 12,
  },
  listPrice: {
    fontSize: 14,
    color: "#FB4B4A",
  },
});
