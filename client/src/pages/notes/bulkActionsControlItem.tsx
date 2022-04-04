import React from 'react';
import {
    Button,
    Space,
} from 'antd';
import {
    DeleteOutlined,
    PlusSquareOutlined,
    CloseOutlined,
    MinusSquareOutlined,
    CheckOutlined,
} from '@ant-design/icons';

import theme from '../../config/theme';

// BulkActionsControlItem types
export interface BulkActionsControlItemProps {
    selectionActive?: boolean;
    selectedItems?: number;
    totalItems?: number;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onUndoSelection?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onSelectAll?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onDeleteSelected?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    toggleEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const styles = {
    undoButton: {
        //fontFamily: theme.font.serif,
        backgroundColor: 'orange',
        borderColor: 'orange',
    },
    selectAllButton: {
        //fontFamily: theme.font.serif,
        backgroundColor: 'orange',
        borderColor: 'orange',
    },
};

const BulkActionsControlItem = ({
    selectionActive,
    selectedItems = 0,
    totalItems = 0,
    onCancel = (e) => console.log('onCancel'),
    toggleEdit = (e) => console.log('toggleEdit'),
    onSelectAll = (e) => console.log('onSelectAll'),
    onUndoSelection = (e) => console.log('onUndoSelection'),
}: BulkActionsControlItemProps) => {
    const {
        undoButton,
    } = styles;

    if (!selectionActive) {
        return (
            <Button
                title='Select Notes'
                type='primary'
                onClick={toggleEdit}
                icon={<PlusSquareOutlined />}
            >
                Select Notes
            </Button>
        );
    }

    return (
        <React.Fragment>
            <Space>
                <Button
                    type='primary'
                    style={undoButton}
                    title='Undo selection'
                    onClick={onUndoSelection}
                    icon={<MinusSquareOutlined />}
                >
                    Undo selection ({selectedItems})
                </Button>

                <Button
                    type='primary'
                    title='Select all'
                    onClick={onSelectAll}
                    icon={<CheckOutlined />}
                >
                    Select all ({totalItems})
                </Button>

                <Button
                    type='primary'
                    title='Delete selected'
                    icon={<DeleteOutlined />}
                    danger
                >
                    Delete selected ({selectedItems})
                </Button>

                <Button
                    type='text'
                    title='Cancel'
                    onClick={onCancel}
                    icon={<CloseOutlined />}
                >
                    Cancel
                </Button>
            </Space>
        </React.Fragment>
    );
};

export default BulkActionsControlItem;
