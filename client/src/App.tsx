import React, {
    useState,
    useEffect,
} from 'react';
import {
    Routes,
    Route,
    Link,
    useLocation,
} from 'react-router-dom';
import {
    Layout,
    Menu,
    Image,
    Typography,
} from 'antd';
import {
    SettingOutlined,
    FileTextOutlined,
    DashboardOutlined,
} from '@ant-design/icons';

import logoipsum from './logoipsum.svg';
import logoipsum_small from './logoipsum_small.svg';
import './App.css';

import Home from './pages/home';
import Note from './pages/note';
import Settings from './pages/settings';

import AppHeader from './components/header';

const {
    Sider
} = Layout;
const {
    Text,
} = Typography;

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let location = useLocation();
    const [selectedMenuItem, setSelectedMenuItem] = useState(location.pathname);

    const toggleSidebar = () => {
        return setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        //
        setSelectedMenuItem(location.pathname);
    }, [location]);

    return (
        <React.Fragment>
            <Layout id='mainLayout'>
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
                    <Menu
                        mode='inline'
                        theme='light'
                        selectable={false}
                        selectedKeys={[selectedMenuItem]}
                    >
                        <Menu.Item
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
                        </Menu.Item>
                        <Menu.Item key='1'>
                            {
                                isSidebarOpen
                                    ? <Text>multicontaitanerized app</Text>
                                    : null
                            }
                        </Menu.Item>
                        <Menu.Item key='/' icon={<DashboardOutlined />}>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key='/note' icon={<FileTextOutlined />}>
                            <Link to='/note'>Note</Link>
                        </Menu.Item>
                        <Menu.Item key='/settings' icon={<SettingOutlined />}>
                            <Link to='/settings'>Settings</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <AppHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/note' element={<Note />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </Layout>
            </Layout>
        </React.Fragment>
    );
}

export default App;
