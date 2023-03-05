import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DoctorEntity } from "./doctor.entity";
import { DoctorRegistration, Prescription } from "./doctorform.dto";
import { PrescriptionEntity } from "./prescription.entity";


@Injectable()
export class DoctorService{

    constructor(
        @InjectRepository(DoctorEntity)
        private doctorRepo: Repository<DoctorEntity>,
        @InjectRepository(PrescriptionEntity)
        private prescriptionRepo: Repository<PrescriptionEntity>
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

    getPrescription(presc: Prescription): any{
        const prescrip = new PrescriptionEntity();
        prescrip.name = presc.name;
        prescrip.age = presc.age;
        prescrip.gender = presc.gender;
        prescrip.medicinelist = presc.medicinelist;
        prescrip.comment = presc.comment;
        return this.prescriptionRepo.save(prescrip);
    }

    prescription(queries){
        return this.prescriptionRepo.findOneBy({id: queries.id, name: queries.name});
    }

    getAllPrescription(){
        return this.prescriptionRepo.find();
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