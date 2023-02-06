import {Controller, Get} from "@nestjs/common";
import { PetShopperService } from "./petshopper.service";


@Controller("/petshopper")
export class PetShopperController
{ 
  constructor(private petshopperservicec: PetShopperService){}

  @Get("/index")
    getAdmin(): any { 
        return this.petshopperservicec.getIndex();
    }
}