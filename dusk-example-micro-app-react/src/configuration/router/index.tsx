import React, { useCallback, useState } from 'react';
import { createBrowserRouter, Link, Navigate, Outlet } from 'react-router-dom';
import api from '@/common/api';


function AppContainer() {

    const [data, setData] = useState({});
    const onClick = useCallback(async () => {
        const res = await api.create();
        setData(res.data);
    }, []);
    return (
        <div className={'color'}>
            app1 子应用
            <ul>
                <li><Link to={''}>返回</Link></li>
                <li><Link to={'user'}>用户列表</Link></li>
                <li><Link to={'setting'}>设置列表</Link></li>
            </ul>
            <button
                onClick={onClick}
            >
                远程调用
            </button>
            <pre>
                <code>
                    {JSON.stringify(data, null, 4)}
                </code>
            </pre>
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
