import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './src/routes/index';
import AuthProvider from './src/pages/BaseAuth';

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar backgroundColor="#151515" barStyle="light-content" />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}