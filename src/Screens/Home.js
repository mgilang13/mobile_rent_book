import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Container} from 'native-base';

import Carousel from '../Components/Carousel/Carousel';
import HomeNavbar from '../Components/Navbar/HomeNavbar';
import PopularListBook from '../Components/PopularListBook/PopularListBook';

// import {Book} from '../Components/book';

class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HomeNavbar />
        <Carousel />
        <PopularListBook />
      </Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
});
