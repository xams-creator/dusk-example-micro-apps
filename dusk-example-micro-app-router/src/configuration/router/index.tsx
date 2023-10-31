import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useNavigate } from '@xams-framework/dusk';

function useSegmentedLocationPathNames() {
    const location = useLocation();
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(['']);
    useEffect(() => {
        setDefaultSelectedKeys(location.pathname.split('/'));
    }, [location.pathname]);
    return defaultSelectedKeys;
}

const apps = [
    {
        key: 'app0',
        label: '基座',
    },
    {
        key: 'app1',
        label: 'React子应用',
    },
    {
        key: 'app2',
        label: 'app2',
    },
    {
        key: 'app3',
        label: 'Vite子应用',
    },
];

function AppsContainer() {
    const navigate = useNavigate();
    const defaultSelectedKeys = useSegmentedLocationPathNames();
    return (
        <Layout className={'app-layout'} style={{ height: '100%', width: '100%' }}>
            <Layout.Sider
                theme={'light'}
                width={212}
            >
                <Menu
                    defaultOpenKeys={['apps']}
                    selectedKeys={[defaultSelectedKeys.at(-1) || '']}
                    theme={'light'}
                    mode={'inline'}
                    items={[
                        {
                            key: 'apps',
                            label: '应用管理',
                            children: apps,
                        },
                    ]}
                    onClick={(item) => {
                        navigate(item.key);
                    }}
                />
            </Layout.Sider>
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    );
}


export default createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/apps'} />,
    },
    {
        path: '/apps',
        element: <AppsContainer />,
        children: [
            {
                path: 'app0',
                element: (
                    <div>app0基座路由</div>
                ),
            },
            {
                path: 'app1',
                element: (
                    <micro-app name={'app1'} url='http://localhost:1341/' />
                ),
            },
            {
                path: 'app2',
                element: (
                    <micro-app name={'app2'} url='http://localhost:3000' style={{ height: '100%' }} />
                ),
            },
            {
                path: 'app3',
                element: (
                    <micro-app name={'app3'} iframe url='http://localhost:1342' style={{ height: '100%' }} />
                ),
            },
        ],
    },
    {
        path: '*',
        element: (
            <Navigate to={'/'} />
        ),
    },
], {
    basename: process.env.PUBLIC_URL || '/',
});
