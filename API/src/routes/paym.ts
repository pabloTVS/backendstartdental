import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { PaymentController } from './../controller/PaymentController';
import { Router } from 'express';

const router = Router();

// Get all product
router.get('/',[checkJwt], PaymentController.getAllPayment);

// Get one product
router.get('/:IdFormaPago',[checkJwt, checkRole(['Admin'])], PaymentController.getById);

// Create a new
router.post('/',[checkJwt, checkRole(['Admin'])], PaymentController.new);

// Edit
router.patch('/:IdFormaPago', [checkJwt, checkRole(['Admin'])], PaymentController.edit);

// Delete
router.delete('/:IdFormaPago', [checkJwt, checkRole(['Admin'])], PaymentController.delete);

export default router;