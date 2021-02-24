import React from "react";
import { FlatList ,StyleSheet} from "react-native";
import Item from "./Item";
import { connect } from "react-redux";

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
    const { list } = this.props;
    return (
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id + ""}
        data={list}
        renderItem={this.renderItem}
      >
      </FlatList>
    );
  }
}

export default connect(mapStateToProps)(Album);

const styles=StyleSheet.create({
  list:{
    flex:1,
    backgroundColor:'#fff',
  }
})
