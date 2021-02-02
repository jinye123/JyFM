import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import IconFont from "../../assets/iconfont";
import Touchable from "../../components/Touchable";

export default class SnapCarousel extends React.Component {

  _renderItem = ({ item }) => {
    return (
      <Touchable onPress={() => alert("点击")} style={styles.guessItem}>
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
        <View style={styles.guessHeaderBox}>
          <Text style={styles.guessHeader}>{jhList["name"]}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.guessHeaderLink}>查看更多</Text><IconFont name="icon-chakangengduo" size="12"
                                                                      color="#999999" />
          </View>
        </View>
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
  guessHeaderBox: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  guessHeader: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333",
  },
  guessHeaderLink: {
    fontSize: 12,
    color: "#999999",
    alignItems: "center",
    justifyContent: "center",
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
