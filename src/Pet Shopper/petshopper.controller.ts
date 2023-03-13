import {Controller,Get,Post,Body,Param,Put, Query,Delete, UsePipes, ValidationPipe, Session, UnauthorizedException, UseInterceptors, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UseGuards} from "@nestjs/common";
import { PetShopperService } from "./petshopper.service";
import {PetshopperBlog, PetShopperForm, petshopperregistration,Petshopperinsert,PetshopperProduct, Medicinelist, Foodlist,} from "./petshopperform.dto";

// import { FileInterceptor } from "@nestjs/platform-express";
// import { IsPhoneNumber } from "class-validator";
// import { diskStorage } from "multer";
// import { Repository } from "typeorm";
// import { productlistEntity } from "./Entity/productlist.entity";
// import { FoodlistEntity } from "./Entity/foodlists.entity";
// import { SessionGuard } from "./Session.gurd";

@Controller("/petshopper")
export class PetShopperController
{ 
  constructor(private petshopperservicec: PetShopperService){}

  @Post("/registration")//route 1
  @UsePipes(new ValidationPipe())
  getRegistration(@Body() register : petshopperregistration):any{
      return this.petshopperservicec.getRegistration(register); 

  }


  @Get("/index") //route 3
    getAdmin(): any { 
        return this.petshopperservicec.getIndex();
    }
   @Post('/insertuser')//route 4
  insertUser(@Body() petshopperdto: PetShopperForm): any {
    return this.petshopperservicec.insertUser(petshopperdto);
  }
  @Get ('/finduser/:id') //route 5
  getuserbyid(@Query()qry:any):any {
    return this.petshopperservicec.getuserbyid(qry);
  }
  @Put('/updateuser/:id') //route 6
  updateuserbyid(@Body('name') name: string,@Body('email') email:string,@Body('password')password:string, @Param('id') id: number,@Body('address') address:string,@Body('phone') phone:number,@Body('district') district:string): any {
    return this.petshopperservicec.updateuser(id,name,email,password,phone,address,district);
  }

  
  @Delete('/deleteuser/:id') //route 7
  deleteuser(@Body('name')name: string,@Param('id')id:number,):any{
    return this.petshopperservicec.deleteuser(name,id);
  }
  @Post('/postproducts')//route 8
  postproducts(@Body()ndto:PetshopperProduct):any{
    return this.petshopperservicec.postproduct(ndto);
     
  }
  @Post('/medicinelist')//route 9
  medicinelist(@Body()mdto:Medicinelist):any{
    return this.petshopperservicec.medicinelist(mdto);
  }

  @Post('/foodlist')//route 10
  foodlist(@Body()fdto:Foodlist):any{
    return this.petshopperservicec.foodlist(fdto);
  }
  @Post('/elementslist/:id')//route 11
  elementslist(@Query()qry:any):any {
    return this.petshopperservicec.elementslist(qry);
  }
  @Post('/postblog/:id')//route 12
  @UsePipes(new ValidationPipe())
  blogWriting(@Body() blog:PetshopperBlog):string{
    blog.push(blog);
    return this.petshopperservicec.blogwriting();
  }
  @Get('/signin')//route 13
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
  @Get('/signout')//route 14
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

  @Post('/sendemail')//route 15
sendEmail(@Body() mydata){
return this.petshopperservicec.sendEmail(mydata);
}

}

