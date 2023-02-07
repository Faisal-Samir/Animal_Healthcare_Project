import {  Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe  } from "@nestjs/common";
import {AdminForm } from "./adminform.dto";
import { AdminService } from "./adminservice.service";

@Controller("/admin")
export class AdminController
{

constructor(private adminService: AdminService){}

@Post("/registration")
getRegistration(@Body() register :AdminForm):any{
    return this.adminService.getRegistration(register);
}

@Get("/index")
getAdmin(): any { 
    return this.adminService.getIndex();
}

@Get("/finduser/:id")
 getUserByID(@Param("id",ParseIntPipe) id:number,): any{
    return this.adminService.getUserByID(id);
 }

@Get("/finduser")
getUserByName(@Query() qry:any):any{
    return this.adminService.getUserByName(qry);
}

@Post("/insertuser")
@UsePipes(new ValidationPipe())
insertUser(@Body() mydto:AdminForm): any {
  return this.adminService.insertUser(mydto);
}

@Put("/updateuser/")
@UsePipes(new ValidationPipe())
updateUser(  @Body("name") name:string,  @Body("id") id:number): any {
return this.adminService.updateUser(name, id);
}

@Put("/updateuser/:id")
updateUserbyid( 
  @Body("name") name:string,  @Param("id", ParseIntPipe) id:number ): any {
return this.adminService.updateUserbyid(name,id);
}

@Delete("/deleteuser/:id")
deleteUserbyid( 
 @Param("id", ParseIntPipe) id:number): any {
return this.adminService.deleteUserbyid(id);
}

@Delete("/deleteuser/:name")
deleteUserbyname( 
 @Param("id", ParseIntPipe) id:number): any {
return this.adminService.deleteUserbyid(name);
}

}