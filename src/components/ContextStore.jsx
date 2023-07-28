// Packages
import React from 'react';
// Stores
import MetaDataStore from '../contexts/MetaData';

function ContextStores({ children }) {
    return (<MetaDataStore>{children}</MetaDataStore>);
}

export default ContextStores;