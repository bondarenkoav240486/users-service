import React from 'react';
import './App.css';

// import {useDispatch,useSelector} from "react-redux";
import {
    BrowserRouter, 
    // Route,
    // Routes,
    // Link
} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar.jsx';
import AppRouter from './components/AppRouter.jsx';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
