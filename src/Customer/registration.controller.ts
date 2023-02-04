import { Body, Controller, Post } from "@nestjs/common";
import { Delete, Get, Param, Put } from "@nestjs/common/decorators";
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
    findUserById(@Param("id") id: number) {
      let user = Customers.find((user => +user.id === +id));
      if (user != -1) {
        // return { message: "User found" };
        return user;
      }

    // return user;
  }
    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUser: CustomerRegistration) {
      let userIndex = Customers.findIndex((user => +user.id === +id));
      if (userIndex == -1) {
        return { message: "User not found" };
      }
      Customers[userIndex] = updateUser;
      return { message: "User updated" };
    }
}
