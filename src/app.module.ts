import { Module } from "@nestjs/common";

import { DoctorModule } from "./Doctor/doctor.module";

import { CustomerModule } from "./Customer/customer.module";

import { AdminModule } from "./Admin/adminmodule.module";

import { PetShopperModule } from "./Pet Shopper/petshopper.module";


@Module({
    imports : [DoctorModule,CustomerModule,AdminModule,PetShopperModule,],
})
export class AppModule {}

