import {StyleSheet, Text, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {RFValue} from "react-native-responsive-fontsize";


export const BannerComponent = () => {
    return (
        <LinearGradient
            colors={['#c94700', '#e75100', '#ff610b', '#ff6e1f', '#ff7c35']}
            style={styles.banner}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <View style={styles.circle}>
                <Text allowFontScaling={false} style={styles.fBox}>F</Text>
            </View>
            <Text allowFontScaling={false} style={styles.text}>Financeiro</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        height: RFValue(232),
    },
    circle: {
        borderRadius: '100%',
        backgroundColor: 'white',
        width: RFValue(76),
        height: RFValue(76),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: '600',
        color: 'white',
        fontSize: RFValue(36)
    },
    fBox: {
        bottom: RFValue(4),
        fontSize: RFValue(64),
        color: '#e75100',
        fontWeight: '700'

    }
})