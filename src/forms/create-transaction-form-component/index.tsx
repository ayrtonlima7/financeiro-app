import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {RFValue} from "react-native-responsive-fontsize";
import {InputComponent} from "../../components/input-component";
import React, {useState} from "react";
import {StyleSheet} from "react-native"
import {ButtonComponent} from "../../components/button-component";
import LinearGradient from "react-native-linear-gradient";

export const CreateTransactionForm = () => {
    const statusBar = useSafeAreaInsets().top
    const [income, setIncome] = useState(true)
    const [expense, setExpense] = useState(false)
    const date = new Date().toLocaleDateString('pt-BR')

    return (
        <LinearGradient
            colors={['#e75100', '#ff610b', '#ff6e1f']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{...styles.transactionContainer, paddingTop: statusBar}}>

            <View style={styles.contentContainer}>

                <View style={styles.leftContainer}>
                    <InputComponent keyboardType={'numeric'} label={'Valor'}
                                    style={{...styles.inputStyle, width: RFValue(100)}}/>

                    <View style={{flexDirection: 'row', gap: 10}}>
                        <ButtonComponent
                            onPress={() => {
                                setExpense(false)
                                setIncome(true)
                            }}
                            title={'Receita'}
                            useGradient={false}
                            viewStyle={income ? styles.viewButtonOn : styles.viewButtonOff}
                            textStyle={income ? styles.textButtonOn : styles.textButtonOff}
                            hitSlop={20}
                        />
                        <ButtonComponent
                            onPress={() => {
                                setExpense(true)
                                setIncome(false)
                            }}
                            title={'Despesa'}
                            useGradient={false}
                            viewStyle={expense ? styles.viewButtonOn : styles.viewButtonOff}
                            textStyle={expense ? styles.textButtonOn : styles.textButtonOff}
                            hitSlop={20}
                        />
                    </View>

                </View>
                <View style={styles.rightContainer}>
                    <ButtonComponent
                        useGradient={false}
                        textStyle={styles.textButtonOff}
                        viewStyle={{...styles.viewButtonOff, width: 'auto'}}
                        hitSlop={20}
                        onPress={() => {
                        }}
                        title={date}
                    />

                    <ButtonComponent useGradient={false} viewStyle={styles.registerButton}
                                     textStyle={{color: '#e75100'}}
                                     title={'Registrar'}/>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    transactionContainer: {
        height: RFValue(200),
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 40,
        padding: RFValue(20),
    },
    inputStyle: {
        backgroundColor: 'rgba(235,235,235,1)',
        marginBottom: 0,
    },
    registerButton: {
        elevation: 10,
        backgroundColor: 'rgba(235,235,235,1)',
        width: RFValue(100)
    },
    viewButtonOn: {
        elevation: 10,
        width: RFValue(70),
        height: RFValue(24),
        backgroundColor: 'rgba(235,235,235,1)',
    },
    viewButtonOff: {
        width: RFValue(70),
        height: RFValue(24),
        backgroundColor: 'transparent'
    },
    textButtonOn: {
        color: '#e75100'
    },
    textButtonOff: {
        color: 'rgba(235,235,235,1)'
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
})
