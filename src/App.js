import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/lacivita-hayman-wedding' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
