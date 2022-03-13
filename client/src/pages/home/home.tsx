import React from 'react';
import {
    Col,
    Row,
} from 'antd';

import Welcome from './welcome';

const styles = {
    rootRow: {
        padding: '2em',
    },
};

const Home = () => {
    const {
        rootRow,
    } = styles;

    return (
        <React.Fragment>
            <Row style={rootRow}>
                <Col span={16} offset={4}>
                    <Welcome />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Home;
