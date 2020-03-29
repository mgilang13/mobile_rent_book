import React from 'react';
import {connect} from 'react-redux';

import {Container} from 'native-base';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import HistoryNavbar from '../Components/NavbarSystem/HistoryNavbar';
import BookCardReturn from '../Components/PopularListBook/BookCardReturn';
import {getAllBookReturn} from '../Redux/actions/book';

class History extends React.Component {
  handlerBackButton = () => {
    this.props.navigation.navigate('Home');
  };

  state = {
    library: [],
  };

  componentDidMount = () => {
    this.getDataBookReturn();
  };
  getDataBookReturn = async () => {
    await this.props.dispatch(getAllBookReturn());
    console.log('bookDataReturn: ', this.props.book);
    this.setState({
      library: this.props.book.book.bookData.data,
    });
  };

  render() {
    const {library} = this.state;
    console.log('library cuk', library);

    let cardList;
    if (library.length === 0) {
      cardList = (
        <View style={styles.historyContainer}>
          <Image
            style={styles.noHistory}
            source={require('../Assets/history.png')}
          />
          <Text style={styles.txtNoHistory}>History Empty!</Text>
        </View>
      );
    } else {
      cardList = (
        <View>
          <BookCardReturn bookReturnDetail={library} />
        </View>
      );
    }
    return (
      <Container>
        <ScrollView>
          <View>
            <HistoryNavbar backBtn={this.handlerBackButton} />
          </View>
          {cardList}
        </ScrollView>
      </Container>
    );
  }
}

// export default History;
const mapStateToProps = book => {
  return {
    book,
  };
};

export default connect(mapStateToProps)(History);

const styles = StyleSheet.create({
  historyContainer: {
    marginTop: 100,
    marginLeft: 50,
  },
  noHistory: {
    width: 300,
    height: 200,
  },
  txtNoHistory: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#303031',
    marginLeft: 100,
  },
});
