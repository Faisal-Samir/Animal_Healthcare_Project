import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('toylist')
export class toylist{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    Amount : number;

}