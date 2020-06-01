import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Keyboard, View, Text, TextInput, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import Colors from "../constants/Colors";

const dHeight = Dimensions.get("window").height;
const dWidth = Dimensions.get("window").width;

const SignInScreen = props => {
    const [entUserLogin, setEntUserLogin] = useState(); //Set to useState("{username to login as}") to bypass username.
    const [entUserPassword, setEntUserPassword] = useState(); //Set to useState("{username's password}") to bypass password.
    const [validLogin, setValidLogin] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [logTextInput, setLogTextInput] = useState(null);
    const [pswdTextInput, setPswdTextInput] = useState(null);
    const [hidePassword, setHidePassword] = useState(true);

    /**
     * This method grabs the login information.
     * The method then proceeds to check the information.
     */
    function grabLogIn() {
        setValidLogin(true);
        setPasswordMatch(true);
    };

    /**
     * Constantly updating the user login information and checking if they a user.
     */
    useEffect(() => {
        grabLogIn();
    });

    /**
     * This method checks all user's info.
     * Mainly being username-password match.
     * Username has to be valid still.
     */
    function infoCheck() {
        if (entUserLogin === null) {
            Alert.alert(
                "No username was entered",
                "Please enter a valid username",
                [
                    {
                        text: "OK",
                        style: "cancel",
                    }
                ],
                { cancelable: false },
            )
        } else if (entUserPassword === null) {
            Alert.alert(
                "No password was entered",
                "Please enter your password",
                [
                    {
                        text: "OK",
                        style: "cancel",
                    }
                ],
                { cancelable: false },
            )
        } else if (validLogin === false) {
            Alert.alert(
                "Invalid username",
                "Please enter a valid username",
                [
                    {
                        text: "OK",
                        style: "cancel",
                    }
                ],
                { cancelable: false },
            )
        } else if (passwordMatch === false) {
            Alert.alert(
                "Password does not match",
                "Please re-enter password",
                [
                    {
                        text: "OK",
                        style: "cancel",
                    }
                ],
                { cancelable: false },
            )
        } else if (validLogin === true && passwordMatch === true) {
            window.loggedUser = entUserLogin;
            Keyboard.dismiss;
            setValidLogin(false); setPasswordMatch(false);
            setEntUserLogin(null); setEntUserPassword(null);
            logTextInput.clear(); pswdTextInput.clear();
            props.navigation.push("Home");
        } else {
            Alert.alert(
                "Unable to login",
                "Please try again",
                [
                    {
                        text: "OK",
                        style: "cancel",
                    }
                ],
                { cancelable: false },
            )
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={{ top: dHeight * 0.1, justifyContent: "center", alignItems: "center", }}>
                <TextInput
                    ref={input => {
                        setLogTextInput(input);
                    }}
                    style={styles.textInStyle}
                    placeholder="  Enter username"
                    placeholderTextColor="gray"
                    value={entUserLogin}
                    onChangeText={(text) => {
                        setEntUserLogin(text);
                    }}
                >
                </TextInput>
                <View style={styles.textInStyle}>
                    <TextInput
                        style={{ flex: 1 }}
                        ref={input => {
                            setPswdTextInput(input);
                        }}
                        secureTextEntry={hidePassword}
                        placeholder="  Enter password"
                        placeholderTextColor="gray"
                        value={entUserPassword}
                        onChangeText={(text) => {
                            setEntUserPassword(text);
                        }}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.hidePsswdButton}
                        //Toggles password visibility. Kinda slow right now though. Might be due to obtaining the icons. 
                        //Another possibility would be to import a library and use icons from there
                        onPress={() => {
                            hidePassword === true ? setHidePassword(false) : setHidePassword(true)
                        }}
                    >
                        <Image
                            style={styles.hidePsswdImg}
                            //source={require("../assets/Icons/closedEye.png")}
                            source={hidePassword === true ? require("../assets/Icons/closedEye.png") : require("../assets/Icons/blackEye.png")}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.loginStyle}
                    onPress={() => {
                        //Information checks
                        infoCheck();
                    }}>
                    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.facebookLogin}
                    onPress={() => {
                        setEntUserLogin("YourFacebookEmail");
                        setEntUserPassword("YourFacebookPassword");
                    }}
                >
                    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
                        Login With Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};

SignInScreen.navigationOptions = {
    headerTitle: "Family Reunion"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    textInStyle: {
        height: dHeight * 0.07,
        width: dWidth * 0.75,

        margin: 20,
        borderWidth: 4,
        borderRadius: 20,

        backgroundColor: "white",
        borderBottomColor: Colors.standard,
        borderLeftColor: "white",
        borderRightColor: "white",
        borderTopColor: "white",

        flexDirection: 'row',
    },
    hidePsswdButton: {
        right: 5,
        borderLeftWidth: 2,
        borderRadius: 10,
        height: dHeight * 0.07,
        bottom: dHeight * 0.005,
        borderColor: Colors.standard
    },
    hidePsswdImg: {
        resizeMode: "contain",
        height: dHeight * 0.07,
        width: dWidth * 0.10
    },
    loginStyle: {
        top: dHeight*0.02,
        alignItems: "center",
        width: dWidth * 0.40,
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 12,
        borderRadius: 20,
    },
    facebookLogin: {
        alignItems: "center",
        top: dHeight * 0.25,
        backgroundColor: "#457AED",
        borderColor: "#457AED",
        borderWidth: 12,
        borderRadius: 20,
    }
});

export default SignInScreen;