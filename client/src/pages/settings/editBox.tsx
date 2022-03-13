import React from 'react';
import {
    Button,
    Col,
    Row,
    Layout,
    Typography,
    Card,
    Switch,
} from 'antd';

import theme from '../../config/theme';

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

const editBox = () => {
    const {
        rootRow,
        header,
        headerDescription,
    } = styles;

    return (
        <React.Fragment>
            <Card
                actions={[
                    null,
                    <Button type='primary'>SAVE</Button>,
                ]}
            >
                <Row style={rootRow}>
                    <Col span={16}>
                        <Paragraph>Dark Mode</Paragraph>
                    </Col>

                    <Col span={6} offset={2}>
                        <Switch
                            checkedChildren='dark'
                            unCheckedChildren='light'
                        />
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
};

export default editBox;
