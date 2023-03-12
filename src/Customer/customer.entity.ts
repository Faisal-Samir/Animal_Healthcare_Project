import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from 'src/admin/admin.entity';


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


    // @ManyToOne(() => AdminEntity, (admin) => admin.customer)  //change
    // admin: AdminEntity
}
