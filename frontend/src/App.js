import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import React from "react";
import Home from './pages/Home/Home'
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign_in" element={<SignIn/>}/>
                    <Route path='/sign_up' element={<SignUp/>}/>
                    <Route path='/my_profile' element={<MyProfile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
