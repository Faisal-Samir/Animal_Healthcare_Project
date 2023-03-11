import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PetshopperEntity } from "./petshopper.entity";
import { PetshopperProductEntity } from "./petshopper.productlist";

import { PetShopperForm, petshopperregistration,PetshopperBlog } from "./petshopperform.dto";



@Injectable()
export class PetShopperService {
  updateuser(id: number, name: string, email: string, password: string, phone: number): any {
    throw new Error("Method not implemented.");
  }
  insertImage(adaption: petshopperregistration): any {
    throw new Error("Method not implemented.");
  }
  blogwriting(): string {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectRepository(PetshopperEntity)
    private petshopper: Repository<PetshopperEntity>,
    @InjectRepository(PetshopperProductEntity)
    private petshopperproduct: Repository<PetshopperProductEntity>
  ){}

  getRegistration(register : petshopperregistration): any{
    const petshopperAccount = new PetshopperEntity();
    petshopperAccount.name = register.name;
    petshopperAccount.email=register.email;
    petshopperAccount.phone = register.phone;
    petshopperAccount.password = register.password;
   
  return this.petshopper.save (petshopperAccount);

  }
getIndex():string { 
    return "Petshopper Index"; 
}
insertUser(petshopperdto: PetShopperForm): any{
  return 'Pet shopper Inserted name: ' + petshopperdto.name + ' and id is ' + petshopperdto.id;
}
getuserbyid(petshopperdto: PetShopperForm): any{
  return 'Pet shopper Get name: ' + petshopperdto.name + ' and id is ' + petshopperdto.id;
}
updateUserById(myDto:petshopperregistration,id:number):any {
  return this.petshopper.update(id,myDto);
}
deleteuser(name:string,id:number):any {
  
  return 'Petshopper Name deleted:'+name + 'and id is'+id;
}

postproducts(name:string,id:number):any{
  const petshopperproduct =new PetshopperProductEntity();
  petshopperproduct.name=petshopperproduct.name;
  console.log( 'Post products name : '+name + 'and id is '+id);
  return this.petshopper.save(petshopperproduct)
}
medicinelist(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
foodlist(petshopperdto:PetShopperForm):any{
  console.log(`food list ${name}`)
  return 'Show Foodlist : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
elementslist(petshopperdto:PetShopperForm):any{
  console.log(`elementlist ${name}`)
  return 'Show elementlist : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
postblog(petshopperdto:PetShopperForm):any{
  console.log(`postblog ${name}`)
  return 'Show Blogs : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}
deleteblog(petshopperdto:PetShopperForm):any{
  return 'Delete : '+petshopperdto.id;
}
postinfo(petshopperdto:PetShopperForm):any{
  return 'Show Info : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}

}
