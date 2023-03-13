import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Foodlist')
export class FoodlistEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
  date: string;

  @Column()
  Amount: string;

    

}