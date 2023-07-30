// Packages
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';
import { IsLoadingContext } from '../contexts/IsLoading';
// Helpers
import { encodeFilterHeader } from '../helpers/parseFilterHeader';

const propTypes = {
    className: PropTypes.string,
};
const defaultProps = {
    className: '',
};

function Navigation({ className }) {
    const [metaData, metaDataDispatch] = useContext(MetaDataContext);
    const [isLoading, isLoadingDispatch] = useContext(IsLoadingContext);
    const [navigationText, setNavigationText] = useState('Loading');
    const navigate = useNavigate();

    useEffect(() => {
        if (metaData.filters.length > 1) {
            const filterArray = metaData.filters[metaData.filters.length - 2].split('-');
            setNavigationText(
                filterArray[0] === 'd' ? `Traffic To: ${filterArray[1]}` : `Traffic From: ${filterArray[1]}`
            );
        } else {
            setNavigationText('To Landing Page');
        }
    }, [metaData.filters]);

    useEffect(() => {
        if (isLoading.loadingBlockerOverlay.removeFilter) {
            const encodedFilters = encodeFilterHeader(JSON.stringify(metaData.filters));

            isLoadingDispatch({
                type: 'REMOVE_OVERLAY_BLOCKER',
                payload: 'removeFilter',
            });

            navigate(`/pivot/${encodedFilters}`);
        }
    }, [metaData.filters]);

    return (
        <button
            className={`w-screen bg-black text-white h-fit py-2 ${className}`}
            type="button"
            onClick={() => {
                isLoadingDispatch({
                    type: 'ADD_OVERLAY_BLOCKER',
                    payload: 'removeFilter',
                });
                if (metaData.filters.length > 1) {
                    metaDataDispatch({
                        type: 'REMOVE_FILTER',
                    });
                } else {
                    isLoadingDispatch({
                        type: 'REMOVE_OVERLAY_BLOCKER',
                        payload: 'removeFilter',
                    });

                    navigate('/');
                }
            }}
        >
            {`<<< ${navigationText}`}
        </button>
    );
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
