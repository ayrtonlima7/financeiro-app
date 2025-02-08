import {createStackNavigator} from "@react-navigation/stack";
import {SignInScreen} from "./src/screens/sign-in-screen";
import {SignUpScreen} from "./src/screens/sign-up-screen";

export const Auth = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'SignIn'} component={SignInScreen}/>
            <Stack.Screen name={'SignUp'} component={SignUpScreen}/>
        </Stack.Navigator>
    )
}