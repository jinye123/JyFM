import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import HeaderRightBtn from "./HeaderRightBtn";
import Touchable from "../../components/Touchable";
import { viewportWidth } from "../../utils";
import { DragSortableView } from "react-native-drag-sort";
import _ from "lodash";

const mapStateToProps = ({ category }) => ({
  myCategories: category.myCategories,
  categories: category.categories,
  isEdit: category.isEdit,
});

const parentWidth = viewportWidth - 10;
const itemWidth = parentWidth / 4;

class Category extends React.Component {
  constructor(props) {
    super(props);
    props.navigation.setOptions({
      headerRight: () => <HeaderRightBtn onSubmit={this.onSubmit} />,
    });
    this.state = {
      myCategories: this.props.myCategories,
    };
  }

  onLongPress = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "category/setState",
      payload: {
        isEdit: true,
      },
    });
  };

  onPress = (item, index, selected, isMy) => {
    const { isEdit } = this.props;
    const { myCategories } = this.state;
    if (!isEdit || (isMy && index <= 1)) return;
    if (selected) {
      this.setState({
        myCategories: myCategories.filter(subItem => subItem.id !== item.id),
      });
    } else {
      this.setState({
        myCategories: myCategories.concat(item),
      });
    }
  };

  onSubmit = () => {
    const { dispatch ,navigation ,isEdit} = this.props;
    const { myCategories } = this.state;
    dispatch({
      type: "category/toggle",
      payload: {
        myCategories: myCategories,
      },
    });
    if(isEdit){
      navigation.goBack();
    }
  };

  _renderItem = (item, index, selected, isMy = false) => {
    const { isEdit } = this.props;
    if (isMy) {
      return (
        <View style={styles.itemWrapper}>
          <View style={styles.item}>
            <Text>{item.name}</Text>
            {
              isEdit && (!isMy || index > 1) && (
                <View style={styles.icon}>
                  <Text style={styles.iconText}>{selected ? "-" : "+"}</Text>
                </View>
              )
            }
          </View>
        </View>
      );
    } else {
      return (
        <Touchable
          onLongPress={this.onLongPress}
          onPress={() => this.onPress(item, index, selected, isMy = false)}
        >
          <View style={styles.itemWrapper}>
            <View style={styles.item}>
              <Text>{item.name}</Text>
              {
                isEdit && (
                  <View style={styles.icon}>
                    <Text style={styles.iconText}>{selected ? "-" : "+"}</Text>
                  </View>
                )
              }
            </View>
          </View>
        </Touchable>
      );
    }
  };

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: "category/setState",
      payload: {
        isEdit: false,
      },
    });
  }

  render() {
    const { categories, isEdit } = this.props;
    const { myCategories } = this.state;
    const classifyGroup = _.groupBy(categories, (item) => item.classify);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.classifyView}>
          <DragSortableView
            dataSource={myCategories}
            sortable={isEdit}
            fixedItems={[0,1]}
            parentWidth={parentWidth}
            childrenWidth={itemWidth}
            childrenHeight={48}
            marginChildrenTop={5}
            keyExtractor={(item, index) => item.id}
            onDataChange={(data) => {
              this.setState({
                myCategories: data,
              });
            }}
            onClickItem={(data, item, index) => {
              return this.onPress(item, index, true, true);
            }}
            renderItem={(item, index) => {
              return this._renderItem(item, index, true, true);
            }} />
        </View>
        <View>
          {Object.keys(classifyGroup).map(classify => {
            return (
              <View key={classify}>
                <Text style={styles.classifyName}>{classify}</Text>
                <View style={styles.classifyView}>
                  {classifyGroup[classify].map((item, index) => {
                    if (myCategories.find(subItem => subItem.id === item.id)) {
                      return null;
                    } else {
                      return this._renderItem(item, index, false);
                    }
                  })}
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
  icon: {
    position: "absolute",
    top: -5,
    right: -5,
    height: 16,
    width: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f86442",
    borderRadius: 8,
  },
  iconText: {
    color: "#fff",
    lineHeight: 15,
  },
});
