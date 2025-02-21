import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "react-native";
import {useState} from "react";
import {AppContext} from "./src/contexts/app-context";
import {Auth} from "./Auth";
import App from "./App";
import {TransactionContext, TransactionInitialState} from './src/contexts/transaction-context';
import {AuthBannerComponent} from "./src/components/auth-banner-component";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Initialize() {
    const [logged, setLogged] = useState(true)
    const [transaction, setTransaction] = useState(TransactionInitialState)

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppContext.Provider value={{logged, setLogged}}>
                    <TransactionContext.Provider value={{transaction, setTransaction}}>
                        <StatusBar translucent={true} backgroundColor="transparent"/>
                        {logged ? (
                            <App/>
                        ) : (
                            <>
                                <AuthBannerComponent/>
                                <Auth/>
                            </>
                        )}
                    </TransactionContext.Provider>
                </AppContext.Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
