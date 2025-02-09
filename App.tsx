import 'react-native-gesture-handler'
import {HomeScreen} from "./src/screens/home-screen";
import {MyRegisterScreen} from "./src/screens/my-register-screen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()


export default function App() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'MyRegister'} component={MyRegisterScreen}/>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
        </Stack.Navigator>
    )
}