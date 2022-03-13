import React from 'react';
import {
    Col,
    Row,
    Layout,
    Typography,
} from 'antd';

import theme from '../../config/theme';

import EditBox from './editBox';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
} = Typography;

const styles = {
    rootRow: {
        padding: '2em',
    },
    header: {
        backgroundColor: 'transparent',
        fontFamily: theme.font.serif,
    },
};

const Settings = () => {
    const {
        rootRow,
        header,
    } = styles;

    return (
        <React.Fragment>
            <Row style={rootRow}>
                <Col span={16} offset={4}>
                    <Header style={header}>
                        <Title>Settings page</Title>
                    </Header>

                    <Content>
                        <EditBox />
                    </Content>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Settings;
