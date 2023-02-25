import { Controller, Post, Put, Get, Body, Query, Delete, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorRegistration } from "./doctorform.dto";

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
