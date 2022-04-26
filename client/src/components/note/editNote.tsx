import React from 'react';
import {
    Button,
    Typography,
    Card,
    Tag as AntTag,

} from 'antd';
import {
    DeleteOutlined,
    FormOutlined,

} from '@ant-design/icons';

import theme from '../../config/theme';

const {
    Paragraph,
} = Typography;

export interface EditNoteProps {
    note: Note;

}

const styles = {
    rootCard: {
        fontFamily: theme.font.serif,
    },

};

interface EditButtonProps {
    toggleEdit: () => any | void;

};
const EditButton = ({toggleEdit, }: EditButtonProps) => {
    return (
        <React.Fragment>
            <Button
                type='link'
                icon={<FormOutlined />}
                onClick={toggleEdit}
            />
        </React.Fragment>

    );

};

interface DeleteButtonProps {
    deleteNote: () => any | void;

};
const DeleteButton = ({deleteNote, }: DeleteButtonProps) => {
    return (
        <React.Fragment>
            <Button
                type='link'
                icon={<DeleteOutlined />}
                onClick={deleteNote}
            />
        </React.Fragment>

    );

};

const noteTagsRender = (tags: Tag[]) => {
    const colors = [
        'red',
        'volcano',
        'magenta',
        'orange',
        'purple',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',

    ];
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const result = tags.map((tag: Tag, index: number) => {
        const color = getRandomColor();
        const key = [index, tag.name, color].join('-');
        return <AntTag color={color} key={key}>#{tag.name}</AntTag>

    });

    return result;

};

const EditNote = ({
    note,

}: EditNoteProps) => {
    const {
        rootCard,

    } = styles;

    const taglist = noteTagsRender(note.tags);
    const noteExtra = [
        <EditButton key='edit_button' toggleEdit={() => console.log('toggle edit')} />,
        <DeleteButton key='delete_button' deleteNote={() => console.log('delete note')} />,

    ];

    return (
        <React.Fragment>
            <Card
                title={note.title}
                extra={noteExtra}
                actions={taglist}
                style={rootCard}
            >
                <Paragraph>{note.body}</Paragraph>
            </Card>
        </React.Fragment>

    );

};

export default EditNote;
