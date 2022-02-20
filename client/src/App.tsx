import React from 'react';
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home';
import Note from './pages/note';

function App() {
    return (
        <React.Fragment>
            <header>
                <h1>This is a multiconatiner application</h1>
                <Link to='/'>Home</Link>
                <Link to='/note'>Note</Link>
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/note' element={<Note />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
