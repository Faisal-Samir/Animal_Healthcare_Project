import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Medicinelist')
export class medicinelistEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    date:string;

    @Column()
  amount: string;

}