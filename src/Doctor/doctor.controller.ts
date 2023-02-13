import { Controller, Post, Put, Get, Body, Query, Delete, Param } from "@nestjs/common";
//import { Get } from "@nestjs/common/decorators";
import { DoctorService } from "./doctor.service";
import DoctorForm from "./doctorform.dto";

@Controller("/doctor")
export class DoctorController
{
    constructor( private doctorService: DoctorService ){}

    @Get("/index")//route 1
        getDoctor(): any{
        return this.doctorService.getIndex();
    }
    
    @Post('/insertuser')//route 2
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
    }
    


}