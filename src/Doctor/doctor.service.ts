import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DoctorEntity } from "./doctor.entity";
import { DoctorRegistration, Prescription, PetImageUpload } from "./doctorform.dto";
import { PrescriptionEntity } from "./prescription.entity";
import { MailerService } from "@nestjs-modules/mailer/dist";
import { PetImageEntity } from "./petimage.entity";


@Injectable()
export class DoctorService{
    mailerService: any;

    constructor(
        @InjectRepository(DoctorEntity)
        private doctorRepo: Repository<DoctorEntity>,
        @InjectRepository(PrescriptionEntity)
        private prescriptionRepo: Repository<PrescriptionEntity>,
        @InjectRepository(PetImageEntity)
        private petRepo: Repository<PetImageEntity>
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
    
    UpdatePrescription(id, name, age, gender, medicinelist):any{
        console.log(`Changed name is ${name},Changed age is ${age},Changed gender is ${gender},Changed medicine list is ${medicinelist},${id}`);
        return this.prescriptionRepo.update(id,{name:name,age:age,gender:gender,medicinelist:medicinelist});
    }

    deletePrescription(id: number, name:string ):any{
        return this.prescriptionRepo.delete(id);
    }

    imageUpload(ImageUpload:PetImageUpload){
        return this.petRepo.save(ImageUpload);
    }
    
    async sendEmail(mydata){
        return   await this.mailerService.sendMail({
               to: mydata.email,
               subject: mydata.subject,
               text: mydata.text, 
             });
       
    }
}