import React from 'react';
import {
    Link,
} from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <section>
                <h1>Home page</h1>
                <Link to='/'>GO TO '/'</Link>
            </section>
        </React.Fragment>
    );
};

export default Home;
