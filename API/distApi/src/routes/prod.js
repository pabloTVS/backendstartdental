"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("./../middlewares/jwt");
var ProductController_1 = require("./../controller/ProductController");
var express_1 = require("express");
var router = express_1.Router();
// Get all users
router.get('/', [jwt_1.checkJwt], ProductController_1.ProductController.getAllProducts);
// Get one user
//router.get('/:id',[checkJwt, checkRole(['Admin'])], UserController.getById);
// Create a new user
//router.post('/',[checkJwt, checkRole(['Admin'])], UserController.new);
// Edit user
//router.patch('/:id', [checkJwt, checkRole(['Admin'])], UserController.edit);
// Delete
//router.delete('/:id', [checkJwt, checkRole(['Admin'])], UserController.delete);
exports.default = router;
//# sourceMappingURL=prod.js.map