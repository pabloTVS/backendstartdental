"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("./../middlewares/role");
var jwt_1 = require("./../middlewares/jwt");
var PaymentController_1 = require("./../controller/PaymentController");
var express_1 = require("express");
var router = express_1.Router();
// Get all product
router.get('/', [jwt_1.checkJwt], PaymentController_1.PaymentController.getAllPayment);
// Get one product
router.get('/:IdFormaPago', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], PaymentController_1.PaymentController.getById);
// Create a new
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], PaymentController_1.PaymentController.new);
// Edit
router.patch('/:IdFormaPago', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], PaymentController_1.PaymentController.edit);
// Delete
router.delete('/:IdFormaPago', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], PaymentController_1.PaymentController.delete);
exports.default = router;
//# sourceMappingURL=paym.js.map