import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from "./admin.entity";
import { AdminForm } from "./adminform.dto";
import { AdminFormUpdate } from "./adminformupdate.dto";
import * as bcrypt from 'bcrypt';       //add
//import { MailerService } from "@nestjs-modules/mailer/dist";//add

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
        //private mailerService: MailerService
      ) {}



      async getRegistration(register:AdminForm){
        const adminAccount = new AdminEntity();
        adminAccount.name = register.name;
        adminAccount.email = register.email;

        const salt = await bcrypt.genSalt();
        const hassPassword = await bcrypt.hash(register.password,salt)
        register.password = hassPassword;
        adminAccount.password = register.password;
        adminAccount.password = register.password;

        adminAccount.address = register.address;
        
        return this.adminRepo.save(adminAccount);
    }

    async login(mydto) {
        const admin = await this.adminRepo.findOneBy({ email: mydto.email });
        if (!admin) {
          
          return { success: false, message: "Email address not found" };
        }
      
        const isMatched = await bcrypt.compare(mydto.password, admin.password);
        if (isMatched) {
            console.log(admin.password);
          // If password matches, return success code and customer object
          return { success: true, admin:admin };
        } else {
          // If password does not match, return error code
          return { success: false, message: "Invalid password" };
        }
      }


    

getIndex():any { 
    return this.adminRepo.find();

}
getUserByID(id):any {
    return this.adminRepo.findOneBy({ id });
}

getUserByIDName(qry):any {
    return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
}

insertUser(mydto:AdminForm):any {
    const adminaccount = new AdminEntity()
    adminaccount.name = mydto.name;
    adminaccount.email = mydto.email;
    adminaccount.password = mydto.password;
    adminaccount.address = mydto.address;
    return this.adminRepo.save(adminaccount);

      }

updateUser(name,id):any {
    console.log(name+id);
    return this.adminRepo.update(id,{name:name});
    }

updateUserbyid(mydto:AdminFormUpdate,id):any {
    return this.adminRepo.update(id,mydto);
       }
       
deleteUserbyid(id):any {
    
        return this.adminRepo.delete(id);
    }
    

//---------------add


   
//----------------------------------------------------------//

getCustomersByAdminID(id):any {
    return this.adminRepo.find({ 
            where: {id:id},
        relations: {
            customer: true,
        },
     });
}

   

    


}