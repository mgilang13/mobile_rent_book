import React from 'react';

import {connect} from 'react-redux';
import {login} from '../../Redux/actions/admin';

import {Content, Button} from 'native-base';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    token: '',
    id: '',
  };

  loginProcess = async () => {
    const {email, password} = this.state;
    const adminData = {email, password};
    this.props
      .dispatch(login(adminData))
      .then(result => {
        this.props.dataNavigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        this.props.dataNavigation.navigate('Login');
        alert('Email or Password Is Wrong');
      });
  };
  render() {
    return (
      <Content>
        <View style={styles.titleContainer}>
          <Text style={styles.txtTitle}>Here To Get</Text>
          <Text style={styles.txtTitle}>Welcomed !</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputData}
            placeholder="Email"
            onChangeText={e => {
              this.setState({email: e});
            }}></TextInput>
          <TextInput
            style={styles.inputData}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={e => {
              this.setState({password: e});
            }}></TextInput>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.txtBtnSignIn}>Sign In</Text>
          <Button onPress={this.loginProcess} style={styles.btnSignIn}>
            <Icon style={styles.iconBtnSignIn} name="arrow-right" />
          </Button>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.txtSignUp}>Sign Up</Text>
          <Text style={styles.txtForgotPass}>Forgot Password</Text>
        </View>
      </Content>
    );
  }
}

// export default LoginForm;
const mapStateToProps = admin => {
  return {
    admin,
  };
};

export default connect(mapStateToProps)(LoginForm);

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 50,
  },
  txtTitle: {
    fontSize: 21,
  },
  formContainer: {
    marginTop: 40,
  },
  inputData: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B5B5C9',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 80,
  },
  txtBtnSignIn: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4B4C72',
  },
  btnSignIn: {
    borderRadius: 360,
    width: 50,
    height: 50,
    backgroundColor: '#090B28',
    marginLeft: 170,
  },
  iconBtnSignIn: {
    color: 'white',
    fontSize: 30,
    padding: 10,
  },
  signUpContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  txtSignUp: {
    textDecorationLine: 'underline',
  },
  txtForgotPass: {
    textDecorationLine: 'underline',
    marginLeft: 150,
  },
});
