import React, { useState, useContext, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainContext } from '../BaseMain';

import {
    Container, InfoText, AreaInput, Input, SubmitButton, SubmitText
} from './styles';

export default function Registration() {
    const navigation = useNavigation();
    const [submitText, setSubmitText] = useState('Cadastrar');
    const [locationName, setLocationName] = useState('');
    const [locationAddress, setLocationAddress] = useState('');
    const [locationDescription, setLocationDescription] = useState('');

    const { loading, item, createItem, updateItem } = useContext(MainContext);

    useEffect(() => {
        async function loadItem() {
            if (item != null) {
                setLocationName(item.name);
                setLocationAddress(item.address);
                setLocationDescription(item.description);
                setSubmitText('Atualizar');
            }
        }

        loadItem();
    }, []);

    function handleRegister() {
        if (item == null) {
            let data = {
                name: locationName,
                address: locationAddress,
                description: locationDescription
            }
            createItem(data);
        }
        else {
            let data = {
                key: item.key,
                name: locationName,
                address: locationAddress,
                description: locationDescription
            }
            updateItem(data);
        }

        Keyboard.dismiss();
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
                    onChangeText={(text) => setLocationName(text)}
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
                {
                    loading ? (
                        <ActivityIndicator size={20} color="#FFF" />
                    ) : (
                        <SubmitText>{submitText}</SubmitText>
                    )
                }

            </SubmitButton>
        </Container>
    );
}