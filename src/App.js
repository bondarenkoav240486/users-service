import React from 'react';
import './App.css';

// import {useDispatch,useSelector} from "react-redux";
import {
    BrowserRouter, 
    HashRouter
    // Route,
    // Routes,
    // Link
} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar.jsx';
import AppRouter from './components/AppRouter.jsx';


function App() {

    return (
        <div className="App">
            <HashRouter>

                <Navbar />
                <AppRouter />
            </HashRouter>

        </div>
    );
}

export default App;
