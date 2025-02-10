import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar} from "react-native";
import {useState} from "react";
import {AppContext} from "./src/contexts/app-context";
import {Auth} from "./Auth";
import App from "./App";
import { TransactionContext, TransactionInitialState } from './src/contexts/transaction-context';


export default function Initialize() {
    const [logged, setLogged] = useState(false)
    const [transaction, setTransaction] = useState(TransactionInitialState)

    return (
        <NavigationContainer>
            <AppContext.Provider value={{logged, setLogged}}>
                <TransactionContext.Provider value={{transaction, setTransaction}} >
                    <StatusBar translucent={true} backgroundColor="transparent"/>
                    {logged ? <App/> : <Auth/>}
                </TransactionContext.Provider>
            </AppContext.Provider>
        </NavigationContainer>
    );
}