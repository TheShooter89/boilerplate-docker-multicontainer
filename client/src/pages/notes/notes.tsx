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
    Layout,
    Typography,
} from 'antd';

import theme from '../../config/theme';

import ControlPanel from './controlPanel';
import NotesListBox from './notesListBox';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
} = Typography;

const MOCK_NOTES_LIST: Note[] = [
    {
        id: 'test1',
        title: 'testing title',
        tags: [
            {
                id: 0,
                name: 'slava',
            },
            {
                id: 1,
                name: 'ukraini',
            },
        ],
        body: 'Duis elementum elit nunc, eu sagittis odio ultricies in. Morbi luctus mollis dolor quis volutpat. Vivamus at maximus urna, vitae eleifend felis. Nulla bibendum vehicula eleifend.',
    },
    {
        id: 'test2',
        title: 'prova',
        tags: [
            {
                id: 0,
                name: 'war',
            },
            {
                id: 1,
                name: 'victory',
            },
            {
                id: 2,
                name: 'peace',
            },
        ],
        body: 'Suspendisse porta lorem quis suscipit tincidunt. Donec sed felis a lacus pulvinar vestibulum vel a mauris. Aenean at sem eget quam semper laoreet ac non massa. Maecenas ullamcorper pharetra turpis vitae tempor. Ut imperdiet erat nec mattis pretium. Vestibulum nulla nisi, elementum id arcu ut, vehicula condimentum tortor',
    },
    {
        id: 'test3',
        title: 'a new title',
        tags: [
            {
                id: 0,
                name: 'putin',
            },
            {
                id: 3,
                name: 'murderer',
            },
        ],
        body: 'Pellentesque dolor urna, consectetur lacinia mi ornare, pharetra imperdiet diam. Duis elementum elit nunc, eu sagittis odio ultricies in.',
    },
    {
        id: 'test4',
        title: 'glory to Ukraine',
        tags: [
            {
                id: 0,
                name: 'slava',
            },
            {
                id: 1,
                name: 'ukraini',
            },
            {
                id: 2,
                name: 'zelenskiy',
            },
            {
                id: 3,
                name: 'kyiv',
            },
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quam sit amet elementum commodo. Maecenas consequat, lectus et blandit sollicitudin, ante erat maximus risus, eget varius nulla risus vel augue. Pellentesque dolor urna, consectetur lacinia mi ornare, pharetra imperdiet diam. Duis elementum elit nunc, eu sagittis odio ultricies in. ',
    },
    {
        id: 'test5',
        title: 'stinger love',
        tags: [
            {
                id: 0,
                name: 'nato',
            },
            {
                id: 5,
                name: 'turkey',
            },
        ],
        body: 'Ut imperdiet erat nec mattis pretium. Vestibulum nulla nisi, elementum id arcu ut, vehicula condimentum tortor. Cras vestibulum diam at tristique aliquam.',
    },
    {
        id: 'test6',
        title: 'testing antd',
        tags: [
            {
                id: 0,
                name: 'slava',
            },
            {
                id: 6,
                name: 'ukraini',
            },
        ],
        body: 'Pellentesque dolor urna, consectetur lacinia mi ornare, pharetra imperdiet diam. Duis elementum elit nunc, eu sagittis odio ultricies in. Morbi luctus mollis dolor quis volutpat. Vivamus at maximus urna, vitae eleifend felis. Nulla bibendum vehicula eleifend. Aenean aliquet interdum enim. Nam consequat purus vitae dui fermentum, at vestibulum ipsum luctus. Suspendisse porta lorem quis suscipit tincidunt. Donec sed felis a lacus pulvinar vestibulum vel a mauris.',
    },
];

const styles = {
    rootRow: {
        padding: '2em',
    },
    header: {
        backgroundColor: 'transparent',
        fontFamily: theme.font.serif,
    },
    headerDescription: {
        fontFamily: theme.font.serif,
    },
};

const Notes = () => {
    const {
        rootRow,
        header,
        headerDescription,
    } = styles;

    const getAllNumbers = useCallback(async () => {
        //
        console.log('Getting all numbers...');
    }, []);

    return (
        <React.Fragment>
            <Row style={rootRow}>
                <Col span={20} offset={2}>
                    <Header style={header}>
                        <Title>Notes</Title>
                    </Header>
                    <Content>
                        <Paragraph style={headerDescription}>This is the Notes Page</Paragraph>

                        <ControlPanel tagList={[
                            {
                                id: 0,
                                name: 'Zelensky',
                            },
                            {
                                id: 1,
                                name: 'Putin',
                            },
                            {
                                id: 2,
                                name: 'von Der Leyen',
                            },
                        ]} />

                        <NotesListBox notes={MOCK_NOTES_LIST} emptyMessage='whoops...no notes found!' />
                    </Content>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Notes;
