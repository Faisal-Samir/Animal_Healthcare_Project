import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller"
import { AdminService } from "./adminservice.service"
import { AdminEntity } from "./admin.entity"
import { CustomerService } from "src/customer/customer.service";
import { CustomerEntity } from "src/customer/customer.entity";
import { AdaptionEntity } from "src/Customer/adaption.entity";
import { CustomerModule } from "src/Customer/customer.module";
import { CustomerController } from "src/Customer/customer.controller";
import { AppointmentEntity } from "src/Customer/appointment.entity";
//import { MailerModule } from "@nestjs-modules/mailer";

@Module({

imports: [
    
    
    // MailerModule.forRoot({
    //     transport: {
    //       host: 'smtp.gmail.com',
    //                port: 465,
    //                ignoreTLS: true,
    //                secure: true,
    //                auth: {
    //                    user: 'your email address',
    //                    pass: 'your app password'
    //                },
    //               }
    //   }),
      
    
    TypeOrmModule.forFeature([AdminEntity,CustomerEntity, AdaptionEntity, AppointmentEntity])],  //, CustomerEntity , CustomerEntity,AdaptionEntity,AdaptionEntity
controllers: [AdminController],
providers: [AdminService,CustomerService],   //,CustomerService

})

export class AdminModule {}