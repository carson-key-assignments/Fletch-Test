// Packages
import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
// Contexts
import MetaDataReducer from './reducers';
import initialState from './initialState';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function Store({ children }) {
    const [state, dispatch] = useReducer(MetaDataReducer, initialState);

    const stateVariables = useMemo(() => [state, dispatch], [state, dispatch]);

    return <MetaDataContext.Provider value={stateVariables}>{children}</MetaDataContext.Provider>;
}

Store.propTypes = propTypes;

export const MetaDataContext = createContext({});
export default Store;
