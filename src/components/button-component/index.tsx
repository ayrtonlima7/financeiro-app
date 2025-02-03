import {TouchableOpacity, ViewStyle, StyleSheet, Text} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

interface ButtonComponentProps {
    title?: string
    onPress?: () => void
    style?: ViewStyle
}

export const ButtonComponent = ({title, onPress, style}: ButtonComponentProps) => {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text allowFontScaling={false} style={[styles.text, style]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e75100',
        width: RFValue(124),
        height: RFValue(32),
        borderRadius: 4,
        marginBottom: RFValue(24)
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(12)
    }
})