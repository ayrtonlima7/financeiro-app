import {View, StyleSheet, Text} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {InputComponent} from "../../components/input-component";
import {PasswordInputComponent} from "../../components/password-input-component";
import {ButtonComponent} from "../../components/button-component";
import {api} from "../../services/api";
import {useContext, useState} from "react";
import {UserSignUpInterface} from "../../interfaces/user-sign-up-interface";
import {AppContext} from "../../contexts/app-context";

export const SignUpForm = () => {
    const {setLogged} = useContext(AppContext)
    const [user, setUser]= useState<UserSignUpInterface>({
        email: '',
        password: '',
        name: ''
    })
    return (
        <View style={{width: '75%', marginTop: RFValue(32)}}>
            <Text style={{marginBottom: RFValue(24), fontSize: RFValue(12)}}>Digite seus dados abaixo:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 32}}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Nome</Text>
                    <InputComponent type={'name'} value={user.name} user={user} setUser={setUser}/>
                </View>
            </View>
            <Text style={styles.text}>E-mail</Text>
            <InputComponent type={'email'} value={user.email} user={user} setUser={setUser} autoCapitalize={'none'} style={{width: '65%'}}/>
            <Text style={styles.text}>Senha</Text>
            <PasswordInputComponent value={user.password} user={user} setUser={setUser} style={{width: '65%', marginBottom: RFValue(8)}}/>
            <View style={{width: '100%', alignItems: 'center'}}>
                <ButtonComponent
                    viewStyle={{marginBottom: RFValue(24)}}
                    title='Criar conta'
                    onPress={async () => {
                        try {
                            const response = await api.post('/sign-up/admin', user).then(response => response).catch(e => e)
                            if (response.data) {
                                setLogged(true)
                                alert("Usuario criado com sucesso")
                            } else {
                                alert("Erro ao criar usuario")
                            }
                        } catch (e: any) {
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: RFValue(12)
    }
})