import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import Carrousel from './Carrousel'

const mapStateToProps = ({ home, loading }) => ({
  num: home.num,
  loading: loading.effects["home/asyncAdd"],
});

class Index extends React.Component {
  addHandle = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "home/add",
      payload: {
        num: 10,
      },
    });
  };
  addHandle2 = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "home/asyncAdd",
      payload: {
        num: 10,
      },
    });
  };

  render() {
    const { navigation, loading } = this.props;
    return (
      <View>
        <Text>
          Home{this.props.num}
        </Text>
        <Button
          title="去详情页"
          onPress={() => navigation.navigate("Detail")}
        />
        <Button
          title="加"
          onPress={this.addHandle}
        />
        <Button
          title="异步加"
          onPress={this.addHandle2}
        />
        <Carrousel />
        <Text>{loading ? "正在努力计算中" : ""}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Index);
