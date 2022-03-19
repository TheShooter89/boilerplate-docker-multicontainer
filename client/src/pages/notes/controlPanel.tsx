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

// ControlPanel types
interface ControlPanelProps {
    searchValue?: string | number | readonly string[] | undefined;
    tagList?: ControlPanelTag[];
    sortBy?: 'oldest' | 'newest';
    onSearchChange?: () => any;
    onSearchEnter?: () => any;
    onTagsChange?: () => any;
    onTagsEnter?: () => any;
    onSortChange?: () => any;
}

interface ControlPanelTag {
    id: string | number;
    name: string;
}

const styles = {
    rootMenu: {
        padding: '1em',
        marginBottom: '1em',
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

const ControlPanel = ({
    searchValue = undefined,
    tagList = [],
    sortBy = 'newest',
    onSearchChange = () => undefined,
    onSearchEnter = () => undefined,
    onTagsChange = () => undefined,
    onTagsEnter = () => undefined,
    onSortChange = () => undefined,
}: ControlPanelProps) => {
    let tagsValue = '';

    tagList.map((el: ControlPanelTag, index: number): ControlPanelTag => {
        //
        if (index < tagList.length - 1) {
            //
            tagsValue += el.name + ', ';
            return el;
        }

        tagsValue += el.name;
        return el;
    });

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
                        defaultValue={searchValue}
                        onChange={onSearchChange}
                        onPressEnter={onSearchEnter}
                    />
                </Menu.Item>

                <Menu.Item>
                    <Input
                        size='large'
                        placeholder='filter by tags...'
                        prefix={<TagsOutlined />}
                        defaultValue={tagsValue}
                        onChange={onTagsChange}
                        onPressEnter={onTagsEnter}
                        allowClear
                    />
                </Menu.Item>

                <Menu.Item>
                    <Radio.Group
                        options={dateSortOptions}
                        optionType='button'
                        buttonStyle='solid'
                        defaultValue={sortBy}
                        onChange={onSortChange}
                    />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    );
};

export default ControlPanel;
