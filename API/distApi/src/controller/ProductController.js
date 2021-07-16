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
exports.ProductController = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var viewProducts_1 = require("../entity/viewProducts");
var Product_1 = require("../entity/Product");
var productDetail_1 = require("../entity/productDetail");
var wpTermRelation_1 = require("../entity/wpTermRelation");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.getAllProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var productRepository, products, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(viewProducts_1.viewProducts);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productRepository.createQueryBuilder().select(["product.ID", "product.Articulo", "product.Sku", "product.Imagen", "product.Proveedor", "product.Categoria", "product.Subcategoria"]).
                            from(viewProducts_1.viewProducts, "product").limit(100).getMany()];
                case 2:
                    products = _a.sent();
                    products ? res.send(products) : res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(400).json({ message: e_1.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ProductController.getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Id, product, producto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Id = req.params.Id;
                    product = /** @class */ (function () {
                        function product() {
                        }
                        return product;
                    }());
                    return [4 /*yield*/, typeorm_1.getManager().createQueryBuilder(Product_1.wp_posts, "prod").select(["prod.ID", "prod.post_title Articulo", "prod.post_name Url",
                            "prod.post_content DescLarga", "prod.post_excerpt DescCorta", "prod.post_status Estado"])
                            .addSelect(["det.Sku sku", "det.Categoria", "det.Proveedor", "det.Subcategoria", "det.Imagen"])
                            .innerJoin(viewProducts_1.viewProducts, "det", "prod.ID=det.ID")
                            .addSelect("det1.meta_value precio")
                            .innerJoin(productDetail_1.wp_postmeta, "det1", "prod.ID=det1.post_id and det1.meta_key='_regular_price'")
                            .addSelect("det2.meta_value stock")
                            .innerJoin(productDetail_1.wp_postmeta, "det2", "prod.ID=det2.post_id and det2.meta_key='_stock'")
                            .addSelect("det3.meta_value iva")
                            .innerJoin(productDetail_1.wp_postmeta, "det3", "prod.ID=det3.post_id and det3.meta_key='_tax_class'")
                            .addSelect("det4.term_taxonomy_id IdProveedor")
                            .innerJoin(wpTermRelation_1.wp_term_relationships, "det4", "prod.ID=det4.object_id and det4.term_taxonomy_id in (select term_id FROM wp_term_taxonomy WHERE parent = 23 )")
                            .addSelect("det5.term_taxonomy_id IdCategoria")
                            .innerJoin(wpTermRelation_1.wp_term_relationships, "det5", "prod.ID=det5.object_id and det5.term_taxonomy_id in (select term_id FROM wp_term_taxonomy WHERE parent = 24 )")
                            .addSelect("det6.term_taxonomy_id IdSubCategoria")
                            .innerJoin(wpTermRelation_1.wp_term_relationships, "det6", "prod.ID=det6.object_id and det6.term_taxonomy_id in (select term_id FROM wp_term_taxonomy WHERE parent > 24 )")
                            .addSelect("det7.meta_value precioRebajado")
                            .innerJoin(productDetail_1.wp_postmeta, "det7", "prod.ID=det7.post_id and det7.meta_key='_sale_price'")
                            .where("prod.ID=:id", { id: Id }).getRawOne()];
                case 1:
                    producto = _a.sent();
                    producto ? res.send(producto) : res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.getBySearch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, Art, Prov, Cat, Sub, productRepository, products;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.params, Art = _a.Art, Prov = _a.Prov, Cat = _a.Cat, Sub = _a.Sub;
                    productRepository = typeorm_1.getRepository(viewProducts_1.viewProducts);
                    return [4 /*yield*/, productRepository.createQueryBuilder().select(["product.ID", "product.Articulo", "product.Sku", "product.Precio",
                            "product.IVA", "product.Stock", "product.Imagen", "product.Proveedor", "product.Categoria", "product.Subcategoria"]).
                            from(viewProducts_1.viewProducts, "product").where("product.Articulo like :art", { art: "%" + Art + "%" }).getMany()];
                case 1:
                    products = _b.sent();
                    //where("product.Articulo like ('%':art'%')",{art: Art}).getMany();
                    products ? res.send(products) : res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var view, Id, _a, Articulo, DescCorta, Url, sku, precio, precioRebajado, iva, Estado, stock, IdCategoria, IdSubCategoria, IdProveedor, viewRepository, e_2, validationOpt, errors, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    Id = req.params.Id;
                    _a = req.body, Articulo = _a.Articulo, DescCorta = _a.DescCorta, Url = _a.Url, sku = _a.sku, precio = _a.precio, precioRebajado = _a.precioRebajado, iva = _a.iva, Estado = _a.Estado, stock = _a.stock, IdCategoria = _a.IdCategoria, IdSubCategoria = _a.IdSubCategoria, IdProveedor = _a.IdProveedor;
                    viewRepository = typeorm_1.getRepository(viewProducts_1.viewProducts);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, viewRepository.findOneOrFail(Id)];
                case 2:
                    view = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _b.sent();
                    res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
                    return [3 /*break*/, 4];
                case 4:
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(view, validationOpt)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 21, , 22]);
                    //actualizo el título, tabla wp_post (principal).
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(Product_1.wp_posts).set({ post_title: Articulo, post_excerpt: DescCorta, post_name: Url, post_status: Estado })
                            .where("ID = :id", { id: Id }).execute()];
                case 7:
                    //actualizo el título, tabla wp_post (principal).
                    _b.sent();
                    //actualizo el resto, tabla detalles.
                    //Actualizamos SKU
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: sku })
                            .where("post_id = :id and meta_key = :type", { id: Id, type: '_sku' }).execute()];
                case 8:
                    //actualizo el resto, tabla detalles.
                    //Actualizamos SKU
                    _b.sent();
                    if (!(precioRebajado === "0")) return [3 /*break*/, 11];
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: '' })
                            .where("post_id = :id and meta_key = :type", { id: Id, type: '_sale_price' }).execute()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: precio })
                            .where("post_id = :id and meta_key = :type", { id: Id, type: '_price' }).execute()];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: precioRebajado })
                        .where("post_id = :id and meta_key = :type", { id: Id, type: '_sale_price' }).execute()];
                case 12:
                    _b.sent();
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: precioRebajado })
                            .where("post_id = :id and meta_key = :type", { id: Id, type: '_price' }).execute()];
                case 13:
                    _b.sent();
                    _b.label = 14;
                case 14: 
                //Actualizamos Precio
                return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: precio })
                        .where("post_id = :id and meta_key = :type", { id: Id, type: '_regular_price' }).execute()];
                case 15:
                    //Actualizamos Precio
                    _b.sent();
                    //Actualizamos VAT
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: iva })
                            .where("post_id = :id and meta_key = :type", { id: Id, type: '_tax_class' }).execute()];
                case 16:
                    //Actualizamos VAT
                    _b.sent();
                    //Actualizamos stock
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(productDetail_1.wp_postmeta).set({ meta_value: stock })
                            .where("post_id = :id and meta_key = :type", { id: Id, type: '_stock' }).execute()];
                case 17:
                    //Actualizamos stock
                    _b.sent();
                    //Actualizamos proveedor
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(wpTermRelation_1.wp_term_relationships).set({ term_taxonomy_id: IdProveedor })
                            .where("object_id = :id and term_taxonomy_id in (select term_id from wp_term_taxonomy where parent = 23)", { id: Id })
                            .execute()];
                case 18:
                    //Actualizamos proveedor
                    _b.sent();
                    //Actualizamos categoria
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(wpTermRelation_1.wp_term_relationships).set({ term_taxonomy_id: IdCategoria })
                            .where("object_id = :id and term_taxonomy_id in (select term_id from wp_term_taxonomy where parent = 24)", { id: Id })
                            .execute()];
                case 19:
                    //Actualizamos categoria
                    _b.sent();
                    //Actualizamos subcategoria
                    return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().update(wpTermRelation_1.wp_term_relationships).set({ term_taxonomy_id: IdSubCategoria })
                            .where("object_id = :id and term_taxonomy_id in (select term_id from wp_term_taxonomy where parent > 24)", { id: Id })
                            .execute()];
                case 20:
                    //Actualizamos subcategoria
                    _b.sent();
                    return [3 /*break*/, 22];
                case 21:
                    e_3 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Error guardando el artículo.' })];
                case 22:
                    res.status(201).json({ message: 'Cambios guardados.' });
                    return [2 /*return*/];
            }
        });
    }); };
    return ProductController;
}());
exports.ProductController = ProductController;
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map