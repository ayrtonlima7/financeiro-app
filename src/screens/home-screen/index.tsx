import {View, StyleSheet, TextInput, Image, ScrollView, Text, TouchableOpacity, Button} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {HomeForm} from "../../forms/home-form";
import {BannerComponent} from "../../components/banner-component";
import {AppContext} from "../../contexts/app-context";
import {useContext} from "react";


export const HomeScreen = () => {
    const {setLogged} = useContext(AppContext)

    return (
        <>
            <BannerComponent/>
            <View style={{alignItems: 'center'}}>
                <HomeForm/>
                <Button title={'logout'} onPress={() => setLogged(false)}/>
            </View>

        </>
    )
}

const styles = StyleSheet.create({})