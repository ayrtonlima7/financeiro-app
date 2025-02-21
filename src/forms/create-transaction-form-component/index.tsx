import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {RFValue} from "react-native-responsive-fontsize";
import {InputComponent} from "../../components/input-component";
import React, {useState} from "react";
import {StyleSheet} from "react-native"
import {ButtonComponent} from "../../components/button-component";

export const CreateTransactionForm = () => {
    const statusBar = useSafeAreaInsets().top
    const [income, setIncome] = useState(true)
    const [expense, setExpense] = useState(false)
    const [date, setDate] = useState(new Date().toLocaleDateString('pt-BR'))

    return (
        <View style={{...styles.transactionContainer, paddingTop: statusBar}}>

            <View style={styles.contentContainer}>

                <View style={styles.leftContainer}>
                    <InputComponent keyboardType={'numeric'} label={'Valor'} style={{...styles.inputStyle, width: '70%'}}/>

                    <View style={{flexDirection: 'row', gap: 10}}>
                        <ButtonComponent
                            title={'Receita'}
                            viewStyle={income ? styles.viewButtonOn : styles.viewButtonOff}
                            textStyle={income ? styles.textButtonOn : styles.textButtonOff}
                            hitSlop={20}
                            onPress={() => {
                                setIncome(true)
                                setExpense(false)
                            }}
                        />
                        <ButtonComponent
                            title={'Despesa'}
                            viewStyle={expense ? styles.viewButtonOn : styles.viewButtonOff}
                            textStyle={expense ? styles.textButtonOn : styles.textButtonOff}
                            hitSlop={20}
                            onPress={() => {
                                setIncome(false)
                                setExpense(true)
                            }}
                        />
                    </View>

                </View>
                <View style={styles.rightContainer}>
                    <ButtonComponent
                        textStyle={styles.textButtonOff}
                        viewStyle={{...styles.viewButtonOff, justifyContent: 'flex-start'}}
                        hitSlop={20}
                        onPress={() => {}}
                        title={date}
                    />

                    <ButtonComponent viewStyle={styles.registerButton} textStyle={{color: '#e75100'}}
                                     title={'Registrar'}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    transactionContainer: {
        backgroundColor: '#e75100',
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
        width: '70%'
    },
    viewButtonOn: {
        elevation: 10,
        width: '50%',
        height:RFValue(24),
        backgroundColor: 'rgba(235,235,235,1)'
    },
    viewButtonOff: {
        width: '50%',
        height:RFValue(24),
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
