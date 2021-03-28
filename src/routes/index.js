import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../pages/BaseAuth';
import SignRoutes from './sign.routes';
import LoggedRoutes from './logged.routes';

function Routes() {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#151515" />
            </View>
        )
    }

    return (
        signed ? <LoggedRoutes /> : <SignRoutes />
    )
}

export default Routes;