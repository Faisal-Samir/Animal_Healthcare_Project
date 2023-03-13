import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetShopperController } from "./petshopper.controller"
import { PetshopperEntity } from "./Entity/petshopper.entity";
import { PetshopperProductEntity } from "./petshopper.productlist";
import { medicinelistEntity } from "./Entity/medicinelist.entity";
import { FoodlistEntity } from "./Entity/foodlists.entity";
import { PetShopperService } from "./petshopper.service"
import { MailerModule } from "@nestjs-modules/mailer";


@Module({
imports : [    MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
               port: 465,
               ignoreTLS: true,
               secure: true,
               auth: {
                   user: 'mubtasim26@gmail.com',
                   pass: 'bomyhxmwwvsmvewg'
               },
              }
  }),
  
  TypeOrmModule.forFeature([PetshopperEntity,PetshopperProductEntity,medicinelistEntity,FoodlistEntity])],


controllers: [PetShopperController],
providers: [PetShopperService],
})

export class PetShopperModule {}