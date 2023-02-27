import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorController } from "./doctor.controller";
import { DoctorEntity } from "./doctor.entity";
import { DoctorService } from "./doctor.service";

@Module(
    {
        imports : [TypeOrmModule.forFeature([DoctorEntity])],
        controllers: [DoctorController],
        providers: [DoctorService],
    }
)
export class DoctorModule{}