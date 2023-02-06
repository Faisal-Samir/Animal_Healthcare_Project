import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common/decorators";
import { CustomerService } from "./customer.service";
import { CustomerRegistration, CustomerUpdate, CustomerUploadedAnimalImage } from "./customerform.dto";

let CustomerUploadedImage =[];
@Controller("/customer")
export class CustomerController{
    constructor (private customerService : CustomerService){}

    @Post("/registration")
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }

    @Put("/updateCustomer/:name")
    updateUser( 
        @Body("name") name:CustomerUpdate): any {
          return this.customerService.updateUser(name);
    }

    // all save in array

    @Get("/image")
    insertImage(@Body() adaption : CustomerUploadedAnimalImage){
        CustomerUploadedImage.push(adaption);
        return this.customerService.insertImage();
    }

    @Get("/getAdaptionItems")
    getAllUploadImage(){
        return CustomerUploadedImage; 
    }
    
}
