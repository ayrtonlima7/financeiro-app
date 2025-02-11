import {Button, View} from "react-native"
import {useContext} from "react";
import {AppContext} from "../../contexts/app-context";
import {MyRegisterForm} from "../../forms/my-register-form";


export const MyRegisterScreen = () => {
    const {setLogged} = useContext(AppContext)

    return (
            <View style={{alignItems: 'center'}}>
                <MyRegisterForm/>
                <Button title={'logout'} onPress={() => setLogged(false)}/>
            </View>
    )
}