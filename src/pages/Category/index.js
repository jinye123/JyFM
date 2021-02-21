import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { viewportWidth } from "../../utils";
import _ from "lodash";

const mapStateToProps = ({ category }) => ({
  myCategories: category.myCategories,
  categories: category.categories,
});

const parentWidth = viewportWidth - 10;
const itemWidth = parentWidth / 4;

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCategories: this.props.myCategories,
    };
  }

  _renderItem = (item) => {
    return (
      <View key={item.id} style={styles.itemWrapper}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { categories } = this.props;
    const { myCategories } = this.state;
    const classifyGroup = _.groupBy(categories, (item) => item.classify);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.classifyView}>
          {myCategories.map(this._renderItem)}
        </View>
        <View>
          {Object.keys(classifyGroup).map(classify => {
            return (
              <View key={classify}>
                <Text style={styles.classifyName}>{classify}</Text>
                <View style={styles.classifyView}>
                  {classifyGroup[classify].map(this._renderItem)}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Category);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6f6",
  },
  classifyName: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 8,
    marginLeft: 10,
  },
  classifyView: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  itemWrapper: {
    width: itemWidth,
    height: 48,
  },
  item: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
