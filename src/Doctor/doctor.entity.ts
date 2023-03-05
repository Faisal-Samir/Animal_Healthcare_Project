import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Doctor')
export class DoctorEntity{
    @Column()
    name : string

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    phone : string

    @Column()
    email : string

    @Column()
    password : string
}