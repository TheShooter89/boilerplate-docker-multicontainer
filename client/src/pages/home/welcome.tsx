import React, {
    useCallback
} from 'react';
import {
    Link,
} from 'react-router-dom';
import {
    Button,
    Layout,
    Typography,
} from 'antd';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
} = Typography;

const Welcome = () => {
    const getAllNumbers = useCallback(async () => {
        //
        console.log('Getting all numbers...');
    }, []);

    return (
        <React.Fragment>
            <Header style={{backgroundColor: 'transparent'}}>
                <Title>Logoipsum Notes App</Title>
            </Header>
            <Content>
                <Paragraph>This is a small boilerplate app showcasing a multicontainerized docker app featuring a Postgre database powering a node express backend serving a simple fully functional client React app that allow for basic interaction with notes, creating, editing, searching and filtering by tags</Paragraph>

                <Paragraph>
                    <Button type='primary' onClick={getAllNumbers}>GET ALL NUMBERS</Button>
                </Paragraph>

                <Paragraph>
                    <Link to='/'>
                        <Button type='primary'>GO TO '/'</Button>
                    </Link>
                </Paragraph>
            </Content>
        </React.Fragment>
    );
};

export default Welcome;
