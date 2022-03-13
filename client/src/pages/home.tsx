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

const Home = () => {
    const getAllNumbers = useCallback(async () => {
        //
        console.log('Getting all numbers...');
    }, []);

    return (
        <React.Fragment>
            <Row style={{ padding: '2em' }}>
                <Col span={16} offset={4}>
                    <Header style={{ backgroundColor: 'transparent' }}>
                        <Title style={{ fontFamily: `${theme.font.serif}` }}>Home page</Title>
                    </Header>
                    <Content>
                        <Paragraph>This is the Home Page</Paragraph>

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

export default Home;
