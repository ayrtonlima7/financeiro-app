import {TouchableOpacity, ViewStyle, StyleSheet, Text, TextStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {RFValue} from "react-native-responsive-fontsize";

interface ButtonComponentProps {
    title?: string
    onPress?: () => void
    viewStyle?: ViewStyle
    textStyle?: TextStyle
    hitSlop?: number
    useGradient?: boolean
}

export const ButtonComponent = ({
                                    title,
                                    onPress,
                                    viewStyle,
                                    textStyle,
                                    hitSlop,
                                    useGradient = true,
                                }: ButtonComponentProps) => {
    return (
        useGradient && (
            <TouchableOpacity activeOpacity={0.1} hitSlop={hitSlop} onPress={onPress}>
                <LinearGradient
                    colors={['#e75100', '#ff610b', '#ff6e1f', '#ff7c35']}
                    start={{x: 0, y: 1}}
                    end={{x: 0, y: 0}}
                    style={[styles.container, viewStyle]}
                >
                    <Text style={[styles.text, textStyle]}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        ) || (
            <TouchableOpacity activeOpacity={0.1} hitSlop={hitSlop} onPress={onPress}
                              style={[styles.container, viewStyle]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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

//     <TouchableOpacity activeOpacity={0.1} hitSlop={hitSlop} onPress={onPress}>
//     {useGradient ? (
//             <LinearGradient
//                 colors={['#e75100', '#ff610b', '#ff6e1f', '#ff7c35']}
//                 start={{x: 0, y: 1}}
//                 end={{x: 0, y: 0}}
//                 style={[styles.container, viewStyle]}
//             >
//                 <Text style={[styles.text, textStyle]}>{title}</Text>
//             </LinearGradient>
//         ) : (
//             <View style={[styles.container, viewStyle]}>
//                 <Text style={[styles.text, textStyle]}>{title}</Text>
//             </View>
//         )}
// </TouchableOpacity>
