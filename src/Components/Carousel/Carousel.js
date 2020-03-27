import React from 'react';
import {connect} from 'react-redux';

import {Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {getAllGenre} from '../../Redux/actions/genre';

function Item({genreTitle, bgColor}) {
  return (
    <View>
      <Text style={[styles.genreContainer, {backgroundColor: bgColor}]}>
        {genreTitle}
      </Text>
    </View>
  );
}

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
  render() {
    const {listGenre} = this.state;
    console.log('genreData', listGenre);

    return (
      <View style={styles.carouselContainer}>
        <SafeAreaView>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={listGenre}
            renderItem={({item}) => (
              <Item genreTitle={item.name} bgColor={item.bgcolor} />
            )}
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
  carouselContainer: {
    backgroundColor: 'white',
    padding: 30,
  },
  genreContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 6,

    paddingTop: 40,
    padding: 10,
    borderRadius: 10,
    width: 241,
    height: 116,
    margin: 15,
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});
