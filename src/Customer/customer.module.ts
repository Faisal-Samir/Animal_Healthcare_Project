import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdaptionEntity } from "./adaption.entity";
import { AppointmentEntity } from "./appointment.entity";
import { BlogEntity } from "./blog.entity";
import { CustomerController } from "./customer.controller";
import { CustomerEntity } from "./customer.entity";
import { CustomerService } from "./customer.service";
import { EmergencyHelpEntity } from "./emergencyHelp.entity";

@Module({
    imports : [TypeOrmModule.forFeature([AdaptionEntity,CustomerEntity,AppointmentEntity,BlogEntity,EmergencyHelpEntity])],
    controllers : [CustomerController],
    providers : [CustomerService],
})
export class CustomerModule{}