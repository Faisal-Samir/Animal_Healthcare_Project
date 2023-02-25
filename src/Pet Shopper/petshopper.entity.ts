import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Petshopper')
export class PetshopperEntity{
    @Column()
    name : string;

    @PrimaryGeneratedColumn()
    id : number;


    @Column()
    phone : string;

    @Column()
    password : string;





 
}