import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()

export class viewProducts {
    @PrimaryColumn() ID: number;
    @Column() Articulo: string;
    @Column() Sku: string;
    @Column() Precio: string;
    @Column() IVA: number;
    @Column() Stock: string;
    @Column() Imagen: string;
    @Column() Proveedor: string;
    @Column() Categoria: string;
    @Column() Subcategoria: string;
}