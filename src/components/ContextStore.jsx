// Packages
import React from 'react';
import PropTypes from 'prop-types';
// Stores
import MetaDataStore from '../contexts/MetaData';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function ContextStores({ children }) {
    return <MetaDataStore>{children}</MetaDataStore>;
}

ContextStores.propTypes = propTypes;

export default ContextStores;
