import React, { useState, useContext } from 'react';

import {
    Background, Container, Logo, InfoText, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
} from '../Sign/styles';

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordReenter, setPasswordReenter] = useState('');

    return (
        <Background>
            <Container
                enabled
            >
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

                <SubmitButton >
                </SubmitButton>

            </Container>
        </Background>
    );
}
