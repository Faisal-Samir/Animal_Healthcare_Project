import { Module } from "@nestjs/common";
import { CustomerRegistrationController } from "./registration.controller";

@Module({
    controllers: [CustomerRegistrationController],
})
export class CustomerModule{}