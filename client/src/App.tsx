import React, {
    useState,
    useEffect,
} from 'react';
import {
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import Note from './pages/note';
import Notes from './pages/notes';
import Settings from './pages/settings';

import Layout from './components/layout';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let location = useLocation();
    const [selectedMenuItem, setSelectedMenuItem] = useState(location.pathname);

    const toggleSidebar = () => {
        return setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        //
        setSelectedMenuItem(location.pathname);
    }, [location]);

    return (
        <React.Fragment>
            <Layout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Layout>
        </React.Fragment>
    );
}

export default App;
