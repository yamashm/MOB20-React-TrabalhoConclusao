import React, { useState, createContext, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import firebase from '../../services/firebaseConfig';

import { AuthContext } from '../BaseAuth'

export const MainContext = createContext({});

function MainProvider({ children }) {
    const { user: usuario, callAlert } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);

    useEffect(() => {
        loadItemList();
    }, []);

    async function loadItemList() {
        let uid = usuario.uid;
        await firebase.database().ref('items')
            .child(uid)
            .on('value', (snapshot) => {
                setItems([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val().name,
                        address: childItem.val().address,
                        description: childItem.val().description,
                    };

                    setItems(list => [...list, data]);
                })
            })
    }

    async function createItem(data) {
        let uid = usuario.uid;

        let key = await firebase.database().ref('items').child(uid).push().key;

        await firebase.database().ref('items').child(uid).child(key).set({
            name: data.name,
            address: data.address,
            description: data.description
        });

        loadItemList();
    }

    function deleteItem(data) {
        Alert.alert(
            'Cuidado Atençao!',
            `Você deseja excluir ${data.name} ?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => handleDeleteYes(data)
                }
            ]
        );
    }

    async function handleDeleteYes(data) {
        let uid = usuario.uid;
        await firebase.database().ref('items')
            .child(uid).child(data.key).remove()
            .catch((error) => {
                callAlert('Erro', error.code);
            });
    }

    async function updateItem(data) {
        let uid = usuario.uid;
        await firebase.database().ref('items')
            .child(uid).child(data.key).update({
                name: data.name,
                address: data.address,
                description: data.description
            }).catch((error) => {
                callAlert('Erro', error.code);
            });

        loadItemList();
    }

    return (
        <MainContext.Provider value={{ items, item, loading, loadItemList, createItem, deleteItem, updateItem, setItem }}>
            {children}
        </MainContext.Provider>
    );

}

export default MainProvider;