"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("./../middlewares/jwt");
var SupplierController_1 = require("./../controller/SupplierController");
var express_1 = require("express");
var router = express_1.Router();
// Get all product
router.get('/', [jwt_1.checkJwt], SupplierController_1.SupplierController.getAllSuppliers);
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
exports.default = router;
//# sourceMappingURL=supp.js.map