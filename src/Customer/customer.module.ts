import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "src/admin/admin.entity";
import { AdminService } from "src/Admin/adminservice.service";
import { AdaptionEntity } from "./adaption.entity";
import { AppointmentEntity } from "./appointment.entity";
import { BlogEntity } from "./blog.entity";
import { CustomerController } from "./customer.controller";
import { CustomerEntity } from "./customer.entity";
import { CustomerService } from "./customer.service";
import { EmergencyHelpEntity } from "./emergencyHelp.entity";

@Module({
<<<<<<< HEAD
    imports : [TypeOrmModule.forFeature([AdaptionEntity,CustomerEntity,AppointmentEntity,AdminEntity])],
=======
    imports : [TypeOrmModule.forFeature([AdaptionEntity,CustomerEntity,AppointmentEntity,BlogEntity,EmergencyHelpEntity])],
>>>>>>> ab123303feec318444c5af87490c47b7ad9aad06
    controllers : [CustomerController],
    providers : [CustomerService], //AdminService
})
export class CustomerModule{}