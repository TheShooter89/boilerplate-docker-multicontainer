import React, {
    useCallback
} from 'react';
import {
    Link,
} from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    Col,
    Row,
    Layout,
    Typography,
} from 'antd';

import theme from '../config/theme';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
    Text,
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

const Note = () => {
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
                <Col span={16} offset={4}>
                    <Header style={header}>
                        <Title>Note page</Title>
                    </Header>
                    <Content>
                        <Paragraph style={headerDescription}>This is the Note Page</Paragraph>

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

export default Note;
