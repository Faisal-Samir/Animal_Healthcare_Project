import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Emergency')
export class PetImageEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    file : string;

    @Column()
    problem : string;

    @Column()
    problemDuration : string;
}