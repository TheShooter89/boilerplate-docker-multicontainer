import React from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    Menu as AntMenu,
    Image,
    Space,
    Typography,
} from 'antd';
import {
    SettingOutlined,
    FileTextOutlined,
    DashboardOutlined,
} from '@ant-design/icons';

import theme from '../../config/theme';

import logoipsum from '../../assets/logoipsum.svg';
import logoipsum_small from '../../assets/logoipsum_small.svg';

const {
    Paragraph,
} = Typography;

const styles = {
    menuStyle: {
        fontFamily: theme.font.serif,
    },
};

const MenuDescriptionItem = () => {
    //
    return (
        <React.Fragment>
            <Space>
                <Paragraph ellipsis={false}>multicontaitanerized app</Paragraph>
            </Space>
        </React.Fragment>
    );
};

const Menu = ({
    isSidebarOpen = false,
    toggleSidebar = () => console.log('toggling sidebar!'),
    selectedMenuItem = '',
}) => {
    const {
        menuStyle,
    } = styles;

    return (
        <React.Fragment>
            <AntMenu
                style={menuStyle}
                mode='inline'
                theme='light'
                selectable={false}
                selectedKeys={[selectedMenuItem]}
            >
                <AntMenu.Item
                    key='0'
                    className={
                        isSidebarOpen
                            ? ''
                            : 'logo-small'
                    }
                    onClick={toggleSidebar}
                >
                    <Image
                        preview={false}
                        src={
                            isSidebarOpen
                                ? logoipsum
                                : logoipsum_small
                        }
                    />
                </AntMenu.Item>
                <AntMenu.Item key='1'>
                    {
                        isSidebarOpen
                            ? <MenuDescriptionItem />
                            : null
                    }
                </AntMenu.Item>
                <AntMenu.Item key='/' icon={<DashboardOutlined />}>
                    <Link to='/'>HOME</Link>
                </AntMenu.Item>
                <AntMenu.Item key='/note' icon={<FileTextOutlined />}>
                    <Link to='/note'>NOTE</Link>
                </AntMenu.Item>
                <AntMenu.Item key='/settings' icon={<SettingOutlined />}>
                    <Link to='/settings'>SETTINGS</Link>
                </AntMenu.Item>
            </AntMenu>
        </React.Fragment>
    );
};

export default Menu;
