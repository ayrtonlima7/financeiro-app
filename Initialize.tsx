import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar, TextInput, Text} from "react-native";
import {useState} from "react";
import {AppContext} from "./src/contexts/app-context";
import {Auth} from "./Auth";
import App from "./App";
import {TransactionContext, TransactionInitialState} from './src/contexts/transaction-context';
import {AuthBannerComponent} from "./src/components/auth-banner-component";
import {SafeAreaProvider} from 'react-native-safe-area-context';

//@ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {}
//@ts-ignore
Text.defaultProps = Text.defaultProps || {}
//@ts-ignore
TextInput.defaultProps.allowFontScaling = false;
//@ts-ignore
Text.defaultProps.allowFontScaling = false;
// Text.defaultProps.maxFontSizeMultiplier = 1.1
// TextInput.defaultProps.maxFontSizeMultiplier = 1.1

export default function Initialize() {
    const [logged, setLogged] = useState(false)
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
