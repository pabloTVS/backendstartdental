import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';
const morgan = require ('morgan');
//certificado SSL
var fs = require('fs');
var https = require('https');
//fin SSL
const PORT = process.env.PORT ||5862;

//creamos una conexión BD, y encapsulamos la llamada https.
/*
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
   // app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

    https.createServer({
      cert: fs.readFileSync('serve.crt'),
      key: fs.readFileSync('serve.key')
    },app).listen(PORT, () => console.log(`Servidor https corriendo en puerto ${PORT}`));
    
    app.get('/', function(req, res){
      res.send('Hola, estas en la pagina inicial');
      console.log('Se recibio una petición get a través de https');
    });
    
  })
  .catch(error => console.log(error));
*/

//sin https.
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
    // Mensaje de bienvinida
    app.get('/', function(req, res){
      res.send('Hola, estas en la pagina inicial');
      console.log('Se recibio una petición get a través de http');
    });
    
  })
  .catch(error => console.log(error));
  