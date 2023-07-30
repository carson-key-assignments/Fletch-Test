// Helpers
import initialState from './initialState';

const MetaDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            return initialState;
        case 'SET_FILTERS':
            return {
                ...state,
                finishedLoading: {
                    ...state.finishedLoading,
                    filters: true,
                },
                filters: action.payload,
            };
        case 'ADD_SRC_FILTER':
            return {
                ...state,
                filters: [...state.filters, `s-${action.payload}`],
            };
        case 'ADD_DEST_FILTER':
            return {
                ...state,
                filters: [...state.filters, `d-${action.payload}`],
            };
        case 'SET_IP_DATA':
            return {
                ...state,
                finishedLoading: {
                    ...state.finishedLoading,
                    ipData: true,
                },
                ipData: action.payload,
            };
        case 'SET_IP_ADDRESSES_AND_TOTAL_BYTES':
            return {
                ...state,
                finishedLoading: {
                    ...state.finishedLoading,
                    ipAddressesAndTotalBytes: true,
                },
                ipAddressesAndTotalBytes: action.payload,
            };
        default:
            return state;
    }
};

export default MetaDataReducer;
