import { Body, Controller, Post } from "@nestjs/common";
import { Get, Param } from "@nestjs/common/decorators";
import { CustomerRegistration } from "./customer";


let Customers = [];
@Controller("/users")
export class CustomerRegistrationController{
    @Post()
    getRegister(@Body() register : CustomerRegistration ){
        Customers.push(register);
        return 'registration done';
    }

    @Get()
    getUsers(){
        return Customers;
    }

    @Get(":id")
    getUser(@Param("id") id : number){
        return Customers.find(user => user.id == +id);
    }
}
