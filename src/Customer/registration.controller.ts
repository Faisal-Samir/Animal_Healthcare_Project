import { Body, Post } from "@nestjs/common";
import { Controller, Delete, Get, Param, Put, Req } from "@nestjs/common/decorators";
import { CustomerRegistration } from "./customer";
import { Request } from "express";
import { CustomerAppointment } from "./appointment";


let Customers = [];
let Appointments = [];
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
    const user = Customers.find((user => +user.id === +id));
    if (!user) {
      return { message: "User not found" };
    }

    return user;
  }
    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUser: CustomerRegistration) {
      let userIndex = Customers.findIndex((user => +user.id === +id));
      if (userIndex == -1) {
        return "User not found" ;
      }
      Customers[userIndex] = updateUser;
      return "User updated" ;
    }

    
}
@Controller('appointment')
  export class CustomerAppointmentController{

    @Post('')
    getAppointment(@Body() appointment : CustomerAppointment)
    {
      Appointments.push(appointment);
      return "Registration for appointment";
    } 

    @Get("/appointmentHistory")
    getAppointmentHistory(@Body() appointment: CustomerAppointment)
    {
      return Appointments;
    }
  }

