import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common/decorators";
import { CustomerService } from "./customer.service";
import { CustomerRegistration, CustomerUpdate, CustomerUploadedAnimalImage, CustomerAppointment } from "./customerform.dto";

let CustomerUploadedImage =[];
let AppointmentList = [];
@Controller("/customer")
export class CustomerController{
    constructor (private customerService : CustomerService){}
    // registration purpose
    @Post("/registration")
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }
    // update Customer profile by it's name
    @Put("/updateCustomer/:name")
    updateUser( 
        @Body("name") name:CustomerUpdate): any {
          return this.customerService.updateUser(name);
    }

    // all save in array
    // users animal photo upload to adaption purpose
    @Get("/image")
    insertImage(@Body() adaption : CustomerUploadedAnimalImage){
        CustomerUploadedImage.push(adaption);
        return this.customerService.insertImage();
    }
    // return all pet animal image means history of adaption list for instant of database store it in an array

    @Get("/getAdaptionItems")
    getAllUploadImage(){
        return CustomerUploadedImage; 
    }
    
    @Post("/appointment")
    getAppointment(@Body() appointment : CustomerAppointment)
    {
        AppointmentList.push(appointment);
        return this.customerService.getAppointment(appointment);
    }

    @Get("/getAppointment")
    appointment(@Query() queries:CustomerAppointment): any{
        return this.customerService.appointment(queries);
    }

    
}
