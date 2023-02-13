import { Body, Controller, Get, Param, Post, Put, Query, Delete, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerRegistration, CustomerUpdate, CustomerUploadedAnimalImage, CustomerAppointment, CustomerBlog } from "./customerform.dto";

let CustomerUploadedImage =[];
let AppointmentList = [];
let Blogs = [];
@Controller("/customer")
export class CustomerController{
    constructor (private customerService : CustomerService){}
    // registration purpose route-1
    @Post("/registration")
    @UsePipes(new ValidationPipe())
    getRegistration(@Body() register : CustomerRegistration):any{
        return this.customerService.getRegistration(register);
    }
    // update Customer profile by it's name route-2
    @Put("/updateCustomer/:name")
    updateUser( 
        @Body("name") name:CustomerUpdate): any {
          return this.customerService.updateUser(name);
    }

    // all save in array
    // users animal photo upload to adaption purpose route-3
    @Get("/image")
    @UsePipes(new ValidationPipe())
    insertImage(@Body() adaption : CustomerUploadedAnimalImage){
        CustomerUploadedImage.push(adaption);
        return this.customerService.insertImage();
    }
    // return all pet animal image means history of adaption list for instant of database store it in an array route-4

    @Get("/getAdaptionItems")
    getAllUploadImage(){
        return CustomerUploadedImage; 
    }
    // route-5
    @Post("/appointment")
    @UsePipes(new ValidationPipe())
    getAppointment(@Body() appointment : CustomerAppointment)
    {
        AppointmentList.push(appointment);
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
        return AppointmentList;
    }
    // route-8
    @Post("/blog")
    @UsePipes(new ValidationPipe())
    blogWriting(@Body() blog : CustomerBlog):string{
        Blogs.push(blog);
        return this.customerService.blogWriting();
    }
    // route-9
    @Get("/getBlog")
    getBlog(){
        return Blogs;
    }
    // route-10
    @Get("/getBlog/:blog_id")
    findBlogById(@Param("blog_id", ParseIntPipe) id : number){
        const blog = Blogs.find(blog =>  +blog.blog_id == +id);;
        if(!blog)
        {
            return "Blog not found";
        }
        return blog;
    }

    // route-11
    @Put("/updateBlog/:blog_id")
    updateBlog(@Param("blog_id", ParseIntPipe) id : number, @Body() updateBlog : CustomerBlog){
        const blogIndex = Blogs.findIndex(blog =>  +blog.blog_id == +id);
        if (blogIndex == -1) {
            return "Blog not found" ;
        }
        Blogs[blogIndex] = updateBlog;
        return this.customerService.updateBlog();
    }

    // route-12
    @Delete("/delete/:blog_id")
    deleteById(@Param("blog_id", ParseIntPipe) id:number){
        return this.customerService.deleteById(id);
    }

    // route-13
    @Delete("/deleteBlog/:blog_id")
    deleteBlogById(@Param("blog_id", ParseIntPipe) id : number){
        Blogs = Blogs.filter(blog => blog.blog_id != +id);
        return this.customerService.deleteBlogById(id);
    }
}
