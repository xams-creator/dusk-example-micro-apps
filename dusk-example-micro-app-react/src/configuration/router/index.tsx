import React from 'react';
import { createBrowserRouter, Link, Navigate, Outlet } from 'react-router-dom';


function AppContainer() {
    return (
        <div className={'color'}>
            app1 子应用
            <ul>
                <li><Link to={'user'}>用户列表</Link></li>
                <li><Link to={'setting'}>设置列表</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}


export default createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/app1'} replace={true} />,
    },
    {
        path: '/app1',
        element: <AppContainer />,
        children: [
            {
                path: 'user',
                element: <div>用户列表</div>,
            },
            {
                path: 'setting',
                element: <div>设置列表</div>,
            },
        ],
    },

], {
    basename: process.env.PUBLIC_URL || '/',
});
