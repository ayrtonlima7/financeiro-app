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
}

export const InputComponent = ({label, style, secureTextEntry, autoCapitalize, value,user, setUser}: InputComponentProps) => {
    const handleChange = (text: string) => {
        setUser({...user, email: text})
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