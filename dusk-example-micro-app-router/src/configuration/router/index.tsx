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
                            children: [
                                {
                                    key: 'app0',
                                    label: 'app0',
                                },
                                {
                                    key: 'app1',
                                    label: 'app1',
                                },
                                {
                                    key: 'app2',
                                    label: 'app2',
                                },
                            ],
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
                    <micro-app name={'app2'} url='http://localhost:3000' />
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
