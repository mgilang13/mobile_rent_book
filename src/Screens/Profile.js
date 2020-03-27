import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Axios from 'axios';

import {Book} from '../Components/book';

const URL_STRING = 'http://192.168.100.62:3003/api/v1/book';

class Profile extends Component {
  state = {
    book: 'Ahmad Dahlan',
    library: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    Axios.get(URL_STRING)
      .then(({data}) => {
        this.setState({library: data.result});
      })
      .catch(err => console.log(err));
  };

  renderItem = ({item, index}) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.cardContainer}>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
        </View>
      </View>
    );
  };

  render() {
    console.log(this.state.library);
    return (
      <View style={styles.container}>
        <Text>Ini Screen Profile</Text>
        <Book title={this.state.book} />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
          }}>
          <FlatList
            data={this.state.library}
            renderItem={this.renderItem}
            contentContainerStyle={{paddingBottom: 40}}
          />
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cardContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
});
