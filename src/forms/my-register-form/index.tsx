import {View, Text} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

export const MyRegisterForm = () => {
    return (
        <View style={{width: '75%', marginTop: RFValue(32)}}>
            <Text style={{
                marginBottom: RFValue(24),
                fontSize: RFValue(20),
                fontWeight: '800',
                color: '#e75100'
            }}>Meus registros</Text>
        </View>
    )
}