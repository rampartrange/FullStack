import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import React from "react";
import Home from './pages/Home/Home'
import SignIn from "./pages/SignIn/SignIn";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign_in" element={<SignIn/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
