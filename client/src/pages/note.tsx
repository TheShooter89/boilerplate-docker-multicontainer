import React from 'react';
import {
    Link,
} from 'react-router-dom';

const Note = () => {
    return (
        <React.Fragment>
            <section>
                <h1>Note page</h1>
                <Link to='/'>GO TO '/'</Link>
            </section>
        </React.Fragment>
    );
};

export default Note;
