import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./src/screens/home-screen";
import {MyRegisterScreen} from "./src/screens/my-register-screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SignInScreen} from "./src/screens/sign-in-screen";
import {SignUpScreen} from "./src/screens/sign-up-screen";
import {createStackNavigator} from "@react-navigation/stack";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()



export default function App() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'MyRegister'} component={MyRegisterScreen}/>
        </Stack.Navigator>
        //     <Tab.Navigator screenOptions={{headerShown: false}}>
        //         <Tab.Screen name={'Home'} component={HomeScreen}/>
        //         <Tab.Screen name={'MyRegister'} component={MyRegisterScreen}/>
        //     </Tab.Navigator>
    )
}