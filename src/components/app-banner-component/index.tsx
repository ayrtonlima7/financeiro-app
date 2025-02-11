import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {RFValue} from "react-native-responsive-fontsize";
import {ButtonComponent} from "../button-component";
import {InputComponent} from "../input-component";
import React, {useContext, useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {TransactionContext} from "../../contexts/transaction-context";
import {api} from "../../services/api";

export const AppBannerComponent = () => {
    const statusBar = useSafeAreaInsets().top
    const {transaction, setTransaction} = useContext(TransactionContext)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Entrada', value: '1'},
        {label: 'Saída', value: '2'},
    ]);

    return (
        <View style={{paddingTop: statusBar, backgroundColor: '#E27100', height: RFValue(200)}}>
            <View style={{flex: 1, margin: '2%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>

                    <InputComponent style={'white'} label={'Data'} transaction={transaction}
                                    setTransaction={setTransaction} type={'transaction-date'}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <InputComponent style={'white'} label={'valor'} transaction={transaction}
                                        setTransaction={setTransaction} type={'transaction-value'}/>
                        <DropDownPicker
                            style={{
                                borderWidth: 0,
                                backgroundColor: 'rgba(0,0,0,0.1)',
                            }}
                            textStyle={{
                                color: 'black',
                            }}
                            placeholder={'Tipo de receita'}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <ButtonComponent title={'Salvar'} onPress={async () => {
                            const response = await api.post('/transactions', transaction).then((response) => {
                                console.log(response.data)
                            }).catch((e) => {
                                console.log('error: ', e)
                            })
                        }}/>
                    </View>
                </View>
            </View>
        </View>
    )
}