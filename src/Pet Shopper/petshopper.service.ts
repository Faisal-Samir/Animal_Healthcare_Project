import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PetshopperEntity } from "./Entity/petshopper.entity";
import { PetshopperProductEntity } from "./petshopper.productlist";
import * as bcrypt from 'bcrypt';
import { PetShopperForm, petshopperregistration,PetshopperBlog, PetshopperProduct, Medicinelist, Foodlist, } from "./petshopperform.dto";
import { medicinelistEntity } from "./Entity/medicinelist.entity";
import { FoodlistEntity } from "./Entity/foodlists.entity";
import { registerSchema } from "class-validator";


@Injectable()
export class PetShopperService {
  constructor(
    @InjectRepository(PetshopperEntity)
    private petshopper: Repository<PetshopperEntity>,
    @InjectRepository(PetshopperProductEntity)
    private petshopperproductRepo: Repository<PetshopperProductEntity>,
    @InjectRepository(medicinelistEntity)
    private medicinelistRepo: Repository<medicinelistEntity>,
    @InjectRepository(FoodlistEntity)
    private foodlistRepo: Repository<FoodlistEntity>,

  ){}

  getproduct(register: any): any {
    throw new Error("Method not implemented.");
  }
  mailerService: any;
  updateuser(id: number, name: string, email: string, password: string, phone: number,address:string,district:string): any {
    throw new Error("Method not implemented.");
  }
  insertImage(adaption: petshopperregistration): any {
    throw new Error("Method not implemented.");
  }
  blogwriting(): string {
    throw new Error("Method not implemented.");
  }
 

  async getRegistration(register : petshopperregistration):Promise<any>{
  try {
    const petshopperAccount = new PetshopperEntity();
    petshopperAccount.name = register.name;
    petshopperAccount.email=register.email;
    petshopperAccount.phone = register.phone;
    petshopperAccount.password = register.password;
    petshopperAccount.address=register.address;
    petshopperAccount.district=register.district;
   
  return await this.petshopper.save (petshopperAccount);

  }
  catch(error){
    console.log(error);
  }
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
updateusers(register:petshopperregistration,id:number):any {
  return this.petshopper.update(id,register);
}
deleteuser(name:string,id:number):any {
  
  return this.petshopper.delete(id);
}

// postproducts(name:string,id:number):any{
//   const petshopperproduct =new PetshopperProductEntity();
//   petshopperproduct.name=petshopperproduct.name;
//   console.log( 'Post products name : '+name + 'and id is '+id);
//   return this.petshopper.save(petshopperproduct)
// }
postproduct(ndto:PetshopperProduct):any{
  const petproductlist = new PetshopperProductEntity();
  petproductlist.name=ndto.name;
  petproductlist.amount=ndto.amount;
  return this.petshopperproductRepo.save(petproductlist);
}
medicinelist(mdto:Medicinelist):any{
  const medicinelist = new medicinelistEntity();
  medicinelist.name=mdto.name;
  medicinelist.date=mdto.date;
  medicinelist.amount=mdto.amount;
  return this.medicinelistRepo.save(medicinelist);
}
foodlist(fdto:Foodlist):any{
  const foodlists = new FoodlistEntity();
  foodlists.name=fdto.name;
  foodlists.date=fdto.date;
  foodlists.Amount=fdto.Amount;
  return this.foodlistRepo.save(foodlists);
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

async signup(mydto) {
  const salt = await bcrypt.genSalt();
  const hassedpassed = await bcrypt.hash(mydto.password, salt);
  mydto.password= hassedpassed;
  return this.petshopper.save(mydto);
  }
  


//   async getRegistration(rdto : PetShopperForm):Promise<any>
// try {

//   const raccount= new PetshopperEntity();
//   raccount.name=register.name;
//   raccount.email=register.email;
//   raccount.phone=rdto.phone;
//   raccount.address=rdto.address;
//   raccount.password=rdto.password;
//   raccount.district=rdto.district;
//   return await this.RRepo.save(raccount);

// }catch (error){
//   console.log(error);
// }


}  
  
  
