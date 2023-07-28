// Packages
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// Helpers
import { decodeFilterHeader } from '../helpers/parseFilterHeader';
import ipData from '../helpers/ipData';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function RouteWrapper({ children }) {
    const { filters } = useParams();
    const metaDataDispatch = useContext(MetaDataContext)[1];

    useEffect(() => {
        metaDataDispatch({
            type: 'SET_FILTERS',
            payload: JSON.parse(decodeFilterHeader(filters)),
        });
    }, [filters]);

    useEffect(() => {
        metaDataDispatch({
            type: 'SET_IP_DATA',
            payload: ipData,
        });
    }, [ipData]);

    return children;
}

RouteWrapper.propTypes = propTypes;

export default RouteWrapper;
