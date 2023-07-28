// Helpers
import initialState from './initialState';

const MetaDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            return initialState;
        default:
            return state;
    }
};

export default MetaDataReducer;