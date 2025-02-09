import {View, StyleSheet, TextInput} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {RFValue} from "react-native-responsive-fontsize";
import {ButtonComponent} from "../button-component";
import {InputComponent} from "../input-component";
import React from "react";

export const HeaderRegisterScreen = () => {
    const statusBar = useSafeAreaInsets().top
    const navigation = useNavigation()

    return (
        <View style={{paddingTop: statusBar, backgroundColor: '#E27100', height: '30%'}}>
            <View style={{flex: 1, margin: '2%'}}>
                <View style={{marginBottom: RFValue(12)}}>
                    <ButtonComponent title={'Voltar'} onPress={() => {
                        navigation.navigate('Home')
                    }}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <InputComponent label={'Categoria'}/>
                    <InputComponent label={'Data'}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <InputComponent label={'valor'}/>
                        <InputComponent label={'Select'}/>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <ButtonComponent title={'Salvar'}/>
                    </View>
                </View>
            </View>
        </View>
    )
}