import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import About from '../pages/About';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function LoggedRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            drawerStyle={{
                backgroundColor: '#151515'
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#EC135B',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name="Principal" component={Home}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#151515',
                        borderBottomWidth: 2,
                        borderBottomColor: '#EC135B'
                    },
                    headerTintColor: '#FFF'
                }} />
            <AppDrawer.Screen name="Sobre" component={About}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#151515',
                        borderBottomWidth: 2,
                        borderBottomColor: '#EC135B'
                    },
                    headerTintColor: '#FFF'
                }} />
        </AppDrawer.Navigator>
    );
}

export default LoggedRoutes;