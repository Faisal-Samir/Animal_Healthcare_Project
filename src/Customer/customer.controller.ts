import { Body, Controller, Param, Post, Put } from "@nestjs/common/decorators";
import { CustomerService } from "./customer.service";
import { CustomerRegistration } from "./customerform.dto";

@Controller()
export class CustomerController{
    constructor (private customerService : CustomerService){}

    @Post("/registration")
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }

    @Put("/updateCustomer/:id")
    getUpdate(@Param("id") id : number):any{

    }
}