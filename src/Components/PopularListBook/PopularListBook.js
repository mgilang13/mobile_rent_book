import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import {getAllBook} from '../../Redux/actions/book';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

class PopularListBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      library: [],
      error: null,
      pageNumber: 1,
      title: this.props.searchQuery['query'],
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.getDataBook();
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   let title = this.props.searchQuery['query'];

  //   if (prevState.title !== title) {
  //     this.searchFilterFunction(title);
  //   }
  // }

  getDataBook = async () => {
    await this.props.dispatch(getAllBook(this.state.pageNumber));
    console.log('bookData: ', this.props.book);
    this.setState({
      library: this.props.book.book.bookData.data,
    });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = title => {
    console.log('textTitle', title);
    if (title === '') {
      this.getDataBook();
    }
    this.setState({
      value: title,
    });

    const newData = this.state.library.filter(item => {
      const itemData = item.title.toUpperCase();
      const titleData = title.toUpperCase();

      return itemData.indexOf(titleData) > -1;
    });
    console.log('newData', newData);
    this.setState({
      library: newData,
    });
  };

  renderHeader = () => {
    let title = this.props.searchQuery['query'];
    return (
      <View style={styles.navbarContainer}>
        <Icon name="search" style={styles.iconSearch} />
        <TextInput
          style={styles.searchBox}
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={title => this.searchFilterFunction(title)}
          autoCorrect={false}
        />
      </View>
    );
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
    let title = this.props.searchQuery['query'];
    console.log('text in state: ', title);
    console.log('library ku coy', this.state.library);
    if (this.state.loading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <Text style={styles.popularTitle}>Popular Book</Text>
        <FlatList
          contentContainerStyle={styles.popularContent}
          numColumns={2}
          data={this.state.library}
          renderItem={this.renderBook}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

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
    marginLeft: 20,
    fontSize: 18,
    color: '#303031',
    fontWeight: 'bold',
  },
  popularContent: {
    marginLeft: 20,
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
  iconSearch: {
    marginLeft: 40,
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#E5E6EE',
  },
  searchBox: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#E5E6EE',
    fontSize: 15,
    width: 200,
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingRight: 20,
    fontWeight: 'bold',
  },
  navbarContainer: {
    backgroundColor: 'white',
    padding: 30,
    flexDirection: 'row',
  },
});
