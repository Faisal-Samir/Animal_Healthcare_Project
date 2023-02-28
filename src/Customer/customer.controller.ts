import { Body, Controller, Get, Param, Post, Put, Query, Delete, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerRegistration, CustomerUploadedAnimalImage, CustomerAppointment, CustomerBlog } from "./customerform.dto";


@Controller("/customer")
export class CustomerController{
    constructor (private customerService : CustomerService){}

    // registration purpose route-1 using database
    @Post("/registration")
    @UsePipes(new ValidationPipe())
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }


    // update Customer profile by it's name route-2
    @Put("/updateCustomer/:id")
    updateUserById( 
        @Body() myDto:CustomerRegistration,@Param('id',ParseIntPipe) id: number): any {
          return this.customerService.updateUserById(myDto,id);
    }
    // users animal photo upload to adaption purpose route-3
    @Get("/image")
    @UsePipes(new ValidationPipe())
    insertImage(@Body() adaption : CustomerUploadedAnimalImage):any{
        return this.customerService.insertImage(adaption);
    }

    // return all pet animal image means history of adaption list for instant of database store it in an array route-4
    @Get("/getAdaptionItems")
    getAllUploadImage(){
        return this.customerService.getAllUploadImage(); 
    }
    // route-5
    @Post("/appointment")
    @UsePipes(new ValidationPipe())
    getAppointment(@Body() appointment : CustomerAppointment)
    {
        return this.customerService.getAppointment(appointment);
    }
    // route-6
    @Get("/getAppointment")
    appointment(@Query() queries:CustomerAppointment): any{
        return this.customerService.appointment(queries);
    }
    // route-7
    @Get("/allAppointment")
    getAllAppointment(){
        return this.customerService.getAllAppointment();
    }

    // roue-8
    @Put("/updateAppointment/:id")
    updateAppointment(@Param("id",ParseIntPipe)id:number,@Body()appointmentDto : CustomerAppointment){
        return this.customerService.updateAppointment(id,appointmentDto);
    }
    // route-9
    @Post("/blog")
    @UsePipes(new ValidationPipe())
    blogWriting(@Body() blog : CustomerBlog):string{
        return this.customerService.blogWriting(blog);
    }
    // route-10
    // using it customer can see all his/her blog those he/she uploaded
    @Get("/getBlog")
    getBlog(){
        return this.customerService.getBlog();
    }
    // route-11
    // user acn search their blog by blog id
    @Get("/getBlog/:id")
    findBlogById(@Param("id", ParseIntPipe) id : number){
        return this.customerService.findBlogById(id);
    }

    // route-12
    @Put("/updateBlog/:id")
    updateBlog(@Param("id", ParseIntPipe) id : number, @Body() blogDto : CustomerBlog){
        return this.customerService.updateBlog(id,blogDto);
    }

    

    // route-13
    @Delete("/deleteBlog/:id")
    deleteBlogById(@Param("id", ParseIntPipe) id : number){
        console.log(`deleted blog id is ${id}`)
        return this.customerService.deleteBlogById(id);
    }

    
}
