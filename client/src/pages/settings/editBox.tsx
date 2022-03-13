import React from 'react';
import {
    Button,
    Col,
    Row,
    Typography,
    Card,
    Switch,
} from 'antd';

import theme from '../../config/theme';

const {
    Paragraph,
} = Typography;

const styles = {
    rootRow: {
        padding: '2em',
    },
    button: {
        fontFamily: `'${theme.font.serif_secondary}'`,
    },
    buttonWrapper: {
        width: '100%',
        paddingRight: '1em',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    label: {
        fontFamily: theme.font.serif,
    },
    action: {
        fontFamily: theme.font.default,
    },
    actionCol: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    card: {
        textAlign: 'right',
    },
};

const SaveButton = () => {
    const {
        button,
        buttonWrapper,
    } = styles;
    return (
        <React.Fragment>
            <div style={buttonWrapper}>
                <Button style={button} type='primary'>SAVE</Button>,
            </div>
        </React.Fragment>
    );
};

const EditBox = () => {
    const {
        rootRow,
        label,
        action,
        actionCol,
    } = styles;

    return (
        <React.Fragment>
            <Card
                actions={[
                    null,
                    <SaveButton />,
                ]}
            >
                <Row style={rootRow}>
                    <Col span={16}>
                        <Paragraph style={label}>Dark Mode</Paragraph>
                    </Col>

                    <Col style={actionCol} span={6} offset={2}>
                        <Switch
                            style={action}
                            checkedChildren='dark'
                            unCheckedChildren='light'
                        />
                    </Col>
                </Row>

                <Row style={rootRow}>
                    <Col span={16}>
                        <Paragraph style={label}>Show archived notes</Paragraph>
                    </Col>

                    <Col style={actionCol} span={6} offset={2}>
                        <Switch
                            style={action}
                            checkedChildren='show'
                            unCheckedChildren='hide'
                            defaultChecked={true}
                        />
                    </Col>
                </Row>

                <Row style={rootRow}>
                    <Col span={16}>
                        <Paragraph style={label}>Cookies</Paragraph>
                    </Col>

                    <Col style={actionCol} span={6} offset={2}>
                        <Switch
                            style={action}
                            checkedChildren='allow'
                            unCheckedChildren='deny'
                            defaultChecked={true}
                        />
                    </Col>
                </Row>

                <Row style={rootRow}>
                    <Col span={16}>
                        <Paragraph style={label}>Notifications</Paragraph>
                    </Col>

                    <Col style={actionCol} span={6} offset={2}>
                        <Switch
                            style={action}
                            checkedChildren='on'
                            unCheckedChildren='off'
                        />
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
};

export default EditBox;
