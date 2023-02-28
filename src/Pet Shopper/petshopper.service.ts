import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PetshopperEntity } from "./petshopper.entity";
import { PetShopperForm, petshopperregistration,PetshopperBlog } from "./petshopperform.dto";



@Injectable()
export class PetShopperService {
  blogwriting(): string {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectRepository(PetshopperEntity)
    private petshopper: Repository<PetshopperEntity>
  ){}

  getRegistration(register : petshopperregistration): any{
    const petshopperAccount = new PetshopperEntity();
    petshopperAccount.name = register.name;
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
updateuser(name: string, id: number,email:string,address:string,password:string): any {
  console.log(`changed name is ${name},email is ${email},password is ${password},address is ${address}`);
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
  console.log(`food list ${name}` )
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
postinfo(petshopperdto:PetShopperForm):any{
  return 'Show Medicines : '+ petshopperdto.name+'and id is'+petshopperdto.id;
}

}
