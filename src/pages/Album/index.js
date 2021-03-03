import React from "react";
import { HeaderHeightContext } from "@react-navigation/stack";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { connect } from "react-redux";
import { BlurView } from "@react-native-community/blur";
import Tab from "./Tab";
import { viewportHeight } from "../../utils";
import { PanGestureHandler, State, TapGestureHandler } from "react-native-gesture-handler";

const mapStateToProps = ({ album }) => {
  return {
    purl: album.purl,
    count: album.count,
    title: album.title,
    subTitle: album.subTitle,
  };
};

const USE_NATIVE_DRIVER = true;

class Album extends React.Component {
  tabRef = React.createRef();
  panRef = React.createRef();
  nativeRef = React.createRef();
  translationYValue = 0;
  lastScrollYValue = 0;
  lastScrollY = new Animated.Value(0);
  reverseLastScrollY = Animated.multiply(new Animated.Value(-1), this.lastScrollY);
  translationY = new Animated.Value(0);
  translationYOffset = new Animated.Value(0);
  translateY = Animated.add(Animated.add(this.translationY, this.translationYOffset), this.reverseLastScrollY);

  componentDidMount() {
    const { dispatch, route, navigation } = this.props;
    const { id } = route.params.item;
    dispatch({
      type: "album/fetchAlbum",
      payload: {
        id,
        data: {
          size: 30,
        },
      },
    });

    navigation.setParams({
      opacity: this.translateY.interpolate({
        inputRange: [-280, 0],
        outputRange: [1, 0],
      }),
    });
  }

  onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: this.translationY } }],
    { useNativeDriver: USE_NATIVE_DRIVER },
  );

  onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let { translationY } = nativeEvent;
      translationY -= this.lastScrollYValue;
      this.translationYOffset.extractOffset();
      this.translationYOffset.setValue(translationY);
      this.translationYOffset.flattenOffset();
      this.translationY.setValue(0);
      this.translationYValue += translationY;
      let maxDeltaY = 280 - this.translationYValue;
      if (this.translationYValue <= -280) {
        this.translationYValue = -280;
        Animated.timing(this.translationYOffset, {
          toValue: -280,
          useNativeDriver: USE_NATIVE_DRIVER,
        }).start();
        maxDeltaY = 0;
      } else if (this.translationYValue >= 0) {
        this.translationYValue = 0;
        Animated.timing(this.translationYOffset, {
          toValue: 0,
          useNativeDriver: USE_NATIVE_DRIVER,
        }).start();
        maxDeltaY = 280;
      }
      if (this.tabRef.current) {
        this.tabRef.current.setNativeProps({
          maxDeltaY,
        });
      }
    }
  };

  onScrollDrag = Animated.event(
    [{ nativeEvent: { contentOffset: { y: this.lastScrollY } } }],
    {
      useNativeDriver: USE_NATIVE_DRIVER,
      listener: ({ nativeEvent }) => {
        this.lastScrollYValue = nativeEvent.contentOffset.y;
      },
    },
  );

  renderHeader = () => {
    const { purl } = this.props;
    return (
      <HeaderHeightContext.Consumer>
        {(headerHeight) => (
          <View style={[styles.header, { paddingTop: headerHeight }]}>
            <Image source={{ uri: purl }} style={styles.bgPoster} />
            <BlurView blurType="light" style={StyleSheet.absoluteFillObject} />
            <Image source={{ uri: purl }} style={styles.poster} />
          </View>
        )}
      </HeaderHeightContext.Consumer>
    );
  };

  render() {
    const { count, title, subTitle } = this.props;
    return (
      <TapGestureHandler
        ref={this.tabRef}
        maxDeltaY={280}
      >
        <View style={{ flex: 1 }}>
          <PanGestureHandler
            ref={this.panRef}
            simultaneousHandlers={[this.tabRef, this.nativeRef]}
            onHandlerStateChange={this.onHandlerStateChange}
            onGestureEvent={this.onGestureEvent}>
            <Animated.View style={[
              {
                transform: [
                  {
                    translateY: this.translateY.interpolate({
                      inputRange: [-280, 0],
                      outputRange: [-280, 0],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
              { flex: 1 },
            ]}>
              {this.renderHeader()}
              <View style={styles.desc}>
                <View style={styles.descTop}>
                  <Text numberOfLines={1} style={styles.title}>{title}</Text>
                  <Text numberOfLines={2} style={styles.subTitle}>{subTitle}</Text>
                </View>
                <View style={styles.descBottom}>
                  <Text style={styles.numBox}>{count}人一起学习</Text>
                  <Text style={styles.numBox}>分享</Text>
                </View>
              </View>
              <View style={{ height: viewportHeight - 180 }}>
                <Tab
                  onScrollDrag={this.onScrollDrag}
                  nativeRef={this.nativeRef}
                  panRef={this.panRef}
                  tabRef={this.tabRef}
                />
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </TapGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  poster: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  bgPoster: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#eee",
  },
  desc: {
    height: 100,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  descTop: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: "#222222",
    fontWeight: "700",
  },
  subTitle: {
    color: "#646566",
    fontSize: 12,
    lineHeight: 20,
  },
  descBottom: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numBox: {
    fontSize: 12,
    color: "#666666",
  },
});
export default connect(mapStateToProps)(Album);
