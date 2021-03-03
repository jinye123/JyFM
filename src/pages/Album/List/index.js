import React from "react";
import { StyleSheet ,Animated} from "react-native";
import Item from "./Item";
import { connect } from "react-redux";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

const mapStateToProps = ({ album }) => {
  return {
    list: album.stepInfoPage.content,
  };
};

class Album extends React.Component {

  onPress = (data) => {
    console.log(data, "***********");
  };

  renderItem = ({ item, index }) => {
    return <Item data={item} index={index} onPress={this.onPress} />;
  };

  render() {
    const { list ,panRef ,tabRef,nativeRef,onScrollDrag} = this.props;
    return (
      <NativeViewGestureHandler
        simultaneousHandlers={panRef}
        ref={nativeRef}
        waitFor={tabRef}
      >
        <Animated.FlatList
          style={styles.list}
          bounces={false}
          keyExtractor={(item) => item.id + ""}
          data={list}
          renderItem={this.renderItem}
          onScrollBeginDrag={onScrollDrag}
          onScrollEndDrag={onScrollDrag}
        >
        </Animated.FlatList>
      </NativeViewGestureHandler>
    );
  }
}

export default connect(mapStateToProps)(Album);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
