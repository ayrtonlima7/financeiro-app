import {TouchableOpacity, ViewStyle, StyleSheet, Text, TextStyle} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

interface ButtonComponentProps {
    title?: string
    onPress?: () => void
    viewStyle?: ViewStyle
    textStyle?: TextStyle
    hitSlop?: number
}

export const ButtonComponent = ({title, onPress, viewStyle, textStyle, hitSlop}: ButtonComponentProps) => {

    return (
        <TouchableOpacity activeOpacity={0.1} hitSlop={hitSlop} style={[styles.container, viewStyle]} onPress={onPress}>
            <Text allowFontScaling={false} style={[styles.text, textStyle]}>{title}</Text>
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
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(12)
    }
})