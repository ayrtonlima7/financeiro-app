import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar} from "react-native";
import {useContext, useState} from "react";
import {HomeScreen} from "./screens/home-screen";
import {MyRegisterScreen} from "./screens/my-register-screen";
import {SignInScreen} from "./screens/sign-in-screen";
import {SignUpScreen} from "./screens/sign-up-screen";
import {AppContext} from "./contexts/app-context";

const Stack = createStackNavigator()

export default function App() {
    const [logged, setLogged] = useState(false)

    return (
        <NavigationContainer>
            <AppContext.Provider value={{logged, setLogged}}>
                    <StatusBar translucent={true} backgroundColor="transparent"/>
                    {logged ? (
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name="MyRegister" component={MyRegisterScreen}/>
                            <Stack.Screen name="Home" component={HomeScreen}/>
                        </Stack.Navigator>
                    ) : (
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name={'SignIn'} component={SignInScreen}/>
                            <Stack.Screen name={'SignUp'} component={SignUpScreen}/>
                        </Stack.Navigator>
                    )}
            </AppContext.Provider>
        </NavigationContainer>
    );
}