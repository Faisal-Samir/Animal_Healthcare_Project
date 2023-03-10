import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Emergency')
export class EmergencyHelpEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    file : string;

    @Column()
    problem : string;

    @Column()
    problemDuration : string;
}