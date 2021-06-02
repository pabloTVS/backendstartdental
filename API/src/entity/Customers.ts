import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, Double} from 'typeorm';
@Entity()
@Unique(['IdCliente'])
export class Customers {
    @PrimaryGeneratedColumn() IdCliente: number;
    @Column() Nombre: string;
    @CreateDateColumn() FechaAlta: Date;
    @Column() DNINIF: string;
    @Column() Telefono1: string;
    @Column() Email1: string;
    @Column() Fax1: string;
    @Column() Movil1: string;
    @Column() CodFormaPago: number;
    @Column() RE: boolean;
    @Column() DtoPP: number;
    @Column() DtoComercial: number;
    @Column() CodPostal: string;
    @Column() Localidad: string;
    @Column() Provincia: string;
    @Column() Direccion: string;
    @Column() Entidad: string;
    @Column() Oficina: string;
    @Column() DC: string;
    @Column() Cuenta: string;
    @Column() IBAN: string;
    @Column() BICSWIFT: string;
    @Column() Observaciones: string;
}