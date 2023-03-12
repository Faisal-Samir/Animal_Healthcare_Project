import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetShopperController } from "./petshopper.controller"
import { PetshopperEntity } from "./Entity/petshopper.entity";
import { PetshopperProductEntity } from "./petshopper.productlist";
import { medicinelistEntity } from "./Entity/medicinelist.entity";
import { FoodlistEntity } from "./Entity/foodlists.entity";


import { PetShopperService } from "./petshopper.service"

@Module({
imports : [TypeOrmModule.forFeature([PetshopperEntity,PetshopperProductEntity,PetshopperProductEntity,medicinelistEntity,FoodlistEntity])],


controllers: [PetShopperController],
providers: [PetShopperService],
})

export class PetShopperModule {}