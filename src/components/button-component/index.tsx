import {TouchableOpacity, ViewStyle, StyleSheet, Text, TextStyle} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

interface ButtonComponentProps {
    title?: string
    onPress?: () => void
    viewStyle?: ViewStyle
    textStyle?: TextStyle
}

export const ButtonComponent = ({title, onPress, viewStyle, textStyle}: ButtonComponentProps) => {

    return (
        <TouchableOpacity style={[styles.container, viewStyle]} onPress={onPress}>
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