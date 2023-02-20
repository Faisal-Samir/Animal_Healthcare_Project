import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Adaption')
export class AdaptionEntity{

    @PrimaryGeneratedColumn()
    id : string
    @Column()
    fileName : string;

    @Column()
    caption : string;

    @Column()
    type : string;

    @Column()
    color : string;

    @Column()
    gender : string;  
}