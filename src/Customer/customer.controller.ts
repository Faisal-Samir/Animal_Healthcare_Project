import { Body, Controller, Get, Param, Post, Put, Query, Delete, ParseIntPipe, UsePipes, ValidationPipe, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UseInterceptors, Session, UnauthorizedException, UseGuards} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { CustomerService } from "./customer.service";
import { CustomerRegistration, CustomerUploadedAnimalImage, CustomerAppointment, CustomerBlog, CustomerImageUpload } from "./customerform.dto";
import { SessionGuard } from "./session.gurd";


@Controller("/customer")
export class CustomerController{
    constructor (private customerService : CustomerService){}

    // registration purpose route-1 using database
    @Post("/registration")
    @UsePipes(new ValidationPipe())
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }

    // login route-2
    @Get('/login')
    async login(@Session() session, @Body() mydto : CustomerRegistration){
        const loginResult = await this.customerService.login(mydto);
        if(loginResult.success){
            session.email = mydto.email;
            console.log(session.email);
            return {message : 'Successfully login' };
        }
        else{
            return {message : 'invalid credentials' };
        }
    }
    
    // update profile route-3
    @Put('/updateProfile/')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateCustomer(@Session() session,@Body() mydto: string): any {
    console.log(session.email);
    return this.customerService.updateCustomer(mydto, session.email);
  }

    // update Customer profile by it's name route-2
    // @Put("/updateCustomer/:id")
    // @UseGuards(SessionGuard)
    // updateUserById( 
    //     @Body() myDto:CustomerRegistration,@Param('id',ParseIntPipe) id: number): any {
    //       return this.customerService.updateUserById(myDto,id);
    // }
    // users animal photo upload to adaption purpose route-4
    @Get("/image")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    insertImage(@Body() adaption : CustomerUploadedAnimalImage):any{
        return this.customerService.insertImage(adaption);
    }

    // return all pet animal image means history of adaption list for instant of database store it in an array route-5
    @Get("/getAdaptionItems")
    @UseGuards(SessionGuard)
    getAllUploadImage(){
        return this.customerService.getAllUploadImage(); 
    }
    // route-6
    @Post("/appointment")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    getAppointment(@Body() appointment : CustomerAppointment)
    {
        return this.customerService.getAppointment(appointment);
    }
    // route-7
    @Get("/getAppointment")
    @UseGuards(SessionGuard)
    appointment(@Query() queries:CustomerAppointment): any{
        return this.customerService.appointment(queries);
    }
    // route-8
    @Get("/allAppointment")
    @UseGuards(SessionGuard)
    getAllAppointment(){
        return this.customerService.getAllAppointment();
    }

    // roue-9
    @Put("/updateAppointment/:id")
    @UseGuards(SessionGuard)
    updateAppointment(@Param("id",ParseIntPipe)id:number,@Body()appointmentDto : CustomerAppointment){
        return this.customerService.updateAppointment(id,appointmentDto);
    }
    // route-10
    @Post("/blog")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    blogWriting(@Body() blog : CustomerBlog):string{
        return this.customerService.blogWriting(blog);
    }
    // route-11
    // using it customer can see all his/her blog those he/she uploaded
    @Get("/getBlog")
    @UseGuards(SessionGuard)
    getBlog(){
        return this.customerService.getBlog();
    }
    // route-12
    // user acn search their blog by blog id
    @Get("/getBlog/:id")
    @UseGuards(SessionGuard)
    findBlogById(@Param("id", ParseIntPipe) id : number){
        return this.customerService.findBlogById(id);
    }

    // route-13
    @Put("/updateBlog/:id")
    @UseGuards(SessionGuard)
    updateBlog(@Param("id", ParseIntPipe) id : number, @Body() blogDto : CustomerBlog){
        return this.customerService.updateBlog(id,blogDto);
    }

    // route-14
    @Delete("/deleteBlog/:id")
    @UseGuards(SessionGuard)
    deleteBlogById(@Param("id", ParseIntPipe) id : number){
        console.log(`deleted blog id is ${id}`)
        return this.customerService.deleteBlogById(id);
    }

    // route-15
    // upload image to get treatment help for emergency
    @Post("/imageUpload")
    @UseGuards(SessionGuard)
    @UseInterceptors(FileInterceptor('image',
    {storage:diskStorage({
        destination: './HelpImage',
        filename : function(_req,file, cb){
            cb(null,Date.now()+file.originalname)
        }
    })}
    ))
    uploadFile(@Body()uploadDto:CustomerImageUpload,@UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize:2000000}),
                new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/}),
            ],
        }),
    )image: Express.Multer.File){
        console.log(uploadDto);
        console.log(image.filename);
        console.log(image.originalname);

        uploadDto.file = image.filename;
        return this.customerService.emergencyHelp(uploadDto);
    }

    // logout route-16
    @Get('/logout')
    logout(@Session() session)
    {
        if(session.destroy())
        {
            return {message:"you are logged out"};
        }
        else
        {
            throw new UnauthorizedException("invalid actions");
        }
    }

    @Post('/sendemail')
        sendEmail(@Body() mydata){
        return this.customerService.sendEmail(mydata);
    }
}
