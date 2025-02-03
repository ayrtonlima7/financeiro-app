import {View, StyleSheet, Text} from "react-native";
import React from "react";
import {ButtonComponent} from "../../components/button-component";
import {InputComponent} from "../../components/input-component";
import {PasswordInputComponent} from "../../components/password-input-component";
import {RFValue} from "react-native-responsive-fontsize";
import {useNavigation} from "@react-navigation/native";


export const SignInForm = () => {
    const navigation = useNavigation()

    return (
        <View style={{width: '60%', marginTop: RFValue(32)}}>
            <Text allowFontScaling={false} style={styles.text}>E-mail</Text>
            <InputComponent autoCapitalize={'none'} label={"Digite seu e-mail"}/>
            <Text allowFontScaling={false} style={styles.text}>Senha</Text>
            <PasswordInputComponent style={{marginBottom: RFValue(32)}} label={'Digite sua senha'}/>
            <View style={{alignItems: 'center'}}>
                <ButtonComponent title={"Entrar"}/>
                <Text allowFontScaling={false} style={{marginBottom: RFValue(24), fontSize: RFValue(12)}}>Ainda não possui conta?</Text>
                <ButtonComponent onPress={() => navigation.navigate("SignUp")} title={"Cadastrar"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: RFValue(12),
        fontWeight: 'bold'
    }
})