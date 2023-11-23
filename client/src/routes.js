import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Page404 from './pages/Page404';
import Persons from './pages/Persons';
import Person from './pages/Person';


export default function Router() {
    //routes
    const router = useRoutes([
        {
            path: '/',
            element: <Navigate to="/persons" />
        },
        {
            path: '/persons',
            element: <Persons></Persons>
        },
        {
            path: '/persons/:id',
            element: <Person></Person>
        },
        {
            path: '/persons/:id',
            element: <Person></Person>
        },
        {
            path: '*',
            element: <Page404></Page404>
        },

    ])
    return router;
}

