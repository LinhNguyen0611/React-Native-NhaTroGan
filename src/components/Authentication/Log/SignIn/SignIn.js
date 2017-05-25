import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.goBackToMain();
                saveToken(res.token);
            })
            .catch(err => console.log(err));
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SignIn component</Text>
        <Button
          onPress={() => this.props.navigation.navigate('SignUp')}
          title="Go to SignUp"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
