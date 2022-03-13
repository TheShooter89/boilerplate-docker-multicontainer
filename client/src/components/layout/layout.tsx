import React from 'react';
import {
    Layout as AntLayout,
} from 'antd';

import './layout.css';

import Menu from './menu';
import Header from '../header';

const {
    Sider,
} = AntLayout;

interface LayoutProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => any;
    selectedMenuItem: string;
    children?: React.ReactNode;
}

const Layout = ({
    isSidebarOpen = false,
    toggleSidebar = () => console.log('hello layout Layout'),
    children,
}: LayoutProps) => {

    return (
        <React.Fragment>
            <AntLayout id='mainLayout'>
                <Sider
                    collapsed={!isSidebarOpen}
                    breakpoint='lg'
                    // uncomment this if you want to hide icons on closed sidebar
                    //collapsedWidth='0'
                    theme='light'
                    trigger={null}
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <Menu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} selectedMenuItem={'/'} />
                </Sider>

                <AntLayout>
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    {children}
                </AntLayout>
            </AntLayout>
        </React.Fragment>
    );
}

export default Layout;
