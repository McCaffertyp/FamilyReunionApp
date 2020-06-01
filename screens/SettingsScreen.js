/**
 * @description CS446 UI Design class mockup application for implementation and presentation portion
 * of class project.
 * @author Paul McCafferty
 * @version 1.0.2
 */

import React from "react";
import {View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = props => {
    return(
        <View style={styles.container}>
            <Button style={{ marginTop: 50, height: 100, width: 200 }}
                title="Return"
                onPress={() => {
                    props.navigation.pop();
                }}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SettingsScreen;