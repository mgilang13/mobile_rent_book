import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HistoryNavbar extends React.Component {
  render() {
    return (
      <View style={styles.backBtnContainer}>
        <TouchableOpacity activeOpacity={1} onPress={this.props.backBtn}>
          <Icon name="arrow-left" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.txtHistory}>History</Text>
      </View>
    );
  }
}

export default HistoryNavbar;

const styles = StyleSheet.create({
  backBtnContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',

    shadowColor: '#d6d6d6',
    shadowOpacity: 0.55,
    shadowRadius: 3.84,

    elevation: 2,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
  },
  backIcon: {
    fontSize: 20,
  },
  txtHistory: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 120,
  },
});
