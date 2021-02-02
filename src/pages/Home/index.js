import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Carrousel from "./Carrousel";

const mapStateToProps = ({ home, loading }) => ({
  bannersList: home.bannersList,
  loading: loading.effects["home/getHomeData"],
});

class Index extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "home/getHomeData",
    });
  }

  render() {
    const { bannersList } = this.props;
    console.log(bannersList);
    return (
      <View>
        <Carrousel bannersList={bannersList} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Index);
