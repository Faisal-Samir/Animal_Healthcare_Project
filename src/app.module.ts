import { Module } from "@nestjs/common";

import { CustomerModule } from "./Customer/customer.module";

import { AdminModule } from "./Admin/adminmodule.module";

@Module({
    imports : [CustomerModule,AdminModule],
})
export class AppModule {}

