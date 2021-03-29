import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { MainContext } from '../BaseMain';

import {
    Container, InfoText, AreaInput, Input, SubmitButton, SubmitText
} from './styles';

export default function Registration() {
    const navigation = useNavigation();
    const [locationName, setLocationname] = useState('');
    const [locationAddress, setLocationAddress] = useState('');
    const [locationDescription, setLocationDescription] = useState('');

    const { createItem } = useContext(MainContext);


    function handleRegister() {
        createItem();
        navigation.navigate('Principal');
    }

    return (
        <Container>
            <InfoText>Preencha os dados da localização</InfoText>
            <AreaInput>
                <Input
                    placeholder="Nome"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={locationName}
                    onChangeText={(text) => setLocationname(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Endereço"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={locationAddress}
                    onChangeText={(text) => setLocationAddress(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Descrição"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={locationDescription}
                    onChangeText={(text) => setLocationDescription(text)}
                />
            </AreaInput>

            <SubmitButton onPress={handleRegister}>

                <SubmitText>Cadastrar</SubmitText>

            </SubmitButton>
        </Container>
    );
}