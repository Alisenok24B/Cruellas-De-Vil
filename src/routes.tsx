import React from "react";

import { Routes, Route } from "react-router-dom";

import { ErrorBoundary } from "./components/error-boundary";
import { URLs } from "./__data__/urls";
import Login from './pages/login';
import Register from './pages/register';
import Search from './pages/search';
import ProfileView from './pages/dogsitter-viewing';

export const PageRoutes = () => (
    <ErrorBoundary>
        <Routes>
            <Route path={URLs.baseUrl} element={<Login/>}/>
            <Route path={URLs.ui.register} element={<Register/>}/>
            <Route path={URLs.ui.search} element={<Search/>}/>
            <Route path={URLs.ui.dogsitterViewing} element={<ProfileView/>}/>
            {/* <Route path={URLs.ui.dogsitterViewing.url} element={<ProfileView/>}/> */}

            <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
    </ErrorBoundary>
)
