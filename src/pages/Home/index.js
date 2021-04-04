import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../Main';
import Registration from '../Registration';

import MainProvider from '../BaseMain';

const MainStack = createStackNavigator();

export default function Home() {

    return (
        <MainProvider>
            <MainStack.Navigator>
                <MainStack.Screen
                    name="Principal"
                    component={Main}
                    options={{ headerShown: false }}
                />

                <MainStack.Screen
                    name="Cadastro"
                    component={Registration}
                    options={{
                        headerStyle: {
                            backgroundColor: '#131313',
                            borderBottomWidth: 1,
                            borderBottomColor: '#00b94a'
                        },
                        headerTintColor: '#FFF',
                        headerBackTitleVisible: false,
                        headerTitle: 'Voltar'
                    }}
                />
            </MainStack.Navigator>
        </MainProvider>
    );

}
