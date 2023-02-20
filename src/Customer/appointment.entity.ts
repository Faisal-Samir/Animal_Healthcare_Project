import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Appointment')
export class AppointmentEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    animalTypeName : string

    @Column()
    age : string

    @Column()
    phone :string

    @Column()
    branch : string

    @Column()
    problemType : string

    @Column()
    nameOfDoctor : string
}