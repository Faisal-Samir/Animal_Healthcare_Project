import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerAppointmentController, CustomerController } from "./customer.controller";

@Module({
    controllers: [CustomerController, CustomerAppointmentController],
    providers : [CustomerService],
})
export class CustomerModule{}