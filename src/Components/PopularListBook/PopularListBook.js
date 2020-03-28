import React from 'react';
import {connect} from 'react-redux';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {getAllBook} from '../../Redux/actions/book';

class PopularListBook extends React.Component {
  state = {
    library: [],
    pageNumber: 1,
  };

  componentDidMount = () => {
    this.getDataBook();
  };
  getDataBook = async () => {
    await this.props.dispatch(getAllBook(this.state.pageNumber));
    console.log('bookData: ', this.props.book);
    this.setState({
      library: this.props.book.book.bookData.data,
    });
  };

  renderBook = ({item, index}) => {
    return (
      <View style={styles.bookContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.bookImage} source={{uri: item.image_url}} />
        </View>
        <View key={index} style={styles.titleContainer}>
          <Text style={styles.bookAuthor}>{item.author}</Text>
          <Text style={styles.bookTitle}>{item.title}</Text>
        </View>
      </View>
    );
  };
  render() {
    const columns = 2;

    const {library} = this.state;
    console.log('library Popular: ', library);
    return (
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular Book</Text>
        <SafeAreaView style={styles.popularContent}>
          <FlatList
            numColumns={columns}
            data={library}
            renderItem={this.renderBook}
            keyExtractor={item => item.id}></FlatList>
        </SafeAreaView>
      </View>
    );
  }
}

// export default PopularListBook;

const mapStateToProps = book => {
  return {
    book,
  };
};

export default connect(mapStateToProps)(PopularListBook);

const styles = StyleSheet.create({
  popularContainer: {
    padding: 30,
  },
  popularTitle: {
    fontSize: 18,
    color: '#303031',
    fontWeight: 'bold',
  },
  bookContainer: {
    marginTop: 20,
    padding: 5,
  },
  bookImage: {
    width: 140,
    height: 200,
    borderRadius: 10,
  },
  titleContainer: {
    marginTop: 5,
    marginRight: 35,
    marginLeft: 5,
  },
  bookAuthor: {
    fontSize: 13,
    color: '#98A0B3',
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    width: 160,
    color: '#303031',
  },
});
