import 'react-native-gesture-handler'
import {MyRegisterScreen} from "./src/screens/my-register-screen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()


export default function App() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'MyRegister'} component={MyRegisterScreen}/>
        </Stack.Navigator>
    )
}