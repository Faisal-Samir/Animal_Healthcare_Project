import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DoctorEntity } from "./doctor.entity";
import { DoctorRegistration } from "./doctorform.dto";


@Injectable()
export class DoctorService{

    constructor(
        @InjectRepository(DoctorEntity)
        private doctorRepo: Repository<DoctorEntity>,
        ){}
    
    getRegistration(register : DoctorRegistration): any{
        const doctorAccount = new DoctorEntity();
        doctorAccount.name = register.name;
        doctorAccount.phone = register.phone;
        doctorAccount.email = register.email;
        doctorAccount.password = register.password;
        return this.doctorRepo.save(doctorAccount);
    }

    updateUser(name,phone,email,password,id):any {
        console.log(`changed name is ${name},phone number is ${phone}, email is ${email}, password is ${password},user id is ${id}`);
        return this.doctorRepo.update(id,{name:name,phone:phone,email:email,password:password});
    }
    
    /*insertUser(doctordto: DoctorForm): any{
        return 'Doctor Inserted name: ' + doctordto.name + ' and id is ' + doctordto.id;
    }
    getuserbyid(doctordto: DoctorForm): any{
        return 'Doctor Get name: ' + doctordto.name + ' and id is ' + doctordto.id;
    }
    updateuser(name: string, id: number): any {
        return 'Doctor updated name: ' + name + ' and id is ' + id;
    }
    deleteuser(name:string,id:number):any {
        return 'Doctor Name deleted:'+name + 'and id is'+id;
    }*/

}