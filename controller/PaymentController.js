"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Payment_1 = require("../entity/Payment");
var PaymentController = /** @class */ (function () {
    function PaymentController() {
    }
    PaymentController.getAllPayment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentRepository, payment, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paymentRepository = typeorm_1.getRepository(Payment_1.Payments);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, paymentRepository.find()];
                case 2:
                    payment = _a.sent();
                    res.send(payment);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(400).json({ message: e_1.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    //only payment
    PaymentController.getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var IdCliente, paymentRepository, payment, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    IdCliente = req.params.IdCliente;
                    paymentRepository = typeorm_1.getRepository(Payment_1.Payments);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, paymentRepository.findOneOrFail(IdCliente)];
                case 2:
                    payment = _a.sent();
                    res.send(payment);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    res.status(404).json({ message: 'Forma de pago no encontrada.' });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    //new customer
    PaymentController.new = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, Nombre, Tipo, NumPagos, payment, validationOpt, errors, paymentRepository, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, Nombre = _a.Nombre, Tipo = _a.Tipo, NumPagos = _a.NumPagos;
                    payment = new Payment_1.Payments();
                    payment.Nombre = Nombre;
                    payment.Tipo = Tipo;
                    payment.NumPagos = NumPagos;
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(payment, validationOpt)];
                case 1:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    paymentRepository = typeorm_1.getRepository(Payment_1.Payments);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, paymentRepository.save(payment)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_3 = _b.sent();
                    return [2 /*return*/, res.status(409).json(e_3.message)];
                case 5:
                    res.status(201).json({ message: 'Forma de pago creada correctamente' });
                    return [2 /*return*/];
            }
        });
    }); };
    //update
    PaymentController.edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var IdFormaPago, _a, Nombre, Tipo, NumPagos, paymentRepository, payment, e_4, validationOpt, errors, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    IdFormaPago = req.params.IdFormaPago;
                    _a = req.body, Nombre = _a.Nombre, Tipo = _a.Tipo, NumPagos = _a.NumPagos;
                    paymentRepository = typeorm_1.getRepository(Payment_1.Payments);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, paymentRepository.findOneOrFail(IdFormaPago)];
                case 2:
                    payment = _b.sent();
                    payment.Nombre = Nombre;
                    payment.Tipo = Tipo;
                    payment.NumPagos = NumPagos;
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _b.sent();
                    res.status(404).json({ message: 'No se ha devuelto ninguna forma de pago válida.' });
                    return [3 /*break*/, 4];
                case 4:
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(payment, validationOpt)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, paymentRepository.save(payment)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_5 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Error guardando forma de pago.' })];
                case 9:
                    res.status(201).json({ message: 'Forma de pago guardada correctamente.' });
                    return [2 /*return*/];
            }
        });
    }); };
    PaymentController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var IdFormaPago, paymentRepository, payment, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    IdFormaPago = req.params.IdFormaPago;
                    paymentRepository = typeorm_1.getRepository(Payment_1.Payments);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, paymentRepository.findOneOrFail(IdFormaPago)];
                case 2:
                    payment = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_6 = _a.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'Forma de pago inexistente.' })];
                case 4:
                    // Remove customer
                    paymentRepository.delete(IdFormaPago);
                    res.status(201).json({ message: ' Forma de pago borrada' });
                    return [2 /*return*/];
            }
        });
    }); };
    return PaymentController;
}());
exports.PaymentController = PaymentController;
exports.default = PaymentController;
//# sourceMappingURL=PaymentController.js.map