import {BannerComponent} from "../../components/banner-component";
import {SignInForm} from "../../forms/sign-in-form";
import {ScrollView} from "react-native";

export const SignInScreen = () => {
    return (
        <>
            <BannerComponent/>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <SignInForm/>
            </ScrollView>
        </>
    )
}