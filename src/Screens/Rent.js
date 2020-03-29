import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {rentBookAction} from '../Redux/actions/book';

import {Container, Button} from 'native-base';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Rent = props => {
  const route = useRoute();
  const idbook = route.params.id;
  const imgurl = route.params.image_url;
  const title = route.params.title;
  const author = route.params.author;
  const description = route.params.description;
  const available = route.params.availability;

  console.log('idbook', idbook);
  const backButtonHandler = () => {
    props.navigation.push('Home');
  };

  const handleRentBook = () => {
    Alert.alert(
      'Confirmation',
      'Want you rent this book?\n\n' + title,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => rentBook()},
      ],
      {cancelable: false},
    );
  };

  const rentBook = () => {
    props.dispatch(rentBookAction(idbook));
    props.navigation.push('Home');
  };

  let btnRent;
  if (available === 'Not Available') {
    btnRent = (
      <Button full danger style={styles.btnDisabled}>
        <Text style={styles.txtRentDisabled}>CAN'T RENT TWICE!</Text>
      </Button>
    );
  } else {
    btnRent = (
      <Button
        onPress={handleRentBook}
        warning
        activeOpacity={0.6}
        style={styles.btnRent}>
        <Text style={styles.txtRent}>RENT</Text>
      </Button>
    );
  }
  return (
    <Container>
      <View>
        <ScrollView>
          <TouchableOpacity
            style={styles.backBtnContainer}
            activeOpacity={0.6}
            onPress={backButtonHandler}>
            <Icon name="arrow-left" style={styles.backBtn} />
          </TouchableOpacity>
          <ImageBackground style={styles.bigImage} source={{uri: imgurl}}>
            <View style={styles.child}></View>
          </ImageBackground>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
          <Image style={styles.bookThumbnail} source={{uri: imgurl}} />
          <Text style={styles.bookDesc}>{description}</Text>
        </ScrollView>
        {btnRent}
      </View>
    </Container>
  );
};

// export default Rent;
const mapStateToProps = book => {
  return {
    book,
  };
};
export default connect(mapStateToProps)(Rent);

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
    fontSize: 27,
    color: '#FFFEFE',
    zIndex: 2,
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
    borderRadius: 25,
    width: 200,
    marginTop: 50,
    backgroundColor: '#F4CF5D',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 100,
  },
  txtRent: {
    marginLeft: 75,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  btnDisabled: {
    marginTop: 100,
  },
  txtRentDisabled: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
