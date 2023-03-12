import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('postproducts')
export class productlistEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    Amount : number;

}