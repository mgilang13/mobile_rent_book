import React from 'react';
import {View, Image, ImageBackground, Text, StyleSheet} from 'react-native';

class BookCoverHeader extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.bigImage}
          source={{uri: this.props.data.image_url}}>
          <View style={styles.child}></View>
        </ImageBackground>
        <Text style={styles.bookTitle}>{this.props.data.title}</Text>
        <Text style={styles.bookAuthor}>{this.props.data.author}</Text>
        <Image
          style={styles.bookThumbnail}
          source={{uri: this.props.data.image_url}}
        />
      </View>
    );
  }
}

export default BookCoverHeader;

const styles = StyleSheet.create({
  bigImage: {
    width: '100%',
    height: 300,
    position: 'absolute',
    zIndex: -1,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  backBtnContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  backBtn: {
    //   color: '#000000',
    fontSize: 27,
    color: '#FFFEFE',
  },
  bookTitle: {
    zIndex: 2,
    position: 'absolute',
    marginTop: 200,
    marginLeft: 20,
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bookAuthor: {
    zIndex: 1,
    position: 'absolute',
    marginTop: 250,
    marginLeft: 20,
    color: '#ffffff',
    fontSize: 20,
  },
  bookThumbnail: {
    width: 120,
    height: 150,
    position: 'absolute',
    zIndex: 1,
    marginTop: 200,
    marginLeft: 250,
  },
  bookDesc: {
    marginTop: 325,
    marginLeft: 20,
  },
  btnRent: {
    width: 100,
    marginTop: 50,
    backgroundColor: '#F4CF5D',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 150,
  },
  txtRent: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
