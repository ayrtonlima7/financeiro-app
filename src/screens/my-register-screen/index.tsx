import {StyleSheet, View} from "react-native"
import {BannerComponent} from "../../components/banner-component";
import {MyRegisterForm} from "../../forms/my-register-form";


export const MyRegisterScreen = () => {

    return (
        <>
            <BannerComponent/>
            <View style={{alignItems: 'center'}}>
            <MyRegisterForm/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})