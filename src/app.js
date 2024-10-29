import express from 'express';
"dotenv/config";
import explorer_router from './routers/explorer_router.js';
import species_router from './routers/species_router.js';
import expedition_router from './routers/expedition_router.js';

import db from './config/dbConfig.js';

const app = express();


db();
app.use(express.json());

app.use('/explorer', explorer_router);
app.use('/species', species_router);
app.use('/expedition', expedition_router);

app.listen(3001, () => console.log('Server is running on port 3001'));