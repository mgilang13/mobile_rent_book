import React, {Component} from 'react';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';

import LoginForm from '../Components/LoginForm/LoginForm';

class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <LoginForm dataNavigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
  },
});
