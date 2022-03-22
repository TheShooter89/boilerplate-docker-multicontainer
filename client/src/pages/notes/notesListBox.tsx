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

import MockNoteCard from './mockNoteCard';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
} = Typography;

// NotesListBox types
export interface NotesListBoxProps {
    notes: Note[] | undefined;
    emptyMessage?: string;
}

const noteListRender = (list: Note[]) => {
    //
    const result = list.map((note: Note, index: number,) => {
        //
        return (
            <MockNoteCard key={'mock-note-' + index} note={note} />
        );
    });

    return result;
};

const styles = {
    column: {
        //backgroundColor: 'yellow',
    },
    message: {
        fontFamily: theme.font.serif,
    },
};

const NotesListBox = ({
    notes = [],
    emptyMessage = 'no notes to show...',
}: NotesListBoxProps) => {
    const {
        column,
        message,
    } = styles;

    if (notes.length <= 0) {
        return (
            <React.Fragment>
                <Paragraph>
                    <Title style={message}>{emptyMessage}</Title>
                </Paragraph>
            </React.Fragment>
        );
    }

    const note_list = noteListRender(notes);
    console.log('note_list_', note_list);

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                {note_list.map((note, index) => {
                    return (
                        <Col key={index} style={column} xs={12} sm={12} md={8} lg={6}>
                            {note}
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

export default NotesListBox;
