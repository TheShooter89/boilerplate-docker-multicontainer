import React, {
    ChangeEvent,
    useState
} from 'react';
import {
    Input,
    Radio,
    Menu,
} from 'antd';
import {
    FileTextOutlined,
    TagsOutlined,
} from '@ant-design/icons';

import theme from '../../config/theme';

import BulkActionsControlItem from './bulkActionsControlItem';


// ControlPanel types
export interface ControlPanelProps {
    searchValue?: string | number | readonly string[] | undefined;
    tagList?: ControlPanelTag[];
    sortBy?: 'oldest' | 'newest';
    onSearchChange?: (e: ChangeEvent) => any;
    onSearchEnter?: () => any;
    onTagsChange?: (e: ChangeEvent) => any;
    onTagsEnter?: () => any;
    onSortChange?: () => any;
    onEditCancel?: () => any;
    toggleSelection?: () => any;
}

export interface ControlPanelTag {
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
    editActions: {
        //
        marginLeft: 'auto',
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
    onSearchChange = (e) => undefined,
    onSearchEnter = () => undefined,
    onTagsChange = (e) => undefined,
    onTagsEnter = () => undefined,
    onSortChange = () => undefined,
    onEditCancel = () => undefined,
    toggleSelection = () => undefined,
}: ControlPanelProps) => {
    const [isEditing, setEditing] = useState(false);
    const [editSelectionCount, setEditSelectionCount] = useState(0);
    const [editSelectionTotalItems, setEditSelectionTotalItems] = useState(16);
    const [editSelection, setEditSelection] = useState<Array<any>>([]);

    const handleEditing = {
        toggle: (e: React.MouseEvent<HTMLButtonElement>) => {
            toggleSelection();
            setEditing(!isEditing);
        },
        cancel: (e: React.MouseEvent<HTMLButtonElement>) => {
            onEditCancel();
            setEditSelectionCount(0);
            setEditing(!isEditing);
        },
        selectAll: (e: React.MouseEvent<HTMLButtonElement>) => {
            setEditSelectionCount(editSelectionTotalItems);
        },
        undoSelection: (e: React.MouseEvent<HTMLButtonElement>) => {
            setEditSelectionCount(0);
        },
    };

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
        editActions,
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

                <Menu.Item style={editActions}>
                    <BulkActionsControlItem
                        totalItems={editSelectionTotalItems}
                        selectedItems={editSelectionCount}
                        selectionActive={isEditing}
                        toggleEdit={handleEditing.toggle}
                        onCancel={handleEditing.cancel}
                        onSelectAll={handleEditing.selectAll}
                        onUndoSelection={handleEditing.undoSelection}
                    />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    );
};

export default ControlPanel;
