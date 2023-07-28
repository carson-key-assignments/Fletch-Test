// Packages
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Components
import ConditionalRender from '../components/ConditionalRender';
// UI
import LoadingBlocker from './LoadingBlocker';
// Contexts
import { IsLoadingContext } from '../contexts/IsLoading';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function DisplayIsLoadingBlocker({ children }) {
    const isLoading = useContext(IsLoadingContext)[0];

    return (
        <ConditionalRender
            falseReturn={<LoadingBlocker />}
            condition={!Object.keys(isLoading).some((element) => isLoading[element] === true)}
        >
            {children}
        </ConditionalRender>
    );
}

DisplayIsLoadingBlocker.propTypes = propTypes;

export default DisplayIsLoadingBlocker;
