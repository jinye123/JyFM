import React from "react";
import { View, StyleSheet, Image, Text, ScrollView, FlatList } from "react-native";
import { connect } from "react-redux";
import Carrousel from "./Carrousel";
import Guess from "./Guess";
import HomeList from "./HomeList";

const mapStateToProps = ({ home, loading }) => ({
  bannersList: home.bannersList,
  trainingCamp: home.trainingCamp,
  jhList: home.jhList,
  gkList: home.gkList,
  loading: loading.effects["home/getHomeData"],
});

class Index extends React.Component {
  state = {
    categoryList: [
      {
        title: "精品课程",
        url: "/card/cardList",
        source: require("./img/1.png"),
      },
      {
        title: "直播课程",
        url: "/liveTv",
        source: require("./img/2.png"),
      },
      {
        title: "训练营",
        url: "/campList",
        source: require("./img/3.png"),
      },
      {
        title: "线下精华",
        url: "/offlineCourse",
        source: require("./img/4.png"),
      },
    ],
    refreshing: false,
  };

  onPressItem = (item) => {
    console.log(item);
    const {navigation} = this.props;
    navigation.navigate('Album',{item})
  };

  onRefresh = () => {
    const { dispatch } = this.props;
    this.setState({ refreshing: true });
    dispatch({
      type: "home/getHomeData",
      callback: () => {
        this.setState({ refreshing: false });
      },
    });
  };

  get header() {
    const { bannersList, trainingCamp, jhList, gkList } = this.props;
    return (
      <View>
        <Carrousel bannersList={bannersList} />
        <View style={styles.category}>
          {
            this.state.categoryList.map((item, index) => {
              return (
                <View key={index} style={styles.categoryItem}>
                  <Image style={styles.categoryImage} source={item["source"]} />
                  <Text>{item["title"]}</Text>
                </View>
              );
            })
          }
        </View>
        {
          trainingCamp && (
            <View style={styles.campContainer}>
              <View style={styles.campTitleBox}>
                <Text style={styles.campTitle}>{trainingCamp["navigation"]["title"]}</Text>
              </View>
              <View style={styles.campImageBox}>
                <Image style={styles.campImage} source={{ uri: trainingCamp["result"]["purl"] }} />
              </View>
            </View>
          )
        }
        <Guess jhList={jhList} onPressItem={(item) => this.onPressItem(item)} />
        <HomeList listObj={gkList} onPressItem={(item) => this.onPressItem(item)} />
      </View>
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "home/getHomeData",
    });
  }

  render() {
    const { refreshing } = this.state;
    return (
      <FlatList
        ListHeaderComponent={this.header}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
      />
    );
  }
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    height: 97,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  categoryImage: {
    width: 46,
    height: 46,
  },
  campContainer: {
    marginTop: 8,
    backgroundColor: "#ffffff",
    height: 210,
  },
  campTitleBox: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  campTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333",
  },
  campImageBox: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  campImage: {
    flex: 1,
    borderRadius: 5,
  },
});
export default connect(mapStateToProps)(Index);
