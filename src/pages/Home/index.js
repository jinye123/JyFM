import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Carrousel from "./Carrousel";

const mapStateToProps = ({ home, loading }) => ({
  banners: home.banners,
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
    const { banners } = this.props;
    return (
      <View>
        <Carrousel bannerList={banners} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Index);
