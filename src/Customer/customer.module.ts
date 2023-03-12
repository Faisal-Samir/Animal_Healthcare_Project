import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "src/admin/admin.entity";
import { AdminService } from "src/Admin/adminservice.service";
import { AdaptionEntity } from "./adaption.entity";
import { AppointmentEntity } from "./appointment.entity";
import { CustomerController } from "./customer.controller";
import { CustomerEntity } from "./customer.entity";
import { CustomerService } from "./customer.service";

@Module({
    imports : [TypeOrmModule.forFeature([AdaptionEntity,CustomerEntity,AppointmentEntity,AdminEntity])],
    controllers : [CustomerController],
    providers : [CustomerService], //AdminService
})
export class CustomerModule{}