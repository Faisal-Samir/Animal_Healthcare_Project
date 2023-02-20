import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Customer')
export class CustomerEntity{
    @Column()
    name : string;

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    phone : string;

    @Column()
    password : string;

    @Column()
    gender : string;

    @Column()
    address : string;

    @Column()
    city : string;

    @Column()
    division : string;
}
