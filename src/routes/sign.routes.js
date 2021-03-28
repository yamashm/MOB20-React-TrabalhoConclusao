import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const SignStack = createStackNavigator();

function SignRoutes() {
    return (
        <SignStack.Navigator>
            <SignStack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
            />
            <SignStack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerStyle: {
                        backgroundColor: '#151515',
                        borderBottomWidth: 2,
                        borderBottomColor: '#EC135B'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
        </SignStack.Navigator>
    );
}

export default SignRoutes;