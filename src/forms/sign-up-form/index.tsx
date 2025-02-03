import {View, StyleSheet, Text} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {InputComponent} from "../../components/input-component";
import {PasswordInputComponent} from "../../components/password-input-component";

export const SignUpForm = () => {
    return (
        <View style={{width: '75%', marginTop: RFValue(32)}}>
            <Text style={{marginBottom: RFValue(24), fontSize: RFValue(12)}}>Digite seus dados abaixo:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 32}}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Nome</Text>
                    <InputComponent/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Sobrenome</Text>
                    <InputComponent/>
                </View>
            </View>
            <Text style={styles.text}>E-mail</Text>
            <InputComponent autoCapitalize={'none'} style={{width: '65%'}}/>
            <Text style={styles.text}>Senha</Text>
            <PasswordInputComponent style={{width: '65%', marginBottom: RFValue(8)}}/>
            <Text style={styles.text}>Confirmação de senha</Text>
            <PasswordInputComponent style={{width: '65%', marginBottom: RFValue(32)}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: RFValue(12)
    }
})