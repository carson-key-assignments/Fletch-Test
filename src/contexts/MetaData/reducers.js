// Helpers
import initialState from './initialState';

const MetaDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            return initialState;
        case 'SET_FILTERS':
            return { ...state, filters: action.payload };
        case 'SET_IP_DATA':
            return { ...state, ipData: action.payload };
        default:
            return state;
    }
};

export default MetaDataReducer;
