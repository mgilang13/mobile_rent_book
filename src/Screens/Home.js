import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Container} from 'native-base';

import Carousel from '../Components/Carousel/Carousel';
import HomeHeader from '../Components/Header/HomeHeader';
import PopularListBook from '../Components/PopularListBook/PopularListBook';

// import {Book} from '../Components/book';

class Home extends Component {
  state = {
    query: '',
  };
  detailBookHandler = (
    id,
    image_url,
    title,
    author,
    description,
    availability,
  ) => {
    this.props.navigation.push('Rent', {
      id: id,
      image_url: image_url,
      title: title,
      author: author,
      description: description,
      availability: availability,
    });
  };
  handleSearchBook = query => {
    this.setState({
      query: query,
    });
    console.log('dari home state', this.state.query);
  };
  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <HomeHeader searchBook={this.handleSearchBook} />
          <Carousel />
          <PopularListBook
            bookDetail={this.detailBookHandler}
            searchQuery={this.state.query}
          />
        </ScrollView>
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
