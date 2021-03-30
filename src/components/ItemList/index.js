import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, NameText, AddressText } from './styles';

export default function ItemList({ data, editItem, deleteItem }) {
    return (
        <TouchableWithoutFeedback onPress={() => editItem(data)} onLongPress={() => deleteItem(data)}>
            <Container>
                <NameText>{data.name}</NameText>
                <AddressText>{data.address}</AddressText>
            </Container>
        </TouchableWithoutFeedback>
    );
}