import React, {
    useCallback
} from 'react';
import {
    Link,
} from 'react-router-dom';
import {
    Button,
    Col,
    Row,
    Input,
    Radio,
    Layout,
    Typography,
    Menu,
} from 'antd';
import {
    FileTextOutlined,
    TagsOutlined,
} from '@ant-design/icons';

import theme from '../../config/theme';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
} = Typography;

const styles = {
    rootMenu: {
        padding: '1em',
    },
    header: {
        backgroundColor: 'transparent',
        fontFamily: theme.font.serif,
    },
    headerDescription: {
        fontFamily: theme.font.serif,
    },
};

const dateSortOptions = [
    {
        label: 'newest',
        value: 'newest',
    },
    {
        label: 'oldest',
        value: 'oldest',
    },
];

const ControlPanel = () => {
    const {
        rootMenu,
    } = styles;

    return (
        <React.Fragment>
            <Menu
                mode='horizontal'
                selectable={false}
                style={rootMenu}
            >
                <Menu.Item>
                    <Input
                        size='large'
                        placeholder='search notes...'
                        prefix={<FileTextOutlined />}
                    />
                </Menu.Item>

                <Menu.Item>
                    <Input
                        size='large'
                        placeholder='filter by tags...'
                        prefix={<TagsOutlined />}
                    />
                </Menu.Item>

                <Menu.Item>
                    <Radio.Group
                        options={dateSortOptions}
                        optionType='button'
                        buttonStyle='solid'
                    />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    );
};

export default ControlPanel;
