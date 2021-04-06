import { Router } from 'express';
import auth from './auth';
import user from './user';
import prod from './prod';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/prod', prod);

export default routes;
