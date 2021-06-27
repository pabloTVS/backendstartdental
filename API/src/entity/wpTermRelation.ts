import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()

export class wp_term_relationships {
    @PrimaryColumn() object_id: number;
    @Column() term_taxonomy_id: number;
    @Column() term_order: number;
}