import React from "react";
import Carousel, { ParallaxImage, Pagination } from "react-native-snap-carousel";
import { View, StyleSheet } from "react-native";
import { hp, wp, viewportWidth } from "../../utils";

const sliderWidth = viewportWidth;
const itemHeight = hp(26);
const itemWidth = wp(90) + wp(2) * 2;
export default class SnapCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  _renderItem = ({ item, index }, parallaxProps) => {
    return <ParallaxImage
      style={styles.image}
      containerStyle={styles.imageContainer}
      source={{ uri: item['purl'] }}
      parallaxFactor={0.8}
      showSpinner
      spinnerColor="rgba(0,0,0,0.25)"
      {...parallaxProps}
    />;
  };

  get pagination() {
    const { activeSlide } = this.state;
    const { bannerList } = this.props;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={bannerList.length}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotContainerStyle}
          dotStyle={styles.dotStyle}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  }

  render() {
    const {bannerList} = this.props
    return (
      <View style={{position: 'relative'}}>
        <Carousel
          data={bannerList}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          hasParallaxImages
          loop
          autoplay
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: itemHeight,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  paginationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width:'100%',
    bottom: 20,
  },
  paginationContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.75)",
  },
  dotContainerStyle: {
    marginHorizontal: 6,
  },
});
