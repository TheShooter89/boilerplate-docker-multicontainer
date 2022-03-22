import React, {
    useCallback
} from 'react';
import {
    Link,
} from 'react-router-dom';
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
    Title,
    Paragraph,
} = Typography;

// MockNoteCard types
export interface MockNoteCardProps {
    note: Note;
    key?: string | number | undefined;
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

interface EditButtonProps {
    toggleEdit: () => any | void;
    key?: number | string;
};
const EditButton = ({toggleEdit, key}: EditButtonProps) => {
    return (
        <React.Fragment>
            <Button
                type='link'
                icon={<FormOutlined />}
                onClick={toggleEdit}
                key={key}
            />
        </React.Fragment>
    );
};

interface DeleteButtonProps {
    deleteNote: () => any | void;
    key?: number | string;
};
const DeleteButton = ({deleteNote, key, }: DeleteButtonProps) => {
    return (
        <React.Fragment>
            <Button
                type='link'
                icon={<DeleteOutlined />}
                onClick={deleteNote}
                key={key}
            />
        </React.Fragment>
    );
};

const noteTagsRender = (tags: Tag[]) => {
    //
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
        //
        const color = getRandomColor();
        const key = [index, tag.name, color].join('-');
        return <AntTag color={color} key={key}>#{tag.name}</AntTag>
    });

    return result;
};

const MockNoteCard = ({
    note,
    key = 0,
}: MockNoteCardProps) => {
    const {
        rootMenu,
    } = styles;

    const taglist = noteTagsRender(note.tags);
    const noteExtra = [
        <EditButton toggleEdit={() => console.log('toggle edit')} />,
        <DeleteButton deleteNote={() => console.log('delete note')} />,
    ];

    return (
        <React.Fragment>
            <Card
                title='Notes Title'
                extra={noteExtra}
                actions={taglist}
                key={key}
            >
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quam sit amet elementum commodo. Maecenas consequat, lectus et blandit sollicitudin, ante erat maximus risus, eget varius nulla risus vel augue. Pellentesque dolor urna, consectetur lacinia mi ornare, pharetra imperdiet diam. Duis elementum elit nunc, eu sagittis odio ultricies in. Morbi luctus mollis dolor quis volutpat. Vivamus at maximus urna, vitae eleifend felis. Nulla bibendum vehicula eleifend. Aenean aliquet interdum enim. Nam consequat purus vitae dui fermentum, at vestibulum ipsum luctus. Suspendisse porta lorem quis suscipit tincidunt. Donec sed felis a lacus pulvinar vestibulum vel a mauris. Aenean at sem eget quam semper laoreet ac non massa. Maecenas ullamcorper pharetra turpis vitae tempor. Ut imperdiet erat nec mattis pretium. Vestibulum nulla nisi, elementum id arcu ut, vehicula condimentum tortor. Cras vestibulum diam at tristique aliquam.</Paragraph>
            </Card>
        </React.Fragment>
    );
};

export default MockNoteCard;
