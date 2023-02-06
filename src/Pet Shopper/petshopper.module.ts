import { Module } from "@nestjs/common";
import { PetShopperController } from "./petshopper.controller"
import { PetShopperService } from "./petshopper.service"

@Module({
controllers: [PetShopperController],
providers: [PetShopperService],
})

export class PetShopperModule {}