import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native'
import Login from './Login'
import BtmNvgtion from '../screens/BtmNvgtion'
import { Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

function SplashScreen({ navigation }) {
    var logo = require('../assets/logo.json')
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LottieView source={logo}
                autoPlay loop={false}
                onAnimationFinish={() => {
                    navigation.navigate('Login')
                }}
            />
        </View >
    );
}
function LoginScreen({ navigation }) {
    const { container, txtInput, button } = styles

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bgapp.png')} style={styles.image}>
                <TextInput
                    placeholder="   Username"
                    placeholderTextColor="#ff6f60"
                    style={txtInput}
                />
                <TextInput
                    placeholder="   Password"
                    placeholderTextColor="#ff6f60"
                    secureTextEntry
                    style={txtInput}
                />
                <View style={styles.fixToText}>
                    <Button
                        title="Sign in"
                        onPress={() => {
                            navigation.navigate('BtmNvgtion')
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const Stack = createStackNavigator();

function Main() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                <Stack.Screen name="BtmNvgtion" options={{ headerShown: false }} component={BtmNvgtion} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01579b',
    },
    txtInput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 25,
        borderColor: '#ab000d',

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 5,
        borderRadius: 10,
    },
})
export default Main;