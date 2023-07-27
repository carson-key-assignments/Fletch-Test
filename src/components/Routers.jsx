// Packages
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Routes
import Root from '../routes/Root';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/:filters"
                    element={<Root />}
                />
            </Routes>
        </Router>
    );
}

export default Routers;