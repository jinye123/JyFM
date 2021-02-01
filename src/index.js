import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Navigator from "@/navigator";
import store from "./config/dva";

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        <StatusBar
          translucent
          backgroundColor='transparent'
          barStyle='dark-content'
        />
      </Provider>
    );
  }
};
