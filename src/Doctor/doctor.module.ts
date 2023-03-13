import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmergencyHelpEntity } from "src/Customer/emergencyHelp.entity";
import { DoctorController } from "./doctor.controller";
import { DoctorEntity } from "./doctor.entity";
import { DoctorService } from "./doctor.service";
import { PrescriptionEntity } from "./prescription.entity";

@Module(
    {
        imports : [MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                   port: 465,
                   ignoreTLS: true,
                   secure: true,
                   auth: {
                       user: 'samir.faisalaiubcse@gmail.com',
                       pass: 'eklujsqstzwbpzpw',
            }
        }
        }),
            TypeOrmModule.forFeature([DoctorEntity, PrescriptionEntity,EmergencyHelpEntity])],
        controllers: [DoctorController],
        providers: [DoctorService],
    }
)
export class DoctorModule{}