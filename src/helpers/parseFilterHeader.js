export const encodeFilterHeader = (decodedFilter) => btoa(decodedFilter);

export const decodeFilterHeader = (encodedFilter) => atob(encodedFilter);
