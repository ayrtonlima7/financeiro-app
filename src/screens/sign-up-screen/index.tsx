import {ButtonComponent} from "../../components/button-component";
import {BannerComponent} from "../../components/banner-component";
import {useNavigation} from "@react-navigation/native";
import {View, Text, TouchableOpacity} from "react-native";
import {SignUpForm} from "../../forms/sign-up-form";
import {RFValue} from "react-native-responsive-fontsize";

export const SignUpScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <BannerComponent/>
            <View style={{alignItems: 'center'}}>
                <SignUpForm/>
            </View>
            <View style={{alignItems: 'center'}}>
                <ButtonComponent title='Criar conta'/>
                <View style={{flexDirection: 'row', gap: 8}}>
                    <Text style={{fontSize: RFValue(12)}}>Já possui conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{fontSize: RFValue(12), color: '#e75100', fontWeight: 'bold'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}