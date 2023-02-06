import { Injectable } from "@nestjs/common";
import { PetShopperForm } from "./petshopperform.dto";


@Injectable()
export class PetShopperService {

getIndex():string { 
    return "Petshopper Index"; 
}
}