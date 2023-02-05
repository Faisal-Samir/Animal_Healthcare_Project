import { Module } from "@nestjs/common";

import { CustomerModule } from "./Customer/customer.module";

@Module({
    imports : [CustomerModule],
})
export class AppModule {}

