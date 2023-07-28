export const encodeFilterHeader = (decodedFilter) => {
    return btoa(decodedFilter)
}

export const decodeFilterHeader = (encodedFilter) => {
    return atob(encodedFilter)
}