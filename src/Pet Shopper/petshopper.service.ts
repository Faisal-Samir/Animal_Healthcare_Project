import { Injectable } from "@nestjs/common";
import { PetShopperForm } from "./petshopperform.dto";


@Injectable()
export class PetShopperService {

getIndex():string { 
    return "Petshopper Index"; 
}


insertUser(petshopperdto: PetShopperForm): any{
  return 'Pet shopper Inserted name: ' + petshopperdto.name + ' and id is ' + petshopperdto.id;
}
getuserbyid(petshopperdto: PetShopperForm): any{
  return 'Pet shopper Get name: ' + petshopperdto.name + ' and id is ' + petshopperdto.id;
}
updateuser(name: string, id: number): any {
  return 'Petshopper updated name: ' + name + ' and id is ' + id;
}
deleteuser(name:string,id:number):any {
  return 'Petshopper Name deleted:'+name + 'and id is'+id;
}
postproducts(name:string,id:number):any{
  return 'Post products name : '+name + 'and id is '+id;
}
medicinelist(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
foodlist(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
elementslist(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
postblog(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
deleteblog(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}

}