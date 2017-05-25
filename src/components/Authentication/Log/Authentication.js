import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';

export default class Authentication extends Component{
  constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }

    gotoSignIn() {
        this.setState({ isSignIn: true });
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    //const { isSignIn } = this.state;
        //const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
    return (
            <View style={container}>
                {mainJSX}
                <View>
                    <TouchableOpacity onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
};
