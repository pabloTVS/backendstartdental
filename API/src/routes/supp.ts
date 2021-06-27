import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { SupplierController } from './../controller/SupplierController';
import { Router } from 'express';

const router = Router();

// Get all product
router.get('/',[checkJwt], SupplierController.getAllSuppliers);

// Get one product
//router.get('/:Id',[checkJwt, checkRole(['Admin'])], ProductController.getById);

// Get by search
//router.get('/search/:Art',[checkJwt, checkRole(['Admin'])], ProductController.getBySearch);

// Create a new product
//router.post('/',[checkJwt, checkRole(['Admin'])], UserController.new);

// Edit product
//router.patch('/:Id', [checkJwt, checkRole(['Admin'])], ProductController.edit);

// Delete
//router.delete('/:id', [checkJwt, checkRole(['Admin'])], UserController.delete);

export default router;