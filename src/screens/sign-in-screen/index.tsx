import { ScrollView, View, StyleSheet, Text } from "react-native";
import React, { useContext, useState } from "react";
import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";
import { PasswordInputComponent } from "../../components/password-input-component";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { UserSignInInterface } from "../../interfaces/user-sign-in-interface";
import { AppContext } from "../../contexts/app-context";

export const SignInScreen = () => {
    const navigation = useNavigation<any>();
    const { setLogged } = useContext(AppContext);
    const [user, setUser] = useState<UserSignInInterface>({
        email: "",
        password: "",
    });

    const handleSignIn = async () => {
        try {
            const response = await api.post("/sign-in/admin", user);
            if (response.data.accessToken) {
                setLogged(true);
                alert("Logado com sucesso");
            }
        } catch (e: any) {
            alert("Usuário ou senha inválidos");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.form}>
                <Text allowFontScaling={false} style={styles.label}>E-mail</Text>
                <InputComponent
                    type={"email"}
                    value={user.email}
                    user={user}
                    setUser={setUser}
                    autoCapitalize={"none"}
                    label={"Digite seu e-mail"}
                />

                <Text allowFontScaling={false} style={styles.label}>Senha</Text>
                <PasswordInputComponent
                    value={user.password}
                    user={user}
                    setUser={setUser}
                    label={"Digite sua senha"}
                    style={styles.passwordInput}
                />

                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        title={"Entrar"}
                        onPress={handleSignIn}
                        viewStyle={styles.signButton}
                    />

                    <Text allowFontScaling={false} style={styles.signUpText}>Ainda não possui conta?</Text>

                    <ButtonComponent
                        onPress={() => navigation.navigate("SignUp")}
                        title={"Cadastrar"}
                        viewStyle={styles.signButton}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    form: {
        width: "60%",
        marginTop: RFValue(32),
    },
    label: {
        fontSize: RFValue(12),
        fontWeight: "bold",
    },
    passwordInput: {
        marginBottom: RFValue(32),
    },
    buttonContainer: {
        alignItems: "center",
    },
    signButton: {
        marginBottom: RFValue(24),
    },
    signUpText: {
        marginBottom: RFValue(24),
        fontSize: RFValue(12),
    }
});
