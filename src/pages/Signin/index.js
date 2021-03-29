import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../BaseAuth';

import {
    Container, Logo, InfoText, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
} from '../Sign/styles';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleLogin() {
        signIn(email, password);
    }

    return (
        <Container>
            <Logo source={require('../../assets/logofiap.png')} />
            <InfoText>MOB20 Trabalho de Conclusão de Módulo</InfoText>
            <InfoText>Faça login para continuar</InfoText>
            <AreaInput>
                <Input
                    placeholder="E-mail"
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

            <SubmitButton onPress={handleLogin}>
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#FFF" />
                    ) : (
                        <SubmitText>Entrar</SubmitText>
                    )
                }
            </SubmitButton>

            <Link onPress={() => navigation.navigate('Signup')}>
                <LinkText>Criar minha conta</LinkText>
            </Link>

        </Container>
    );
}