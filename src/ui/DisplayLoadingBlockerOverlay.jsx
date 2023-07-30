// Packages
import React, { useContext } from 'react';
// Components
import ConditionalRender from '../components/ConditionalRender';
// UI
import LoadingBlocker from './LoadingBlocker';
// Contexts
import { IsLoadingContext } from '../contexts/IsLoading';

function DisplayLoadingBlockerOverlay() {
    const isLoading = useContext(IsLoadingContext)[0];

    return (
        <ConditionalRender
            condition={Object.keys(isLoading.loadingBlockerOverlay).some(
                (element) => isLoading.loadingBlockerOverlay[element] === true
            )}
        >
            <LoadingBlocker outerDivClassName="absolute top-0 left-0" />
        </ConditionalRender>
    );
}

export default DisplayLoadingBlockerOverlay;
