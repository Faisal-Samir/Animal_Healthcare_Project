import { Module } from "@nestjs/common";

import { DoctorModule } from "./Doctor/doctor.module";

import { CustomerModule } from "./Customer/customer.module";

import { AdminModule } from "./Admin/adminmodule.module";

import { PetShopperModule } from "./Pet Shopper/petshopper.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./Customer/customer.entity";
import { AdaptionEntity } from "./Customer/adaption.entity";
import { AppointmentEntity } from "./Customer/appointment.entity";
import { PetshopperEntity } from "./Pet Shopper/petshopper.entity";


@Module({
    imports : [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'samir2022',
        database: 'Animal_Care',
        entities: [CustomerEntity,AdaptionEntity,AppointmentEntity,PetshopperEntity],
        synchronize: true,
      }),DoctorModule,CustomerModule,AdminModule,PetShopperModule,],
})
export class AppModule {}

