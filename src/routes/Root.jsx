// Packages
import React, { useContext } from 'react';
// Contexts
import MetaDataStore from '../contexts/MetaData';

function Root() {
    const metaData = useContext(MetaDataStore)[0];

    return <p className="text-3xl font-bold">{JSON.stringify(metaData.filters)}</p>;
}

export default Root;
