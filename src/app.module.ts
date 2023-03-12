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
import { AdminEntity } from "./Admin/admin.entity";
=======
import { BlogEntity } from "./Customer/blog.entity";
import { EmergencyHelpEntity } from "./Customer/emergencyHelp.entity";
import { DoctorEntity } from "./Doctor/doctor.entity";
import { PrescriptionEntity } from "./Doctor/prescription.entity";
>>>>>>> ab123303feec318444c5af87490c47b7ad9aad06


@Module({
    imports : [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'samir2022',
<<<<<<< HEAD
        database: 'siam',
        autoLoadEntities:true,
      //entities: [CustomerEntity,AdaptionEntity,AppointmentEntity,AdminEntity],
=======
        database: 'Animal_Care',
        // entities: [CustomerEntity,AdaptionEntity,AppointmentEntity,BlogEntity,EmergencyHelpEntity,DoctorEntity,PrescriptionEntity],
        autoLoadEntities: true,
>>>>>>> ab123303feec318444c5af87490c47b7ad9aad06
        synchronize: true,
      }),DoctorModule,CustomerModule,AdminModule,PetShopperModule,],
      controllers:[],
      providers:[],

})
export class AppModule {}


