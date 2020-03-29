import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

class BookCardReturn extends React.Component {
  renderBook = ({item, index}) => {
    console.log('item', item);
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
    return (
      <View style={styles.historyContainer}>
        <SafeAreaView style={styles.historyContent}>
          <FlatList
            numColumns={columns}
            data={this.props.bookReturnDetail}
            renderItem={this.renderBook}
            keyExtractor={item => item.id}></FlatList>
        </SafeAreaView>
      </View>
    );
  }
}

export default BookCardReturn;

// const mapStateToProps = book => {
//   return {
//     book,
//   };
// };

// export default connect(mapStateToProps)(BookCardReturn);

const styles = StyleSheet.create({
  historyContainer: {
    padding: 30,
    marginBottom: 100,
  },
  historyTitle: {
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
