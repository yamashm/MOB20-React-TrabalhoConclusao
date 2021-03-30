import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { MainContext } from '../BaseMain';

import ItemList from '../../components/ItemList'

import {
    Container, HeaderContainer, AddButton, AddText, List
} from './styles';

export default function Main() {
    const navigation = useNavigation();

    const { items, item, deleteItem, setItem } = useContext(MainContext);

    function handleAdd() {
        setItem(null);
        navigation.navigate('Cadastro');
    }

    function handleEdit(data) {
        setItem(data);
        navigation.navigate('Cadastro');
    }

    function handleDelete(data) {
        deleteItem(data);
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
                renderItem={({ item }) => (<ItemList data={item} editItem={handleEdit} deleteItem={handleDelete} />)}
            />

        </Container>
    );
}