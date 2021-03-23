import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';
const morgan = require ('morgan');
//certificado SSL
//const https = require ('https');
//const path = require ('path');
//const fs = require ('fs');
//fin SSL
const PORT = process.env.PORT || 3000;

createConnection()
  .then(async () => {
    // create express app
    const app = express();
    // Middlewares
    app.use(cors());
    app.use(helmet());
    // Morgan
    app.use(morgan('combined'));

    app.use(express.json());
    // Routes
    app.use('/', routes);

    // start express server
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(error => console.log(error));
