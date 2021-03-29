import React, { useState, createContext, useEffect, useContext } from 'react';
import firebase from '../../services/firebaseConfig';

import { AuthContext } from '../BaseAuth'

export const MainContext = createContext({});

function MainProvider({ children }) {
    const { user: usuario } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {

        loadItemList();
    }, []);

    async function loadItemList() {

        for (var i = 0; i < 10; i++) {
            let list = {
                key: i,
                name: "TESTE",
                address: "Rua Apeninos 236",
                description: "Teste da lista"
            }
            setItems(oldArray => [...oldArray, list].reverse());
        }

        alert('Chamou loadItemList');
    }

    async function createItem() {
        alert('Chamou createItem');
    }

    async function deleteItem() {
        alert('Chamou deleteItem');
    }

    async function updateItem() {
        alert('Chamou updateItem');
    }

    return (
        <MainContext.Provider value={{ items, loading, loadItemList, createItem, deleteItem, updateItem }}>
            {children}
        </MainContext.Provider>
    );

}

export default MainProvider;