import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import Header from '../Header.js';
import profileIcon from '../../../../images/ic_person_white_48dp_1x.png';
import saveToken from '../../../../api/saveToken';
export default class User extends Component {
  // navigator
  // doi hinh anh lai
  // constructor(props) {
  //       super(props);
  //       this.state = { isLogedIn: false };
  //   }
  static navigationOptions = {
   tabBarLabel:
   <Image
    style={{ width: 50, height: 50 }}
    source={require('../../../../images/ic_person_white_48dp_1x.png')}
  />
   };
       constructor(props) {
             super(props);
             this.state = { user: null };
             global.onSignIn = this.onSignIn.bind(this);
         }
         onSignIn(user) {
             this.setState({ user });
         }

         onSignOut() {
             this.setState({ user: null });
             saveToken('');
         }

         gotoAuthentication() {
             const { navigator } = this.props;
             navigator.push({ name: 'AUTHENTICATION' });
         }
         gotoChangeInfo() {
             const { navigator } = this.props;
             navigator.push({ name: 'CHANGE_INFO', user: this.state.user });
         }
  render() {
    //const { user } = this.state;
    const logoutJSX = (
            <View>
              <TouchableOpacity style={styles.btnstyle} onPress={this.gotoAuthentication.bind(this)}>
                <Text style={styles.btntext}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            );
    const loginJSX = (
            <View >
                {/* <Text style={username}>{user ? user.name : ''}</Text> */}
                <View>
                    <TouchableOpacity style={styles.btnstyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={styles.btntext}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnstyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={styles.btntext}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
    const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
    return (
      <View style={styles.container}>
        <Image source={profileIcon} style={styles.profile} />
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ECFDF',
  },
  profile: {
        width: 150,
        height: 150,
        borderRadius: 60,
        marginVertical: 100,
        alignItems: 'center'
    },
    btnstyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btntext: {
      color: '#34B089',
      fontSize: 15
    }
});
