import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeHeader extends React.Component {
  render() {
    return (
      <View style={styles.navbarContainer}>
        <Text style={styles.brandLogo}>BOOKZ</Text>

        <Icon name="search" style={styles.iconSearch} />
        <TextInput
          style={styles.formSearch}
          placeholder="Search..."></TextInput>
      </View>
    );
  }
}

export default HomeHeader;

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: 'white',
    padding: 30,
    flexDirection: 'row',
  },
  brandLogo: {
    marginTop: 5,
    color: '#303031',
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconSearch: {
    marginLeft: 80,
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#E5E6EE',
  },
  formSearch: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#E5E6EE',
    fontSize: 15,
    width: 170,
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingRight: 20,
    fontWeight: 'bold',
  },
});
