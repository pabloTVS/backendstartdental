import { Entity, Column,PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['term_id'])
export class wp_terms {
    @PrimaryGeneratedColumn() term_id: number;
    @Column() name: string;
    @Column() slug: string;
    @Column() term_group: number;
    
}