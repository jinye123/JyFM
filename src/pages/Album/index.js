import React from "react";
import { HeaderHeightContext } from "@react-navigation/stack";
import { View, Text, Image ,StyleSheet,Animated} from "react-native";
import { connect } from "react-redux";
import { BlurView } from "@react-native-community/blur";
import Tab from './Tab';
const mapStateToProps = ({ album }) => {
  return {
    purl:album.purl,
    count:album.count,
    title:album.title,
    subTitle:album.subTitle,
  };
};

class Album extends React.Component {

  translateY= new Animated.Value(0)
  componentDidMount() {
    const { dispatch, route } = this.props;
    const { id } = route.params.item;
    dispatch({
      type: "album/fetchAlbum",
      payload: {
        id,
      },
    });
    Animated.timing(this.translateY,{
      toValue:-280,
      duration:3000
    }).start()
  }

  renderHeader=()=>{
    const { purl ,count,title,subTitle} = this.props;
    return (
      <HeaderHeightContext.Consumer>
        {(headerHeight) => (
          <View style={[styles.header,{ paddingTop: headerHeight }]}>
            <Image source={{ uri: purl }} style={styles.bgPoster} />
            <BlurView blurType="light" style={StyleSheet.absoluteFillObject} />
            <Image source={{ uri: purl }} style={styles.poster} />
          </View>
        )}
      </HeaderHeightContext.Consumer>
    )
  }

  render() {
    const { count,title,subTitle} = this.props;
    return (
      <Animated.View style={[{
        opacity:this.translateY.interpolate({
          inputRange:[-280,0],
          outputRange:[1,0]
        }),
        backgroundColor:this.translateY.interpolate({
          inputRange:[-280,0],
          outputRange:['red','#fff']
        }),transform:[{translateY:this.translateY}]},{flex:1,padding:10}]}>
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
        <Tab />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:360,
    alignItems: 'center',
    justifyContent: 'center'
  },
  poster: {
    width:150,
    height: 150,
    borderRadius:75,
  },
  bgPoster:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee'
  },
  desc:{
    height:100,
    backgroundColor:'#fff',
    paddingVertical:8,
    paddingHorizontal:16,
  },
  descTop:{
    flex:1,
  },
  title:{
    fontSize: 16,
    color: '#222222',
    fontWeight:'700',
  },
  subTitle: {
    color:'#646566',
    fontSize:12,
    lineHeight:20,
  },
  descBottom:{
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  numBox:{
    fontSize: 12,
    color: '#666666'
  }
});
export default connect(mapStateToProps)(Album);
