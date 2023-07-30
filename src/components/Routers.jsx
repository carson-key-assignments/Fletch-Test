// Packages
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Routes
import Root from '../routes/Root';
import PivotPoint from '../routes/PivotPoint';
// Components
import RouteWrapper from './RouteWrapper';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RouteWrapper>
                            <Root />
                        </RouteWrapper>
                    }
                />
                <Route
                    path="/:filters"
                    element={
                        <RouteWrapper>
                            <Root />
                        </RouteWrapper>
                    }
                />
                <Route
                    path="/pivot/:filters"
                    element={
                        <RouteWrapper>
                            <PivotPoint />
                        </RouteWrapper>
                    }
                />
            </Routes>
        </Router>
    );
}

export default Routers;
