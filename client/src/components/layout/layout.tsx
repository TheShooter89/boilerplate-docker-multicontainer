import React, {
    useState,
    useEffect,
} from 'react';
import {
    Layout as AntLayout,
} from 'antd';

import {
    useLocation,
} from 'react-router-dom';

import './layout.css';

import Menu from './menu';
import Header from '../header';

const {
    Sider,
} = AntLayout;

interface LayoutProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => any;
    children?: React.ReactNode;
}

const Layout = ({
    isSidebarOpen = false,
    toggleSidebar = () => console.log('hello layout Layout'),
    children,
}: LayoutProps) => {
    let location = useLocation();
    const [selectedMenuItem, setSelectedMenuItem] = useState(location.pathname);

    useEffect(() => {
        //
        setSelectedMenuItem(location.pathname);
    }, [location]);

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
                    <Menu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} selectedMenuItem={selectedMenuItem} />
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
