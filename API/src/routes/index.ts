import { Router } from 'express';
import auth from './auth';
import user from './user';
import prod from './prod';
import cust from './cust';
import paym from './paym';
import supp from './supp';
import categ from './categ';
import subcat from './subcat';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/prod', prod);
routes.use('/cust', cust);
routes.use('/paym', paym);
routes.use('/supp', supp);
routes.use('/categ',categ);
routes.use('/subcat',subcat);

export default routes;
