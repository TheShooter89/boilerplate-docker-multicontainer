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

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
} = Typography;

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

                        <Paragraph>
                            <Button type='primary' onClick={getAllNumbers}>GET ALL NUMBERS</Button>
                        </Paragraph>

                        <Paragraph>
                            <Link to='/'>
                                <Button type='primary'>GO TO '/'</Button>
                            </Link>
                        </Paragraph>
                    </Content>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Notes;
