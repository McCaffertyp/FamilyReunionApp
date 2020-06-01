import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";

import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from "../screens/SettingsScreen";

const ScreenNavigator = createStackNavigator(
    {
        //Landing: LandingScreen,
        //Home: HomeScreen,
        //Settings: SettingsScreen,
        SignInScreen: {
            screen: SignInScreen,
            navigationOptions: {
                title: "Sign In",
                headerStyle: {
                    backgroundColor: Colors.standard
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Home",
                headerShown: false,
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                title: "Settings",
                headerStyle: {
                    backgroundColor: Colors.standard
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }
        }
    }
);

export default createAppContainer(ScreenNavigator);