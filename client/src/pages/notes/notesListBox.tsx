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
    CheckCircleTwoTone,
    CheckCircleOutlined,
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
    selectedNotes: Note[] | false;
    toggleSelectedNote?: (selectedNote: Note) => any;
    emptyMessage?: string;
}

const noteListRender = (list: Note[]) => {
    //
    const result = new Map(list.map((note: Note, index: number,) => {
        //
        return (
            [
                note.id,
                <MockNoteCard key={'mock-note-' + index} note={note} />,
            ]
        );
    }));

    /*
    const result = list.map((note: Note, index: number,) => {
        //
        return (
            <MockNoteCard key={'mock-note-' + index} note={note} />
        );
        });
    */

    return result;
};

const styles = {
    column: {
        //backgroundColor: 'yellow',
    },
    message: {
        fontFamily: theme.font.serif,
    },
    selected_note: {
        borderColor: 'blue',
        borderStyle: 'solid',
    },
};

const NotesListBox = ({
    notes = [],
    selectedNotes,
    toggleSelectedNote = (note) => console.log('toggleSelectedNote'),
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

    if (selectedNotes) {
        //
        const selectedNoteMap = new Map(selectedNotes.map(note => {
            return [note.id, note];
        }));
        console.log('selectedNoteMap', selectedNoteMap);

        return (
            <React.Fragment>
                <Row gutter={[16, 16]}>
                    {notes.map((note, index) => {
                        const toggleCheck = (e: React.MouseEvent) => toggleSelectedNote(note);

                        return (
                            <React.Fragment>
                                <Col key={index} style={column} xs={11} sm={11} md={7} lg={5}>
                                    <Content style={selectedNoteMap.has(note.id) ? styles.selected_note : {}}>
                                        {note_list.get(note.id)}
                                    </Content>
                                </Col>
                                <Col key={'check-mark-' + index} style={column} xs={1} sm={1} md={1} lg={1}>
                                    {
                                        selectedNoteMap.has(note.id) ?
                                            <Button
                                                type='text'
                                                shape='circle'
                                                onClick={toggleCheck}
                                                icon={<CheckCircleTwoTone />}
                                                size='large'
                                            />
                                            :
                                            <Button
                                                type='text'
                                                shape='circle'
                                                onClick={toggleCheck}
                                                icon={<CheckCircleOutlined />}
                                                size='large'
                                            />
                                    }
                                </Col>
                            </React.Fragment>
                        );
                    })}
                </Row>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                {notes.map((note, index) => {
                    return (
                        <Col key={index} style={column} xs={12} sm={12} md={8} lg={6}>
                            {note_list.get(note.id)}
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

export default NotesListBox;
