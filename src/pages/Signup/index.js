import React, { useState, useContext } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { AuthContext } from '../BaseAuth';

import {
    Background, Container, Logo, InfoText, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
} from '../Sign/styles';

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordReenter, setPasswordReenter] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {

        if (nome.trim()) {
            if (email.trim()) {
                if (password.trim()) {
                    if (passwordReenter.trim()) {
                        if (password === passwordReenter) {
                            signUp(email, password, nome);
                        } else {
                            callAlert('Cuidado', 'As senhas digitadas não são iguais');
                        }
                    } else {
                        callAlert('Cuidado', 'Digite novamente a senha');
                    }
                } else {
                    callAlert('Cuidado', 'É necessário digitar uma senha');
                }
            } else {
                callAlert('Cuidado', 'É necessário digitar um e-mail');
            }
        } else {
            callAlert('Cuidado', 'É necessário digitar um nome');
        }
    }

    function callAlert(title, body) {
        Alert.alert(
            title,
            body,
            [
                {
                    text: 'Ok',
                }
            ]
        );
    }

    return (
        <Background>
            <Container>
                <InfoText>Preencha os dados de sua conta</InfoText>
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite a senha novamente"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={passwordReenter}
                        onChangeText={(text) => setPasswordReenter(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Cria conta</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    );
}
