import {TextStyle, StyleSheet, TextInput} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
interface InputComponentProps {
    label?: string
    style?: TextStyle
    secureTextEntry?: boolean
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
    value?: string
    setUser?: any
    user?: any
    type?: string
}

export const InputComponent = ({label, style, secureTextEntry, autoCapitalize, value,user, setUser, type}: InputComponentProps) => {
    const handleChange = (text: string) => {
        if (type === 'email') {
            return setUser({...user, email: text})
        }
        if (type === 'name') {
            return setUser({...user, name: text})
        }
    }

    return (
        <TextInput
            allowFontScaling={false}
            value={value}
            onChangeText={handleChange}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            numberOfLines={1}
            placeholder={label}
            style={[styles.placeholder, style]}>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    placeholder: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 4,
        paddingHorizontal: RFValue(8),
        marginBottom: RFValue(8)
    }
})