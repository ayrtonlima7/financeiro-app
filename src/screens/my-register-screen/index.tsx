import {Button, View} from "react-native"
import {useContext} from "react";
import {AppContext} from "../../contexts/app-context";
import {CreateTransactionForm} from "../../forms/create-transaction-form-component";



export const MyRegisterScreen = () => {
    const {setLogged} = useContext(AppContext)

    return (
        <>
            <CreateTransactionForm />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                <Button title={'logout'} onPress={() => setLogged(false)}/>
            </View>
        </>
    )
}