// Packages
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Helpers
import ipData from '../helpers/ipData.js'

function Root() {
    const { filters } = useParams();

    useEffect(() => {
        console.log(JSON.parse(filters))
    }, [filters])

    useEffect(() => {
        console.log(ipData)
    }, [])

    return (
        <p className="text-3xl font-bold">{filters}</p>
    );
}

export default Root;