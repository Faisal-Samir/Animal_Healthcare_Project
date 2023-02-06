import { Module } from "@nestjs/common";

import { CustomerModule } from "./Customer/customer.module";

import { AdminModule } from "./Admin/adminmodule.module";
import { PetShopperModule } from "./Pet Shopper/petshopper.module";

@Module({
    imports : [CustomerModule,AdminModule,PetShopperModule],
})
export class AppModule {}

