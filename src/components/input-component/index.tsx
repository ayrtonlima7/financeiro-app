import {StyleSheet, TextInput, ViewStyle} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

interface InputComponentProps {
    label?: string
    placeholderStyle?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
    value?: string
    setValue?: any
    setUser?: any
    user?: any
    type?: string
    transaction?: any
    setTransaction?: any
    style?: ViewStyle
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
    textAlign?: 'center' | 'left' | 'right'
}

export const InputComponent = ({
                                   label,
                                   placeholderStyle,
                                   autoCapitalize,
                                   value,
                                   user,
                                   setUser,
                                   type,
                                   transaction,
                                   setTransaction,
                                   style,
                                   keyboardType,
                                   textAlign,
                               }: InputComponentProps) => {

    const handleChange = (text: string) => {
        if (type === 'email') {
            return setUser({...user, email: text})
        }
        if (type === 'name') {
            return setUser({...user, name: text})
        }
        if (type === 'transaction-date') {
            return setTransaction({...transaction, date: text})
        }
        if (type === 'transaction-value') {
            return setTransaction({...transaction, value: parseInt(text)})
        }
    }

    return (
        <TextInput
            keyboardType={keyboardType}
            value={value}
            onChangeText={handleChange}
            autoCapitalize={autoCapitalize}
            textAlign={textAlign}
            numberOfLines={1}
            placeholder={label}
            placeholderTextColor={placeholderStyle}
            style={[styles.container, style]}
        >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 4,
        paddingHorizontal: RFValue(8),
        height: RFValue(28),
        marginBottom: RFValue(8),
    }
})
