import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetShopperController } from "./petshopper.controller"
import { PetshopperEntity } from "./Entity/petshopper.entity";
import { PetshopperProductEntity } from "./petshopper.productlist";

import { PetShopperService } from "./petshopper.service"

@Module({
imports : [TypeOrmModule.forFeature([PetshopperEntity,PetshopperProductEntity])],


controllers: [PetShopperController],
providers: [PetShopperService],
})

export class PetShopperModule {}