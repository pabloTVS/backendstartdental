import { Entity, Column,PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['term_taxonomy_id'])
export class wp_term_taxonomy {
    @PrimaryGeneratedColumn() term_taxonomy_id: number;
    @Column() term_id: number;
    @Column() taxonomy: string;
    @Column() description: string;
    @Column() parent: number;
    @Column() count: number;
}