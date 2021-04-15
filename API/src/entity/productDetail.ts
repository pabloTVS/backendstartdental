import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';

@Entity()
@Unique(['meta_id'])
export class wp_postmeta {
    @PrimaryGeneratedColumn() meta_id: number;
    @Column() post_id: number;
    @Column() meta_key: string;
    @Column() meta_value: string;
}