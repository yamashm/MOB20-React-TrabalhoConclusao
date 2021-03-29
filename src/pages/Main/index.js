import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { MainContext } from '../BaseMain';

import ItemList from '../../components/ItemList'

import {
    Container, HeaderContainer, AddButton, AddText, List
} from './styles';

export default function Main() {
    const navigation = useNavigation();

    const { items, deleteItem } = useContext(MainContext);

    function handleAdd() {
        navigation.navigate('Cadastro');
    }

    function handleDelete(data) {
        deleteItem();
    }

    return (
        <Container>
            <HeaderContainer>
                <AddButton onPress={handleAdd}>
                    <AddText>Cadastrar novo local</AddText>
                </AddButton>
            </HeaderContainer>

            <List
                showsVerticalScrollIndicator={false}
                data={items}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (<ItemList data={item} deleteItem={handleDelete} />)}
            />

        </Container>
    );
}