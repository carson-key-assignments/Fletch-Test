// Packages
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Root() {
    const { filters } = useParams();

    useEffect(() => {
        console.log(JSON.parse(filters))
    }, [filters])

    return (
        <p className="text-3xl font-bold">{filters}</p>
    );
}

export default Root;