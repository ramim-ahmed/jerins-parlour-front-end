import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const UserContext = createContext();
const AuthContext = (props) => {
    const allAuthContext = useFirebase()
    return (
        <UserContext.Provider value={allAuthContext}>
            {props.children}
        </UserContext.Provider>
    );
};

export default AuthContext;