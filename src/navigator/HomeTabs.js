import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {connect} from 'react-redux';
import Index from "../pages/Home/index";
import TopTabBarWrapper from "../components/TopTabBarWrapper";

const Tab = createMaterialTopTabNavigator();
const mapStateToProps = ({ category }) => ({
  myCategories: category.myCategories,
});


class HomeTabs extends React.Component {
  _renderTabBar = (props) => {
    return <TopTabBarWrapper {...props} />;
  };

  renderScreen=(item)=>{
    return(
      <Tab.Screen key={item.id} name={item.id} component={Index} options={{
        tabBarLabel: item.name,
      }} />
    )
  }

  render() {
    const {myCategories} = this.props
    return (
      <Tab.Navigator
        lazy
        tabBar={this._renderTabBar}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            width: 80,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            borderRadius: 2,
            marginLeft: 30,
            backgroundColor: "#f86442",
          },
          activeTintColor: "#f86442",
          inactiveTintColor: "#333333",
        }}
      >
        {myCategories.map(this.renderScreen)}
      </Tab.Navigator>
    );
  }
}


export default connect(mapStateToProps)(HomeTabs)
