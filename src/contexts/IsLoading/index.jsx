// Packages
import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
// Contexts
import IsLoadingReducer from './reducers';
import initialState from './initialState';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function Store({ children }) {
    const [state, dispatch] = useReducer(IsLoadingReducer, initialState);

    const stateVariables = useMemo(() => [state, dispatch], [state, dispatch]);

    return <IsLoadingContext.Provider value={stateVariables}>{children}</IsLoadingContext.Provider>;
}

Store.propTypes = propTypes;

export const IsLoadingContext = createContext({});
export default Store;
