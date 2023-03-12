import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('medicinelist')
export class medicinelistEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    date:Date;

    @Column()
    Amount : number;

}