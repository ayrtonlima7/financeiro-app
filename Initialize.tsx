import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar} from "react-native";
import {useState} from "react";
import {AppContext} from "./src/contexts/app-context";
import {Auth} from "./Auth";
import App from "./App";


export default function Initialize() {
    const [logged, setLogged] = useState(false)

    return (
        <NavigationContainer>
            <AppContext.Provider value={{logged, setLogged}}>
                <StatusBar translucent={true} backgroundColor="transparent"/>
                {logged ? <App/> : <Auth/>}
            </AppContext.Provider>
        </NavigationContainer>
    );
}