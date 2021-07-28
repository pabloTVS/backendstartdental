"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("./../middlewares/role");
var jwt_1 = require("./../middlewares/jwt");
var UserController_1 = require("./../controller/UserController");
var express_1 = require("express");
var router = express_1.Router();
// Get all users
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], UserController_1.UserController.getAll);
//router.get('/', UserController.getAll);
// Get one user
router.get('/:id', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], UserController_1.UserController.getById);
// Create a new user
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], UserController_1.UserController.new);
// Edit user
router.patch('/:id', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], UserController_1.UserController.edit);
// Delete
router.delete('/:id', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], UserController_1.UserController.delete);
// change password
router.patch('/change/:id', [jwt_1.checkJwt, role_1.checkRole(['Admin'])], UserController_1.UserController.changePassword);
exports.default = router;
//# sourceMappingURL=user.js.map