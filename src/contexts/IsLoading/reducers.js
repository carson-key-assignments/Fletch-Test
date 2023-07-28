// Helpers
import initialState from './initialState';

const MetaDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            return initialState;
        case 'ADD_BLOCKER':
            return { ...state, [action.payload]: true };
        case 'REMOVE_BLOCKER': {
            const tempState = { ...state };
            delete tempState[action.payload];

            return { ...tempState };
        }
        default:
            return state;
    }
};

export default MetaDataReducer;
