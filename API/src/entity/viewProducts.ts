import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()

export class viewProducts {
    @PrimaryColumn() ID: number;
    @Column() Articulo: string;
    @Column() Sku: string;
    @Column() Imagen: string;
    @Column() Proveedor: string;
    @Column() Categoria: string;
    @Column() Subcategoria: string;
}