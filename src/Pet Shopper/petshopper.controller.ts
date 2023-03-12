import {Controller,Get,Post,Body,Param,Put, Query,Delete, UsePipes, ValidationPipe, Session, UnauthorizedException, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { IsPhoneNumber } from "class-validator";
import { diskStorage } from "multer";
import { PetShopperService } from "./petshopper.service";
import {PetshopperBlog, PetShopperForm, petshopperregistration} from "./petshopperform.dto";


let blog=[];
@Controller("/petshopper")
export class PetShopperController
{ 
  constructor(private petshopperservicec: PetShopperService){}

  @Post("/registration")//route 10
  @UsePipes(new ValidationPipe())
  getRegistration(@Body() register : petshopperregistration):any{
      return this.petshopperservicec.getRegistration(register);
  }

  @Get("/index") //route 1
    getAdmin(): any { 
        return this.petshopperservicec.getIndex();
    }

  
   @Post('/insertuser')//route 2
  insertUser(@Body() petshopperdto: PetShopperForm): any {
    return this.petshopperservicec.insertUser(petshopperdto);
  }

  @Get ('/finduser/:id') //route 3
  getuserbyid(@Query()qry:any):any {
    return this.petshopperservicec.getuserbyid(qry);
  }

  @Put('/updateuser/:id') //route 4
  updateuserbyid(@Body('name') name: string,@Body('email') email:string,@Body('password')password:string, @Param('id') id: number,@Body('phone') phone:number): any {
    return this.petshopperservicec.updateuser(id,name,email,password,phone,);
  }
  @Delete('/deleteuser/:id') //route 5
  deleteuser(@Body('name')name: string,@Param('id')id:number,):any{
    return this.petshopperservicec.deleteuser(name,id);
  }
  @Post('/postproducts/:id')//route 6
  postproducts(@Body('name')name: string,@Param('id') id: number,@Body ('amount')amount:number,):any{
    return this.petshopperservicec.postproducts(name,id);
  
  }
  @Post('/medicinelist/:id')//route 6
  medicinelist(@Body('name')name: string,@Param('id') id: number,@Body ('amount')amount:number,):any{
    return this.petshopperservicec.postproducts(name,id);
  }

  @Post('/foodlist/:id')//route 8
  foodlist(@Query()qry:any):any {
    return this.petshopperservicec.foodlist(qry);
  }
  @Post('/elementslist/:id')//route 9
  elementslist(@Query()qry:any):any {
    return this.petshopperservicec.elementslist(qry);
  }
  @Post('/postblog/:id')//route 10
  @UsePipes(new ValidationPipe())
  blogWriting(@Body() blog:PetshopperBlog):string{
    blog.push(blog);
    return this.petshopperservicec.blogwriting();
  }
  postblog(@Query()qry:any):any {
    return this.petshopperservicec.postblog(qry);
  
}
@Post('/postinfo/:id')//route 12
postinfo(@Query()qry:any):any {
  return this.petshopperservicec.postblog(qry);

}
@Delete('/delteblog/:id')//route 13
  deleteblog(@Query()qry:any):any {
    return this.petshopperservicec.deleteblog(qry);
  
}
@Get('/logout')
getLogout(@Session() session){
    if(session.destroy()){
        return {message: 'Logout Successfully'};
    }
    else{
        throw new UnauthorizedException("invalid actions");
    }

  }
  
  @Post('/signup')
  @UseInterceptors(FileInterceptor('myfile',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  
  }))
  signup(@Body() mydto:PetShopperForm,@UploadedFile(  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 16000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File){
  
  mydto.filename = file.filename;  
  
  return this.petshopperservicec.signup(mydto);
  console.log(file)
  }
  @Get('/signin')
  signin(@Session() session, @Body() mydto:PetShopperForm)
  {
  if(this.petshopperservicec.signin(mydto))
  {
    session.email = mydto.email;
  
    console.log(session.email);
    return {message:"success"};
  
  }
  else
  {
    return {message:"invalid credentials"};
  }
   
  }
  @Get('/signout')
  signout(@Session() session)
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
  return this.petshopperservicec.sendEmail(mydata);
  }
  
  
  

}