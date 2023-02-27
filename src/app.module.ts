import { Module } from "@nestjs/common";

import { DoctorModule } from "./Doctor/doctor.module";

import { CustomerModule } from "./Customer/customer.module";

import { AdminModule } from "./Admin/adminmodule.module";

import { PetShopperModule } from "./Pet Shopper/petshopper.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./Customer/customer.entity";
import { AdaptionEntity } from "./Customer/adaption.entity";
import { AppointmentEntity } from "./Customer/appointment.entity";
<<<<<<< HEAD
import { BlogEntity } from "./Customer/blog.entity";
=======
import { PetshopperEntity } from "./Pet Shopper/petshopper.entity";
>>>>>>> bb99542351a9c473a3bbcf902e0e693ae50db9b4


@Module({
    imports : [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'samir2022',
        database: 'Animal_Care',
<<<<<<< HEAD
        entities: [CustomerEntity,AdaptionEntity,AppointmentEntity,BlogEntity],
=======
        entities: [CustomerEntity,AdaptionEntity,AppointmentEntity,PetshopperEntity],
>>>>>>> bb99542351a9c473a3bbcf902e0e693ae50db9b4
        synchronize: true,
      }),DoctorModule,CustomerModule,AdminModule,PetShopperModule,],
})
export class AppModule {}

