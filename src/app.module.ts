import { Module } from "@nestjs/common";

import { DoctorModule } from "./Doctor/doctor.module";

import { CustomerModule } from "./Customer/customer.module";


import { PetShopperModule } from "./Pet Shopper/petshopper.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./Customer/customer.entity";
import { AdaptionEntity } from "./Customer/adaption.entity";
import { AppointmentEntity } from "./Customer/appointment.entity";
import { BlogEntity } from "./Customer/blog.entity";
import { EmergencyHelpEntity } from "./Customer/emergencyHelp.entity";
import { DoctorEntity } from "./Doctor/doctor.entity";
import { PrescriptionEntity } from "./Doctor/prescription.entity";


@Module({
    imports : [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'samir2022',
        database: 'Animal_Care',
        // entities: [CustomerEntity,AdaptionEntity,AppointmentEntity,BlogEntity,EmergencyHelpEntity,DoctorEntity,PrescriptionEntity],
        autoLoadEntities: true,
        synchronize: true,
      }),DoctorModule,CustomerModule,PetShopperModule,],
})
export class AppModule {}


