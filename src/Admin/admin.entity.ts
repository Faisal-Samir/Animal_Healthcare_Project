import { CustomerEntity } from 'src/customer/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("admin")
export class AdminEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;
  customer: any;

  
  
  //  @OneToMany(() => CustomerEntity, (Customer) => Customer.admin)//change
  // customer: CustomerEntity[]


}