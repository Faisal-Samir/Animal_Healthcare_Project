import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Prescription')
export class PrescriptionEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    age : number

    @Column()
    gender : string

    @Column()
    medicinelist : string

    @Column()
    comment : string
}