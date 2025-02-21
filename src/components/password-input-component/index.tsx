import {Image, TouchableOpacity, View, ViewStyle, TextInput} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import React, {useState} from "react";

interface PasswordInputComponentProps {
    label?: string
    style?: ViewStyle
    value?: string
    setUser?: any
    user?: any
}

export const PasswordInputComponent = ({label, style, value, setUser, user}: PasswordInputComponentProps) => {
    const [hidePassword, setHidePassword] = useState(true)
    const handleChange = (text: string) => {
        setUser({...user, password: text})
    }
    return (
        <View style={[{
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }, style]}>
            <TextInput
                numberOfLines={1}
                value={value}
                onChangeText={handleChange}
                autoCapitalize='none'
                secureTextEntry={hidePassword}
                placeholder={label}
                style={{
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    borderRadius: 0,
                    flex: 1,
                    paddingHorizontal: RFValue(8),
                }}/>
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                {hidePassword ? (
                    <Image source={require('../../assets/closed-eye-password.png')}
                           style={{width: RFValue(20), height: RFValue(20), marginRight: RFValue(8)}}/>
                ) : (
                    <Image source={require('../../assets/eye-password.png')}
                           style={{width: RFValue(20), height: RFValue(20), marginRight: RFValue(8)}}/>
                )}
            </TouchableOpacity>
        </View>
    )
}
