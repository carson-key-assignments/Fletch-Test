// Helpers
import initialState from './initialState';

const MetaDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            return initialState;
        case 'ADD_BLOCKER':
            return {
                ...state,
                loadingBlocker: {
                    ...state.loadingBlocker,
                    [action.payload]: true,
                },
            };
        case 'REMOVE_BLOCKER': {
            const tempState = { ...state };
            delete tempState.loadingBlocker[action.payload];

            return tempState;
        }
        case 'ADD_OVERLAY_BLOCKER':
            return {
                ...state,
                loadingBlockerOverlay: {
                    ...state.loadingBlockerOverlay,
                    [action.payload]: true,
                },
            };
        case 'REMOVE_OVERLAY_BLOCKER': {
            const tempState = { ...state };
            delete tempState.loadingBlockerOverlay[action.payload];

            return tempState;
        }
        default:
            return state;
    }
};

export default MetaDataReducer;
