import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from './pages/login';
import Register from './pages/register';
import Search from './pages/search';
import ProfileView from './pages/dogsitter-viewing';

export const PageRoutes = () => (
    <Routes>
        <Route path="/dog-sitters-finder" element={<Login/>}/>
        <Route path="/dog-sitters-finder/register" element={<Register/>}/>
        <Route path="/dog-sitters-finder/search" element={<Search/>}/>
        <Route path="/dog-sitters-finder/dogsitter-viewing" element={<ProfileView/>}/>

        <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
)
