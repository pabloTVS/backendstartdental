import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { CustomerController } from './../controller/CustomersController';
import { Router } from 'express';

const router = Router();

// Get all product
router.get('/:CodComercial/:Role',[checkJwt], CustomerController.getAllCustomer);

// Get one product
router.get('/:IdCliente',[checkJwt, checkRole(['Admin'])], CustomerController.getById);

// Create a new user
router.post('/',[checkJwt, checkRole(['Admin'])], CustomerController.new);

// Edit product
router.patch('/:IdCliente', [checkJwt, checkRole(['Admin'])], CustomerController.edit);

// Delete
router.delete('/:IdCliente', [checkJwt, checkRole(['Admin'])], CustomerController.delete);

export default router;