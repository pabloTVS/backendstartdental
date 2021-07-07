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
exports.wp_term_taxonomy = void 0;
var typeorm_1 = require("typeorm");
var wp_term_taxonomy = /** @class */ (function () {
    function wp_term_taxonomy() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], wp_term_taxonomy.prototype, "term_taxonomy_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_term_taxonomy.prototype, "term_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_term_taxonomy.prototype, "taxonomy", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_term_taxonomy.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_term_taxonomy.prototype, "parent", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_term_taxonomy.prototype, "count", void 0);
    wp_term_taxonomy = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['term_taxonomy_id'])
    ], wp_term_taxonomy);
    return wp_term_taxonomy;
}());
exports.wp_term_taxonomy = wp_term_taxonomy;
//# sourceMappingURL=wpTermTaxonomy.js.map