import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdaptionEntity } from "./adaption.entity";
import { AppointmentEntity} from "./appointment.entity";
import { BlogEntity } from "./blog.entity";
import { CustomerEntity } from "./customer.entity";
import { CustomerImageUpload, CustomerRegistration , CustomerUpdate, CustomerUploadedAnimalImage} from "./customerform.dto";
import { EmergencyHelpEntity } from "./emergencyHelp.entity";
import * as bcrypt from 'bcrypt';

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
        @InjectRepository(EmergencyHelpEntity)
        private emergencyHelpRepo : Repository<EmergencyHelpEntity>,
      ) {}
    async getRegistration(register : CustomerRegistration){
        const customerAccount = new CustomerEntity();
        customerAccount.name = register.name;
        customerAccount.email = register.email;
        customerAccount.phone = register.phone;
        const salt = await bcrypt.genSalt();
        const hassPassword = await bcrypt.hash(register.password,salt)
        register.password = hassPassword;
        customerAccount.password = register.password;
        customerAccount.password = register.password;
        customerAccount.gender = register.gender;
        customerAccount.address = register.address;
        customerAccount.city = register.city;
        customerAccount.division = register.division;
        return this.customerRepo.save(customerAccount);
    }

    // login
    async login(mydto) {
        const customer = await this.customerRepo.findOneBy({ email: mydto.email });
        if (!customer) {
          // If customer is not found, return error code
          return { success: false, message: "Email address not found" };
        }
      
        const isMatched = await bcrypt.compare(mydto.password, customer.password);
        if (isMatched) {
          // If password matches, return success code and customer object
          return { success: true, customer: customer };
        } else {
          // If password does not match, return error code
          return { success: false, message: "Invalid password" };
        }
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

    emergencyHelp(ImageUpload:CustomerImageUpload){
        return this.emergencyHelpRepo.save(ImageUpload);
    }
    
    
}