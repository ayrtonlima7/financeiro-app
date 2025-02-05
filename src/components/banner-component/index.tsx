import {StyleSheet, Text, View} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";


export const BannerComponent = () => {
    return (
        <View style={styles.banner}>
            <View style={styles.circle}>
                <Text allowFontScaling={false} style={styles.fBox}>F</Text>
            </View>
            <Text allowFontScaling={false} style={styles.text}>Financeiro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e75100',
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