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
<<<<<<< HEAD

    
 
=======
>>>>>>> eb65c941315c28783d5264027b7e37d94e2d6903
}