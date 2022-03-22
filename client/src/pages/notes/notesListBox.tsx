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

const mockTags = [
    {
        id: 0,
        name: 'slava'
    },
    {
        id: 1,
        name: 'ukraine'
    },
    {
        id: 2,
        name: 'invasion'
    },
    {
        id: 3,
        name: 'war'
    },
    {
        id: 4,
        name: 'victory'
    },
];

const mockNote: Note = {
    id: 0,
    title: 'testing mock note',
    tags: mockTags,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quam sit amet elementum commodo. Maecenas consequat, lectus et blandit sollicitudin, ante erat maximus risus, eget varius nulla risus vel augue. Pellentesque dolor urna, consectetur lacinia mi ornare, pharetra imperdiet diam. Duis elementum elit nunc, eu sagittis odio ultricies in. Morbi luctus mollis dolor quis volutpat. Vivamus at maximus urna, vitae eleifend felis. Nulla bibendum vehicula eleifend. Aenean aliquet interdum enim. Nam consequat purus vitae dui fermentum, at vestibulum ipsum luctus. Suspendisse porta lorem quis suscipit tincidunt. Donec sed felis a lacus pulvinar vestibulum vel a mauris. Aenean at sem eget quam semper laoreet ac non massa. Maecenas ullamcorper pharetra turpis vitae tempor. Ut imperdiet erat nec mattis pretium. Vestibulum nulla nisi, elementum id arcu ut, vehicula condimentum tortor. Cras vestibulum diam at tristique aliquam.'
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

    notes.map((note: Note, index: number) => {
        //
        console.log(`note #${index}:`, note)
    });

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col style={column} xs={12} sm={12} md={8} lg={6}>
                    <MockNoteCard note={mockNote} />
                </Col>
                <Col style={column} xs={12} sm={12} md={8} lg={6}>
                    <MockNoteCard note={mockNote} />
                </Col>
                <Col style={column} xs={12} sm={12} md={8} lg={6}>
                    <MockNoteCard note={mockNote} />
                </Col>
                <Col style={column} xs={12} sm={12} md={8} lg={6}>
                    <MockNoteCard note={mockNote} />
                </Col>
                <Col style={column} xs={12} sm={12} md={8} lg={6}>
                    <MockNoteCard note={mockNote} />
                </Col>
                <Col style={column} xs={12} sm={12} md={8} lg={6}>
                    <MockNoteCard note={mockNote} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default NotesListBox;
