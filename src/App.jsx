// Packages
import React from 'react';
// Components
import Routers from './components/Routers.jsx';
import ContextStores from './components/ContextStore.jsx';
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
