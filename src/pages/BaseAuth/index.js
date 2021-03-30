import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import firebase from '../../services/firebaseConfig';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }, []);

    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim())
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email,
                        };

                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                callAlert('Erro', error.code);
                setLoadingAuth(false);
            });
    }

    async function signUp(email, password, nome) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email.trim(), password.trim())
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome,
                    email: value.user.email
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                        };
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                callAlert('Erro', error.code);
                setLoadingAuth(false);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            })
    }

    function callAlert(title, body) {
        Alert.alert(
            title,
            body,
            [
                {
                    text: 'Ok',
                }
            ]
        );
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signIn, signOut, callAlert, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;