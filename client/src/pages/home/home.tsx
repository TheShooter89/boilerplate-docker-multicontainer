import React from 'react';
import {
    Col,
    Row,
} from 'antd';

import Welcome from './welcome';

const Home = () => {
    return (
        <React.Fragment>
            <Row style={{padding: '2em'}}>
                <Col span={16} offset={4}>
                    <Welcome />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Home;
