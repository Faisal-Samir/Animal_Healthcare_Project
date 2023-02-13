import {  Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe,BadRequestException,HttpStatus,HttpCode  } from "@nestjs/common";


import {
    AdminLogin, 
    DoctorID,DoctorName,InsertDoctor, UpdateDoctor,UpdateDoctorID,DeleteDoctor, 
    CustomerID,CustomerName,InsertCustomer, UpdateCustomer,UpdateCustomerID,DeleteCustomer


} from "./adminform.dto";


import { AdminService } from "./adminservice.service";


@Controller("/admin")
export class AdminController
{


constructor(private adminService: AdminService){}

//---------------------------------------------Admin----------------------------------------//
//Admin Dash Board//
@Get("/index")
getAdmin(): any { 
    return this.adminService.getIndex();
}
//Admin Login//
@Post("/login")
@UsePipes(new ValidationPipe())
@HttpCode(HttpStatus.OK)
getLogin(@Body() login :AdminLogin):any{
    return this.adminService.getLogin(login);
   
}
//--------------------------------------------Admin End-----------------------------------------//





//------------------------------------------Doctor Start----------------------------------------//

//Admin search doctor using id//

@Get("/doctorUser/:id")
@UsePipes(new ValidationPipe())
getDoctorByID(@Body() doctor:DoctorID): any{
    return this.adminService.getDoctorByID(doctor);

 }

//Admin search doctor using name or id//

@Get("/finduser")
@UsePipes(new ValidationPipe())
getDoctorByName(@Body() doctorName:DoctorName):any{
    return this.adminService.getDoctorByName(doctorName);
}



//Admin insert doctor//

@Post("/insertDoctor")
@UsePipes(new ValidationPipe())
getInsertDoctor(@Body() insertDoctor:InsertDoctor): any {
  return this.adminService.getInsertDoctor(insertDoctor);
}


//Admin update doctor//


@Put("/updateuser/")
@UsePipes(new ValidationPipe())
getDoctorUpdate(@Body() doctorUpdate:UpdateDoctor): any {
return this.adminService.getDoctorUpdate(doctorUpdate);
}


//Admin update doctor using id//


@Put("/updateuser/:id")
@UsePipes(new ValidationPipe())
getDoctorUpdateById( @Body() updateDoctorId: UpdateDoctorID): any {
return this.adminService.getDoctorUpdateById(updateDoctorId);
}


//Admin delete doctor//

@Delete("/deleteuser/:id")
@UsePipes(new ValidationPipe())
getDeleteDoctorById( @Body() deleteDoctor:DeleteDoctor): any {
return this.adminService.getDeleteDoctorById(deleteDoctor);
}

//-----------------------------------------Doctor End---------------------------------//






//----------------------------------------Customer-------------------------------------//


//Admin search customer using id//

@Get("/customerUser/:id")
@UsePipes(new ValidationPipe())
getCustomerByID(@Body() customer:CustomerID): any{
    return this.adminService.getCustomerByID(customer);

 }

//Admin search customer using name or id//

@Get("/cfinduser")
@UsePipes(new ValidationPipe())
getCustomerByName(@Body() customerName:CustomerName):any{
    return this.adminService.getCustomerByName(customerName);
}



//Admin insert customer//

@Post("/insertCustomer")
@UsePipes(new ValidationPipe())
getInsertCustomer(@Body() insertCustomer:InsertCustomer): any {
  return this.adminService.getInsertCustomer(insertCustomer);
}


//Admin update customer//

@Put("/cupdateuser/")
@UsePipes(new ValidationPipe())
getCustomerUpdate(@Body() customerUpdate:UpdateCustomer): any {
return this.adminService.getCustomerUpdate(customerUpdate);
}


//Admin update customer using id//


@Put("/cupdateuser/:id")
@UsePipes(new ValidationPipe())
getCustomerUpdateById( @Body() updateCustomerId: UpdateCustomerID): any {
return this.adminService.getCustomerUpdateById(updateCustomerId);
}


//Admin delete customer//

@Delete("/cdeleteuser/:id")
@UsePipes(new ValidationPipe())
getDeleteCustomerById( @Body() deleteCustomer:DeleteCustomer): any {
return this.adminService.getDeleteCustomerById(deleteCustomer);

}






//----------------------------------------Customer End----------------------------------//
















}