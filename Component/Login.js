import * as React from 'react';
import { Button, TextInput, View, StyleSheet, ImageBackground } from 'react-native';

export default function Login() {

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
                    //onPress={() => signIn({ username, password })}
                    />
                </View>
            </ImageBackground>
        </View>
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
        paddingLeft: 10,
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
});
