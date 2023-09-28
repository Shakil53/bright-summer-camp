import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
]);