import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Products')
export class PetshopperProductEntity{
    @Column()
    name : string;

    @PrimaryGeneratedColumn()
    id : number;

   
}