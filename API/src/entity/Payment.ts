import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, Double} from 'typeorm';
@Entity()
@Unique(['IdFormaPago'])
export class Payments {
    @PrimaryGeneratedColumn() IdFormaPago: number;
    @Column() Nombre: string;
    @Column() Tipo: string;
    @Column() NumPagos: number;
}