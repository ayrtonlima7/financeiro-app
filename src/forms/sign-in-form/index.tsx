import {View, StyleSheet, Text} from "react-native";
import React, {useContext, useState} from "react";
import {ButtonComponent} from "../../components/button-component";
import {InputComponent} from "../../components/input-component";
import {PasswordInputComponent} from "../../components/password-input-component";
import {RFValue} from "react-native-responsive-fontsize";
import {useNavigation} from "@react-navigation/native";
import {api} from "../../services/api";
import {UserSignInInterface} from "../../interfaces/user-sign-in-interface";
import {AppContext} from "../../contexts/app-context";



export const SignInForm = () => {
    const navigation = useNavigation<any>()
    const {setLogged} = useContext(AppContext)
    const [user, setUser]= useState<UserSignInInterface>({
        email: '',
        password: '',
    })
    return (
        <View style={{width: '60%', marginTop: RFValue(32)}}>
            <Text allowFontScaling={false} style={styles.text}>E-mail</Text>
            <InputComponent type={'email'} value={user.email} user={user} setUser={setUser} autoCapitalize={'none'} label={"Digite seu e-mail"}/>
            <Text allowFontScaling={false} style={styles.text}>Senha</Text>
            <PasswordInputComponent value={user.password} user={user} setUser={setUser} style={{marginBottom: RFValue(32)}} label={'Digite sua senha'}/>
            <View style={{alignItems: 'center'}}>
                <ButtonComponent
                    title={"Entrar"}
                    onPress={async () => {
                        try {
                            const response = await api.post('/sign-in/admin', user).then(response => response).catch(e => e)
                            if (response.data.accessToken) {
                                setLogged(true)
                                alert("Logado com sucesso")
                            }
                        } catch (e: any) {
                            alert("Usuário ou senha inválidos")

                        }
                    }}
                />
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