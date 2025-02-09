import {Button, StyleSheet, View} from "react-native"
import {useContext} from "react";
import {AppContext} from "../../contexts/app-context";
import {HeaderRegisterScreen} from "../../components/header-register-screen";
import {MyRegisterForm} from "../../forms/my-register-form";


export const MyRegisterScreen = () => {
    const {setLogged} = useContext(AppContext)

    return (
        <>
            <HeaderRegisterScreen />
            <View style={{alignItems: 'center'}}>
                <MyRegisterForm/>
                <Button title={'logout'} onPress={() => setLogged(false)}/>
            </View>

        </>
    )
}

const styles = StyleSheet.create({})