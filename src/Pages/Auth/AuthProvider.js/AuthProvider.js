import React, { createContext } from 'react';
import { AuthUser } from '../AuthUser/AuthUser';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = AuthUser();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;