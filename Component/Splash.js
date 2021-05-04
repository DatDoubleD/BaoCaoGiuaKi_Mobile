import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native'

var logo = require('../assets/logo.json')

export default class Splash extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.nvg.navigate("Login")
        }, 5000);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <LottieView source={logo}
                    autoPlay loop={true}
                />
            </View >
        )
    }
}