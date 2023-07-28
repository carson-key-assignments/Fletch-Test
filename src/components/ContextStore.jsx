// Packages
import React from 'react';
import PropTypes from 'prop-types';
// Stores
import MetaDataStore from '../contexts/MetaData';
import IsLoadingStore from '../contexts/IsLoading';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function ContextStores({ children }) {
    return (
        <IsLoadingStore>
            <MetaDataStore>{children}</MetaDataStore>
        </IsLoadingStore>
    );
}

ContextStores.propTypes = propTypes;

export default ContextStores;
