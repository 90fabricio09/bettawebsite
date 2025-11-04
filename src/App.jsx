import React from 'react';
import { Outlet } from 'react-router-dom';
import './css/home.css';

import Chat from './components/Chat.jsx'

function App() {
    return (
        <>
            <Chat />
            <Outlet />
        </>
    );
}

export default App;