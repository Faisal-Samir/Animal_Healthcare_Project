import { Module } from "@nestjs/common";
import { CustomerAppointmentController, CustomerRegistrationController } from "./registration.controller";

@Module({
    controllers: [CustomerRegistrationController, CustomerAppointmentController],
})
export class CustomerModule{}