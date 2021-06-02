import { Router } from 'express';
import auth from './auth';
import user from './user';
import prod from './prod';
import cust from './cust';
import paym from './paym';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/prod', prod);
routes.use('/cust', cust);
routes.use('/paym', paym);

export default routes;
