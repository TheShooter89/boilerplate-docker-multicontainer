import React from 'react';
import {
    Link,
} from 'react-router-dom';

const Settings = () => {
    return (
        <React.Fragment>
            <section>
                <h1>Settings page</h1>
                <Link to='/'>GO TO '/'</Link>
            </section>
        </React.Fragment>
    );
};

export default Settings;
