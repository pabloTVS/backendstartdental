"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wp_postmeta = void 0;
var typeorm_1 = require("typeorm");
var wp_postmeta = /** @class */ (function () {
    function wp_postmeta() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], wp_postmeta.prototype, "meta_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_postmeta.prototype, "post_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_postmeta.prototype, "meta_key", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_postmeta.prototype, "meta_value", void 0);
    wp_postmeta = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['meta_id'])
    ], wp_postmeta);
    return wp_postmeta;
}());
exports.wp_postmeta = wp_postmeta;
//# sourceMappingURL=productDetail.js.map