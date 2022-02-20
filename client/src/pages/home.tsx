import React, {
    useCallback
} from 'react';
import {
    Link,
} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const getAllNumbers = useCallback(async () => {
        //
        console.log('Getting all numbers...');
    }, []);

    return (
        <React.Fragment>
            <section>
                <h1>Home page</h1>
                <Link to='/'>GO TO '/'</Link>
            </section>

            <section>
                <button onClick={getAllNumbers}>GET ALL NUMBERS</button>
            </section>
        </React.Fragment>
    );
};

export default Home;
