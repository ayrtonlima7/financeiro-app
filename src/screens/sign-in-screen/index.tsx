import {BannerComponent} from "../../components/banner-component";
import {SignInForm} from "../../forms/sign-in-form";
import {View} from "react-native";

export const SignInScreen = () => {
    return (
        <>
            <BannerComponent/>
            <View style={{alignItems: 'center'}}>
                <SignInForm/>
            </View>
        </>
    )
}