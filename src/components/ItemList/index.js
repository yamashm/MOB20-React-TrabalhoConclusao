import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, NameText, AddressText } from './styles';

export default function ItemList({ data, deleteItem }) {
    return (
        <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
            <Container>
                <NameText>{data.name}</NameText>
                <AddressText>{data.address}</AddressText>
            </Container>
        </TouchableWithoutFeedback>
    );
}