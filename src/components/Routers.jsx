// Packages
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Routes
import Root from '../routes/Root';
import RouteWrapper from './RouteWrapper';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/:filters"
                    element={
                        <RouteWrapper>
                            <Root />
                        </RouteWrapper>
                    }
                />
            </Routes>
        </Router>
    );
}

export default Routers;
