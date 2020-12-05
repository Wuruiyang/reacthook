import React, { useReducer, useContext } from 'react';
import { reducer, initialData } from './reducer.js';

const RootContext = React.createContext(initialData);
const setProvider = Component => props => {
    const value = useReducer(reducer, initialData);

    return (
        <RootContext.Provider value={value}>
            <Component {...props} />
        </RootContext.Provider>
    );
};
const useStore = () => {
    return useContext(RootContext);
};

export { setProvider, useStore };
