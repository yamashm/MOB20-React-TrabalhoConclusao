import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Background, Container, Logo, InfoText, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
} from '../Sign/styles';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Background>
            <Container
                enabled>
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

                <SubmitButton>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('Signup')}>
                    <LinkText>Criar minha conta</LinkText>
                </Link>

            </Container>
        </Background>
    );
}