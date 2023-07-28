// Packages
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Helpers
import ipData from '../helpers/ipData.js'
import { decodeFilterHeader } from '../helpers/parseFilterHeader.js'

function Root() {
    const { filters } = useParams();
    const [parsedFilters, setParsedFilters] = useState([])

    useEffect(() => {
        setParsedFilters(JSON.parse(decodeFilterHeader(filters)))
    }, [filters])

    useEffect(() => {
        console.log(ipData)
    }, [])

    return (
        <p className="text-3xl font-bold">{JSON.stringify(parsedFilters)}</p>
    );
}

export default Root;