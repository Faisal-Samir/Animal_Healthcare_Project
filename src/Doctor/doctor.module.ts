import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorController } from "./doctor.controller";
import { DoctorEntity } from "./doctor.entity";
import { DoctorService } from "./doctor.service";
import { PrescriptionEntity } from "./prescription.entity";

@Module(
    {
        imports : [TypeOrmModule.forFeature([DoctorEntity, PrescriptionEntity])],
        controllers: [DoctorController],
        providers: [DoctorService],
    }
)
export class DoctorModule{}