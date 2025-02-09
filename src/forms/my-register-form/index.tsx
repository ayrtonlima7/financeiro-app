import {View, Text} from "react-native";

export const MyRegisterForm = () => {
    return (
        <View style={{width: '95%'}}>
            <View style={{
                flexDirection: 'row',
                margin: '4%',
                height: '40%',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text>Circle</Text>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                    <Text>Título Categoria</Text>
                    <Text>Valor</Text>
                </View>
                <View>
                    <Text>Data</Text>
                </View>
            </View>
        </View>
    )
}
