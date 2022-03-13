import React from 'react';
import {
    Layout,
    Image,
    Switch,
    Space,
} from 'antd';
import {
    MenuOutlined,
} from '@ant-design/icons';

import logoipsum from '../../assets/logoipsum.svg';
import './header.css';

const {
    Header: AntHeader,
} = Layout;

const Header = ({isSidebarOpen = false, toggleSidebar = () => console.log('hello layout Header')}) => {

    return (
        <React.Fragment>
            <AntHeader className='mainHeader'>
                <Space className='header-grid'>
                    <div className='header-grid-item sidebar-button'>
                        <MenuOutlined onClick={toggleSidebar} />
                    </div>

                    <div className='header-grid-item title'>
                        <Image onClick={toggleSidebar} preview={false} src={logoipsum} />
                    </div>

                    <div className='header-grid-item dark-mode-switch'>
                        <Switch
                            checkedChildren='dark'
                            unCheckedChildren='light'
                        />
                    </div>
                </Space>
            </AntHeader>
        </React.Fragment>
    );
}

export default Header;
