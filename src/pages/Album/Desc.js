import React from "react";
import { View, StyleSheet, Image ,Dimensions,ScrollView} from "react-native";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
import { viewportWidth } from "../../utils";

const mapStateToProps = ({ album }) => {
  return {
    describe: album.describe,
  };
};

class Desc extends React.Component {
  renderNode(node, index, siblings, parent, defaultRenderer) {

    if (node.name === "img") {
      console.log(node,'*******8888******');
      const { src } = node.attribs;
      return (
        <View style={{width:viewportWidth - 10}}>
          <Image
            style={{
              width: '100%',
              height: 5200,

            }}
            resizeMode='stretch'
            source={{ uri: src }} />
        </View>
      )
    }
  }

  render() {
    const { describe } = this.props;
    return (
      <View style={styles.content}>
        <ScrollView>
          <HTMLView
            value={describe}
            renderNode={this.renderNode}
            // stylesheet={styles}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
});
export default connect(mapStateToProps)(Desc);
