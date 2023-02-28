import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { title } from "process";
import { Repository } from "typeorm";
import { AdaptionEntity } from "./adaption.entity";
import { AppointmentEntity} from "./appointment.entity";
import { BlogEntity } from "./blog.entity";
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
        @InjectRepository(BlogEntity)
        private blogRepo : Repository<BlogEntity>,
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
    
    updateUserById(myDto:CustomerRegistration,id:number):any {
        return this.customerRepo.update(id,myDto);
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

    updateAppointment(id,appointmentDto):any{
        return this.appointmentRepo.update(id,appointmentDto);
    }

    blogWriting(blog):any{
        const blogWriting = new BlogEntity();
        blogWriting.title = blog.title;
        blogWriting.description = blog.description;
        return this.blogRepo.save(blogWriting);
    }
    getBlog(){
        return this.blogRepo.find();
    }

    findBlogById(id){
        return this.blogRepo.findOneBy({id});
    }

    updateBlog(id,blogDto):any{
        return this.blogRepo.update(id,blogDto);
    }

    deleteBlogById(id)
    {
        return this.blogRepo.delete(id);
    } 
    
}