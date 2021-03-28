import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { Container, Logo, WelcomeText, NameText } from './styles';

import { AuthContext } from '../../pages/BaseAuth';

export default function CustomDrawer(props) {
    const { user, signOut } = useContext(AuthContext);
    return (
        <DrawerContentScrollView  {...props} >
            <Container>
                <Logo
                    source={require('../../assets/logofiap.png')}
                    resizeMode="contain"
                />

                <WelcomeText >
                    Bem-vindo
           </WelcomeText>
                <NameText >
                    {user && user.nome}
                </NameText>
            </Container>

            <DrawerItemList {...props} />

            <DrawerItem
                {...props}
                label="Sair"
                onPress={() => signOut()}
            />

        </DrawerContentScrollView>
    );
}