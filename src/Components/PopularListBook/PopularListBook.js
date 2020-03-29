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
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    console.log('item', item);
    return (
      <TouchableOpacity
        style={styles.bookContainer}
        activeOpacity={0.6}
        onPress={() =>
          this.props.bookDetail(
            item.id,
            item.image_url,
            item.title,
            item.author,
            item.description,
            item.availability,
          )
        }>
        <View style={styles.imageContainer}>
          <Image style={styles.bookImage} source={{uri: item.image_url}} />
        </View>
        <View key={index} style={styles.titleContainer}>
          <Text style={styles.bookAuthor}>{item.author}</Text>
          <Text style={styles.bookTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const columns = 2;

    const {library} = this.state;
    console.log('library Popular: ', library);
    const getHeader = () => {
      return null;
    };

    const getFooter = () => {
      return null;
    };

    return (
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular Book</Text>
        <SafeAreaView style={styles.popularContent}>
          <FlatList
            numColumns={columns}
            data={library}
            renderItem={this.renderBook}
            keyExtractor={item => item.id}
            ListHeaderComponent={getHeader}
            ListFooterComponent={getFooter}></FlatList>
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
    marginRight: 30,
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
