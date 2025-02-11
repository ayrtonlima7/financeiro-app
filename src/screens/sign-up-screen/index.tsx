import {useNavigation} from "@react-navigation/native";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {InputComponent} from "../../components/input-component";
import {PasswordInputComponent} from "../../components/password-input-component";
import {ButtonComponent} from "../../components/button-component";
import {api} from "../../services/api";
import {useContext, useState} from "react";
import {UserSignUpInterface} from "../../interfaces/user-sign-up-interface";
import {AppContext} from "../../contexts/app-context";

export const SignUpScreen = () => {
    const navigation = useNavigation<any>()
    const {setLogged} = useContext(AppContext)
    const [user, setUser] = useState<UserSignUpInterface>({
        email: '',
        password: '',
        name: ''
    })

    const handleSignUp = async () => {
        try {
            const response = await api.post('/sign-up/admin', user)
            if (response.data) {
                setLogged(true)
                alert("Usuario criado com sucesso")
            } else {
                alert("Erro ao criar usuario")
            }
        } catch (e: any) {
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Digite seus dados abaixo:</Text>

                <Text style={styles.text}>Nome</Text>
                <InputComponent type={'name'} value={user.name} user={user} setUser={setUser}/>

                <Text style={styles.text}>E-mail</Text>
                <InputComponent type={'email'} value={user.email} user={user} setUser={setUser}
                                autoCapitalize={'none'}/>

                <Text style={styles.text}>Senha</Text>
                <PasswordInputComponent value={user.password} user={user} setUser={setUser}
                                        style={styles.passwordInput}/>

                <View style={styles.container}>
                    <ButtonComponent title='Criar conta' onPress={handleSignUp} viewStyle={styles.buttonContainer}/>

                    <View style={styles.hasAccount}>
                        <Text style={styles.title}>Já possui conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.signInButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    form: {
        width: '75%',
        marginTop: RFValue(32)
    },
    title: {
        marginBottom: RFValue(24),
        fontSize: RFValue(12)
    },
    text: {
        fontWeight: 'bold',
        fontSize: RFValue(12)
    },
    passwordInput: {
        width: '65%',
        marginBottom: RFValue(32)
    },
    buttonContainer: {
        marginBottom: RFValue(24)
    },
    hasAccount: {
        flexDirection: 'row',
        gap: 8
    },
    signInButton: {
        fontSize: RFValue(12),
        color: '#e75100',
        fontWeight: 'bold'
    }
})

