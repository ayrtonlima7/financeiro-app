import {TextStyle, StyleSheet, TextInput} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
interface InputComponentProps {
    label?: string
    style?: TextStyle
    secureTextEntry?: boolean
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
}

export const InputComponent = ({label, style, secureTextEntry, autoCapitalize}: InputComponentProps) => {
    return (
        <TextInput
            allowFontScaling={false}
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