// Packages
import React from 'react';
// Components
import Routers from './components/Routers';
import ContextStores from './components/ContextStore';
// CSS
import 'normalize.css';

function App() {
    return (
        <ContextStores>
            <Routers />
        </ContextStores>
    );
}

export default App;
