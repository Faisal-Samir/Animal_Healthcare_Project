import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Blog')
export class BlogEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title : string
    
    @Column()
    description : string
}