import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
    Pool, PoolClient, PoolConfig,
} from 'pg';

import keys from './keys';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pgClientConfig: PoolConfig = {
    user: keys.pgUser || 'user',
    host: keys.pgHost || 'localhost',
    database: keys.pgDatabase || 'userDB',
    password: keys.pgPassword || 'password',
    port: keys.pgPort && typeof (keys.pgPort) === 'number' ? keys.pgPort : undefined,
};
const pgClient = new Pool(pgClientConfig);

pgClient.on('connect', (client: PoolClient) => {
    //
    client.query('CREATE TABLE IF NOT EXISTS values (number INT)').catch(err => {
        //
        console.error('[POSTGRE] an error occurred while creating the first table:', err);
    });
});

// express ROUTES

app.get('/', (req, res) => {
    res.send('Hello Docker Multicontainer Boilerplate!');
});

// get all values
app.get('/values/all', async (req, res) => {
    const values = await pgClient.query('SELECT * FROM values');

    res.send(values);
});

// insert values
app.post('/values', async (req, res) => {
    if (!req.body.value) {
        return res.send({working: false});
    }

    const values = await pgClient.query('INSERT INTO values(number) VALUES($1)', [req.body.value]);

    res.send({working: true});
});

app.listen(4000, () => {
    console.log(`server running at port 4000`);
});
