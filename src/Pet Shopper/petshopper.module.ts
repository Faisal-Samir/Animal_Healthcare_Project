import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetShopperController } from "./petshopper.controller"
import { PetshopperEntity } from "./petshopper.entity";
import { PetShopperService } from "./petshopper.service"

@Module({
imports : [TypeOrmModule.forFeature([PetshopperEntity])],
controllers: [PetShopperController],
providers: [PetShopperService],
})

export class PetShopperModule {}