"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("./../middlewares/role");
var jwt_1 = require("./../middlewares/jwt");
var CustomersController_1 = require("./../controller/CustomersController");
var express_1 = require("express");
var router = express_1.Router();
// Get all product
router.get('/:CodComercial/:Role', [jwt_1.checkJwt], CustomersController_1.CustomerController.getAllCustomer);
// Get one product
router.get('/:IdCliente', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], CustomersController_1.CustomerController.getById);
// Create a new user
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], CustomersController_1.CustomerController.new);
// Edit product
router.patch('/:IdCliente', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], CustomersController_1.CustomerController.edit);
// Delete
router.delete('/:IdCliente', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], CustomersController_1.CustomerController.delete);
exports.default = router;
//# sourceMappingURL=cust.js.map