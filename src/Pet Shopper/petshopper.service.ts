import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PetshopperEntity } from "./Entity/petshopper.entity";
import { PetshopperProductEntity } from "./petshopper.productlist";
import * as bcrypt from 'bcrypt';
import { PetShopperForm, petshopperregistration,PetshopperBlog, PetshopperProduct, Medicinelist, Foodlist, } from "./petshopperform.dto";
import { medicinelistEntity } from "./Entity/medicinelist.entity";
import { FoodlistEntity } from "./Entity/foodlists.entity";
import { registerDecorator, registerSchema } from "class-validator";
import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
export class PetShopperService {
  updateuser: any;
constructor(
    @InjectRepository(PetshopperEntity)
    private petshopper: Repository<PetshopperEntity>,
  
    @InjectRepository(PetshopperProductEntity)
    private petshopperproductRepo: Repository<PetshopperProductEntity>,

    @InjectRepository(medicinelistEntity)
    private medicinelistRepo: Repository<medicinelistEntity>,

    @InjectRepository(FoodlistEntity)
    private foodlistRepo: Repository<FoodlistEntity>,
    private mailerService: MailerService,

  ){}

  getproduct(register: any): any {
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

async registration(register) {
  const salt = await bcrypt.genSalt();
  const hassedpassed = await bcrypt.hash(register.password, salt);
  register.password= hassedpassed;
  return this.petshopper.save(register);
  }


async signin(mydto){
  console.log(mydto.password);
const mydata= await this.petshopper.findOneBy({email: mydto.email});
const isMatch= await bcrypt.compare(mydto.password, mydata.password);
if(isMatch) {
return 1;
}
else {
  return 0;
}

}
async signup(mydto) {
  const salt = await bcrypt.genSalt();
  const hassedpassed = await bcrypt.hash(mydto.password, salt);
  mydto.password= hassedpassed;
  return this.petshopper.save(mydto);
  }



  async sendEmail(mydata){
    return   await this.mailerService.sendMail({
           to: mydata.email,
           subject: mydata.subject,
           text: mydata.text, 
         });
   
   }

} 