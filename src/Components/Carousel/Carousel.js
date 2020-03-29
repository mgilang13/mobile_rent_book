import React from 'react';
import {connect} from 'react-redux';

import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {getAllGenre} from '../../Redux/actions/genre';
import {TouchableOpacity} from 'react-native-gesture-handler';

// function Item({genreTitle, bgColor}) {
//   return (
//     <View style={styles.item}>
//       <Text style={[styles.genreContainer, {backgroundColor: bgColor}]}>
//         {genreTitle}
//       </Text>
//     </View>
//   );
// }

class Carousel extends React.Component {
  state = {
    listGenre: [],
  };
  renderGenreData = async () => {
    await this.props.dispatch(getAllGenre());

    this.setState({
      listGenre: this.props.genre.genre.genreData.data,
    });
  };
  componentDidMount = () => {
    this.renderGenreData();
  };

  renderGenreItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        genreName={item.name}
        onPress={() => this.props.onPress(item.id)}>
        <View style={[styles.item, {backgroundColor: item.bgcolor}]}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {listGenre} = this.state;
    console.log('genreData', listGenre);

    return (
      <View style={styles.carouselContainer}>
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            data={listGenre}
            renderItem={this.renderGenreItem}
            keyExtractor={item => item.id}></FlatList>
        </SafeAreaView>
      </View>
    );
  }
}

// export default Carousel;

const mapStateToProps = genre => {
  return {
    genre,
  };
};

export default connect(mapStateToProps)(Carousel);

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  //   marginLeft: 30,
  //   alignItems: 'center',
  // },
  // carouselContainer: {
  //   backgroundColor: 'white',
  //   padding: 30,
  // },
  // genreContainer: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.4,
  //   shadowRadius: 4.65,

  //   elevation: 6,

  //   paddingTop: 40,
  //   padding: 10,
  //   borderRadius: 10,
  //   width: 241,
  //   height: 116,
  //   margin: 15,
  //   color: '#ffffff',
  //   fontSize: 17,
  //   fontWeight: 'bold',
  //   lineHeight: 20,
  // },
  container: {
    marginTop: 10,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 6,

    borderRadius: 20,
    width: 241,
    height: 116,
    marginRight: 15,
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  title: {
    marginLeft: 25,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  genreImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
});
