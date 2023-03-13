import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Products')
export class PetshopperProductEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
   
    @Column()
    amount : string;
  date: string;
}