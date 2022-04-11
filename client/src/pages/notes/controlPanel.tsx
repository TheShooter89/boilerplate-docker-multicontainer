import React, {
    ChangeEvent,
    useState
} from 'react';
import {
    Input,
    Radio,
    Menu,
    RadioChangeEvent,
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
    editing?: boolean;
    selectedNotes?: number;
    totalNotes?: number;
    searchControls?: ControlPanelSearchControls;
    tagsControls?: ControlPanelTagsControls;
    editControls?: ControlPanelEditControls;
}

// should be extended from a base interface, I know
// kept duplication just for clarity purpose
export interface ControlPanelSearchControls {
    onChange: (e: ChangeEvent) => any;
    onEnter: (e: any) => any;
    onSortChange: (e: RadioChangeEvent) => any;
}

export interface ControlPanelTagsControls {
    onChange: (e: ChangeEvent) => any;
    onEnter: (e: any) => any;
}

export interface ControlPanelEditControls {
    toggleEdit: () => any;
    cancelEdit: () => any;
    selectAll: () => any;
    undoSelection: () => any;
    deleteSelected: () => any;
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
    editing = false,
    selectedNotes = 0,
    totalNotes = 19,
    editControls = {
        toggleEdit: () => console.log('toggleEdit'),
        cancelEdit: () => console.log('cancelEdit'),
        selectAll: () => console.log('selectAll'),
        undoSelection: () => console.log('selectAll'),
        deleteSelected: () => console.log('deleteSelected'),
    },
    searchControls = {
        onChange: (e) => console.log('onChange - e:', e),
        onEnter: (e) => console.log('onEnter - e:', e),
        onSortChange: (e) => console.log('onSortChange - e:', e),
    },
    tagsControls = {
        onChange: (e) => console.log('onChange - e:', e),
        onEnter: (e) => console.log('onEnter - e:', e),
    },
}: ControlPanelProps) => {
    const [isEditing, setEditing] = useState(editing);

    const handleSearching = {
        change: (e: ChangeEvent) => {
            console.log('handleSearching - change')
            searchControls.onChange(e);
        },
        enter: (e: ChangeEvent) => {
            console.log('handleSearching - enter - e:', e)
            searchControls.onEnter(e);
        },
        sort: (e: RadioChangeEvent) => {
            console.log('handleSearching - sort')
            searchControls.onSortChange(e);
        },
    };

    const handleEditing = {
        toggle: (e: React.MouseEvent<HTMLButtonElement>) => {
            editControls.toggleEdit();
            setEditing(!isEditing);
        },
        cancel: (e: React.MouseEvent<HTMLButtonElement>) => {
            editControls.cancelEdit();
            setEditing(!isEditing);
        },
        selectAll: (e: React.MouseEvent<HTMLButtonElement>) => {
            editControls.selectAll();
        },
        undoSelection: (e: React.MouseEvent<HTMLButtonElement>) => {
            editControls.undoSelection();
        },
        deleteSelected: (e: React.MouseEvent<HTMLButtonElement>) => {
            editControls.deleteSelected();
        },
    };

    const handleTagSearch = {
        change: (e: ChangeEvent) => {
            console.log('handleSearching - change')
            //onSearchChange(e);
            tagsControls.onChange(e);
        },
        enter: (e: React.KeyboardEvent<HTMLInputElement>) => {
            console.log('handleSearching - enter - e:', e)
            //onSearchEnter();
            tagsControls.onEnter(e);
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
                        onChange={searchControls.onChange}
                        onPressEnter={searchControls.onEnter}
                    />
                </Menu.Item>

                <Menu.Item>
                    <Input
                        size='large'
                        placeholder='filter by tags...'
                        prefix={<TagsOutlined />}
                        defaultValue={tagsValue}
                        onChange={handleTagSearch.change}
                        onPressEnter={handleTagSearch.enter}
                        allowClear
                    />
                </Menu.Item>

                <Menu.Item>
                    <Radio.Group
                        options={dateSortOptions}
                        optionType='button'
                        buttonStyle='solid'
                        defaultValue={sortBy}
                        onChange={handleSearching.sort}
                    />
                </Menu.Item>

                <Menu.Item style={editActions}>
                    <BulkActionsControlItem
                        totalItems={totalNotes}
                        selectedItems={selectedNotes}
                        selectionActive={isEditing}
                        toggleEdit={handleEditing.toggle}
                        onCancel={handleEditing.cancel}
                        onSelectAll={handleEditing.selectAll}
                        onUndoSelection={handleEditing.undoSelection}
                        onDeleteSelected={handleEditing.deleteSelected}
                    />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    );
};

export default ControlPanel;
