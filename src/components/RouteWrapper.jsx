// Packages
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// UI
import DisplayIsLoadingBlocker from '../ui/DisplayLoadingBlocker';
import DisplayLoadingBlockerOverlay from '../ui/DisplayLoadingBlockerOverlay';
// Helpers
import { decodeFilterHeader } from '../helpers/parseFilterHeader';
import ipData from '../helpers/ipData';
import { parseIpData } from '../helpers/parseIpData';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';
import { IsLoadingContext } from '../contexts/IsLoading';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function RouteWrapper({ children }) {
    const { filters } = useParams();
    const [metaData, metaDataDispatch] = useContext(MetaDataContext);
    const [isLoading, isLoadingDispatch] = useContext(IsLoadingContext);

    useEffect(() => {
        isLoadingDispatch({
            type: 'ADD_BLOCKER',
            payload: 'setFiltersInMetaDataContext',
        });
        metaDataDispatch({
            type: 'SET_FILTERS',
            payload: JSON.parse(filters ? decodeFilterHeader(filters) : '[]'),
        });
    }, [filters]);
    useEffect(() => {
        const isIpDataEmpty = Object.keys(metaData.ipData).length === 0;
        const isUniqueIpDataEmpty = Object.keys(metaData.ipAddressesAndTotalBytes).length === 0;

        let { setUniqueIpDataTo, setIpDataTo } = {};

        if (isIpDataEmpty) {
            isLoadingDispatch({
                type: 'ADD_BLOCKER',
                payload: 'setIpDataInMetaDataContext',
            });
        }
        if (isUniqueIpDataEmpty) {
            isLoadingDispatch({
                type: 'ADD_BLOCKER',
                payload: 'setIpAddressesAndTotalBytesInMetaDataContext',
            });
        }

        if (isUniqueIpDataEmpty || isIpDataEmpty) {
            const { tempUniqueIpData, tempIpData } = parseIpData(ipData);

            setUniqueIpDataTo = tempUniqueIpData;
            setIpDataTo = tempIpData;
        }

        if (isIpDataEmpty) {
            metaDataDispatch({
                type: 'SET_IP_DATA',
                payload: setIpDataTo,
            });
        }
        if (isUniqueIpDataEmpty) {
            metaDataDispatch({
                type: 'SET_IP_ADDRESSES_AND_TOTAL_BYTES',
                payload: setUniqueIpDataTo,
            });
        }
    }, [ipData]);

    useEffect(() => {
        if (metaData.finishedLoading.filters && isLoading.loadingBlocker.setFiltersInMetaDataContext) {
            isLoadingDispatch({
                type: 'REMOVE_BLOCKER',
                payload: 'setFiltersInMetaDataContext',
            });
        }

        if (metaData.finishedLoading.ipData && isLoading.loadingBlocker.setIpDataInMetaDataContext) {
            isLoadingDispatch({
                type: 'REMOVE_BLOCKER',
                payload: 'setIpDataInMetaDataContext',
            });
        }

        if (
            metaData.finishedLoading.ipAddressesAndTotalBytes &&
            isLoading.loadingBlocker.setIpAddressesAndTotalBytesInMetaDataContext
        ) {
            isLoadingDispatch({
                type: 'REMOVE_BLOCKER',
                payload: 'setIpAddressesAndTotalBytesInMetaDataContext',
            });
        }
    }, [metaData.finishedLoading]);

    return (
        <>
            <DisplayLoadingBlockerOverlay />
            <DisplayIsLoadingBlocker>{children}</DisplayIsLoadingBlocker>
        </>
    );
}

RouteWrapper.propTypes = propTypes;

export default RouteWrapper;
