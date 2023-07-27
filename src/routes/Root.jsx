// Packages
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Root() {
    const { filters } = useParams();

    useEffect(() => {
        console.log(JSON.parse(filters))
    }, [filters])

    return (
        <>{filters}</>
    );
}

export default Root;