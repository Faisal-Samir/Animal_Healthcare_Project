import { Controller, Post, Put, Get, Body, Query, Delete, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { get } from "http";
import { DoctorService } from "./doctor.service";
import { DoctorRegistration, Prescription } from "./doctorform.dto";

@Controller("/doctor")
export class DoctorController
{
    constructor( private doctorService: DoctorService ){}

    @Post("/registration")//route 1
    @UsePipes(new ValidationPipe())
    getRegistration(@Body() register : DoctorRegistration): any{
        return this.doctorService.getRegistration(register);
    }
    
    @Put("/updateDoctor")
    updateUser(
        @Body("name") name:DoctorRegistration, @Body("phone") phone:DoctorRegistration, @Body("email") email:DoctorRegistration, @Body("password") password:DoctorRegistration, @Body('id') id: number): any {
            return this.doctorService.updateUser(name,id,phone,email,password);
        }
    
    @Post("/prescription")
    @UsePipes(new ValidationPipe())
    getPrescription(@Body() presc : Prescription){
        return this.doctorService.getPrescription(presc);
    }

    @Get("/getPrescription")
    prescription(@Query() queries : Prescription): any{
        return this.doctorService.prescription(queries);
    }

    @Get("/allPrescription")
    getAllPrescription(){
        return this.doctorService.getAllPrescription();
    }
    
    /*@Post('/insertuser')//route 2
        insertUser(@Body() doctordto: DoctorForm): any {
        return this.doctorService.insertUser(doctordto);
    }

    @Get ('/finduser/:id') //route 3
        getuserbyid(@Query()qry:any):any {
        return this.doctorService.getuserbyid(qry);
    }

    @Put('/updateuser/:id') //route 4
        updateuserbyid(@Body('name') name: string, @Param('id') id: number,): any {
        return this.doctorService.updateuser(name, id);
    }
    @Delete('/deleteuser/:id') //route 5
        deleteuser(@Body('name')name: string,@Param('id')id:number,):any{
        return this.doctorService.deleteuser(name,id);
    }*/
    
}
