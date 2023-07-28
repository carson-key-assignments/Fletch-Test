// Packages
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// UI
import DisplayIsLoadingBlocker from '../ui/DisplayLoadingBlocker';
// Helpers
import { decodeFilterHeader } from '../helpers/parseFilterHeader';
import ipData from '../helpers/ipData';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';
import { IsLoadingContext } from '../contexts/IsLoading';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function RouteWrapper({ children }) {
    const { filters } = useParams();
    const metaDataDispatch = useContext(MetaDataContext)[1];
    const isLoadingDispatch = useContext(IsLoadingContext)[1];

    useEffect(() => {
        isLoadingDispatch({
            type: 'ADD_BLOCKER',
            payload: 'setFiltersInMetaDataContext',
        });
        metaDataDispatch({
            type: 'SET_FILTERS',
            payload: JSON.parse(decodeFilterHeader(filters)),
        });
        isLoadingDispatch({
            type: 'REMOVE_BLOCKER',
            payload: 'setFiltersInMetaDataContext',
        });
    }, [filters]);

    useEffect(() => {
        isLoadingDispatch({
            type: 'ADD_BLOCKER',
            payload: 'setIpDataInMetaDataContext',
        });
        metaDataDispatch({
            type: 'SET_IP_DATA',
            payload: ipData,
        });
        isLoadingDispatch({
            type: 'REMOVE_BLOCKER',
            payload: 'setIpDataInMetaDataContext',
        });
    }, [ipData]);

    return <DisplayIsLoadingBlocker>{children}</DisplayIsLoadingBlocker>;
}

RouteWrapper.propTypes = propTypes;

export default RouteWrapper;
