import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdaptionEntity } from "./adaption.entity";
import { AppointmentEntity} from "./appointment.entity";
import { CustomerEntity } from "./customer.entity";
import { CustomerRegistration , CustomerUpdate, CustomerUploadedAnimalImage} from "./customerform.dto";

@Injectable()
export class CustomerService{

    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepo: Repository<CustomerEntity>,
        @InjectRepository(AdaptionEntity)
        private adaptionRepo : Repository<AdaptionEntity>,
        @InjectRepository(AppointmentEntity)
        private appointmentRepo : Repository<AppointmentEntity>,
      ) {}
    getRegistration(register : CustomerRegistration): any{
        const customerAccount = new CustomerEntity();
        customerAccount.name = register.name;
        customerAccount.email = register.email;
        customerAccount.phone = register.phone;
        customerAccount.password = register.password;
        customerAccount.gender = register.gender;
        customerAccount.address = register.address;
        customerAccount.city = register.city;
        customerAccount.division = register.division;
        return this.customerRepo.save(customerAccount);
    }
    
    updateUser(name,id,email,password,address,city,division):any {
        console.log(`changed name is ${name}, email is ${email}, password is ${password}, address is ${address} and city is ${city} user id is ${id}`);
        return this.customerRepo.update(id,{name:name,email:email,password:password,address:address,city:city,division:division});
    }

    insertImage(adaption):any{
        const customerAdaptionImage = new AdaptionEntity();
        customerAdaptionImage.fileName = adaption.fileName;
        customerAdaptionImage.caption = adaption.caption;
        customerAdaptionImage.type = adaption.type;
        customerAdaptionImage.color = adaption.color;
        customerAdaptionImage.gender = adaption.gender;
        return this.adaptionRepo.save(customerAdaptionImage);
    }

    getAllUploadImage():any{
        return this.adaptionRepo.find();
    }

    getAppointment(appointment):any{
        const appoint = new AppointmentEntity();
        appoint.animalTypeName = appointment.animalTypeName;
        appoint.age = appointment.age;
        appoint.phone = appointment.phone;
        appoint.branch = appointment.branch;
        appoint.problemType = appointment.problemType;
        appoint.nameOfDoctor = appointment.nameOfDoctor;
        return this.appointmentRepo.save(appoint);
    }

    appointment(queries){
        return this.appointmentRepo.findOneBy({id : queries.id,phone: queries.phone});
    }

    getAllAppointment(){
        return this.appointmentRepo.find();
    }

    blogWriting():string{
        return "Blog upload successfully";
    }

    updateBlog(){
        return "Blog Updated";
    }

    deleteById(id){
        return `delete blog which id is ${id}`;
    }

    deleteBlogById(id)
    {
        return `blog delete id as ${id}`;
    }   
}