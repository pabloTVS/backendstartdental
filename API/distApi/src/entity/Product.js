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
exports.wp_posts = void 0;
var typeorm_1 = require("typeorm");
var productDetail_1 = require("./productDetail");
var wp_posts = /** @class */ (function () {
    function wp_posts() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], wp_posts.prototype, "ID", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return productDetail_1.wp_postmeta; }),
        typeorm_1.JoinColumn({ name: "wp_postmetapost_id" }),
        __metadata("design:type", productDetail_1.wp_postmeta)
    ], wp_posts.prototype, "postmeta", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_posts.prototype, "post_author", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], wp_posts.prototype, "post_date", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], wp_posts.prototype, "post_date_gmt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_content", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_excerpt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "comment_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "ping_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "to_ping", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "pinged", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], wp_posts.prototype, "post_modified", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], wp_posts.prototype, "post_modified_gmt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_content_filtered", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_posts.prototype, "post_parent", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "guid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_posts.prototype, "menu_order", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], wp_posts.prototype, "post_mime_type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], wp_posts.prototype, "comment_count", void 0);
    wp_posts = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['ID'])
    ], wp_posts);
    return wp_posts;
}());
exports.wp_posts = wp_posts;
//# sourceMappingURL=Product.js.map