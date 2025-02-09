import {ButtonComponent} from "../../components/button-component";
import {useNavigation} from "@react-navigation/native";
import {RFValue} from "react-native-responsive-fontsize";

export const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <>
            <ButtonComponent viewStyle={{marginBottom: RFValue(24)}} title={'Voltar'} onPress={() => {navigation.navigate('MyRegister')}} />
        </>
    )
}