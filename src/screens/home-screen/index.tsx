import {View, StyleSheet, TextInput, Image, ScrollView, Text, TouchableOpacity} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {HomeForm} from "../../forms/home-form";
import {BannerComponent} from "../../components/banner-component";


export const HomeScreen = () => {
    return (
        <>
            <BannerComponent/>
            <HomeForm/>
        </>
    )
}

const styles = StyleSheet.create({})