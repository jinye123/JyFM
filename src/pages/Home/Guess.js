import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import Touchable from "../../components/Touchable";
import ListHeader from '../../components/ListHeader'

export default class SnapCarousel extends React.Component {

  onPress = (item) => {
    const {onPressItem} = this.props
    onPressItem(item);
  };

  _renderItem = ({ item }) => {
    return (
      <Touchable onPress={() => this.onPress(item)} style={styles.guessItem}>
        <Image style={styles.guessImage} source={{ uri: item["purl"] }} />
        <Text numberOfLines={1} style={styles.guessTitle}>{item["title"]}</Text>
        <Text style={styles.guessSubTitle}>{item["count"]}人一起学习</Text>
        <Text style={styles.guessPrice}>￥{item["price"]}</Text>
      </Touchable>
    );
  };

  render() {
    const { jhList } = this.props;
    return (
      <View style={styles.guessListContainer}>
        <ListHeader title={jhList["name"]} />
        <View style={styles.guessList}>
          <FlatList
            numColumns={2}
            data={jhList["list"]}
            renderItem={this._renderItem}
            keyExtractor={item => item.id + ""}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  guessListContainer: {
    marginTop: 8,
    backgroundColor: "#ffffff",
  },
  guessList: {
    height: "auto",
  },
  guessItem: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  guessImage: {
    width: "100%",
    height: 126,
    borderRadius: 5,
    marginBottom: 10,
  },
  guessTitle: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold",
  },
  guessSubTitle: {
    color: "#999999",
    fontSize: 12,
    marginVertical: 10,
  },
  guessPrice: {
    fontSize: 14,
    color: "#FB4B4A",
  },
});
