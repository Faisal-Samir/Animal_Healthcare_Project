import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common/decorators";
import { CustomerService } from "./customer.service";
import { CustomerRegistration, CustomerUpdate } from "./customerform.dto";

@Controller("/customer")
export class CustomerController{
    constructor (private customerService : CustomerService){}

    @Post("/registration")
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }

    @Put("/updateCustomer/:name")
    updateUser( 
        @Body("name") name:string): any {
          return this.customerService.updateUser(name);
    }

    @Get("/getcustomer/:id")
        getUserByID(@Param("id") id:number): any {
          return this.customerService.getUserByID(id);
    }

    // all save in array
    
}
