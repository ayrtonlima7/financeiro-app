import {TextStyle, StyleSheet, TextInput} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import { TransactionProps } from "../../contexts/transaction-context";

interface InputComponentProps {
    label?: string
    style?: string
    secureTextEntry?: boolean
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
    value?: string
    setUser?: any
    user?: any
    type?: string
    transaction?: any
    setTransaction?: any
}

export const InputComponent = ({label, style, secureTextEntry, autoCapitalize, value,user, setUser, type, transaction, setTransaction}: InputComponentProps) => {
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
            allowFontScaling={false}
            value={value}
            onChangeText={handleChange}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            numberOfLines={1}
            placeholder={label}
            placeholderTextColor={style}
            style={[styles.placeholder]}>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    placeholder: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 4,
        paddingHorizontal: RFValue(8),
        marginBottom: RFValue(8),
    }
})