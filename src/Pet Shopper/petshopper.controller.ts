import {Controller,Get,Post,Body,Param,Put, Query,Delete, UsePipes, ValidationPipe} from "@nestjs/common";
import { PetShopperService } from "./petshopper.service";
import {PetshopperBlog, PetShopperForm, petshopperregistration} from "./petshopperform.dto";


let blog=[];
@Controller("/petshopper")
export class PetShopperController
{ 
  constructor(private petshopperservicec: PetShopperService){}

  @Post("/registration")
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
  updateuserbyid(@Body('name') name: string,@Body('email') email:string,@Body('address') address:string,@Body('password')password:string, @Param('id') id: number,): any {
    return this.petshopperservicec.updateuser(name, id,email,address,password);
  }
  @Delete('/deleteuser/:id') //route 5
  deleteuser(@Body('name')name: string,@Param('id')id:number,):any{
    return this.petshopperservicec.deleteuser(name,id);
  }
  @Post('/postproducts/:id')//route 6
  postproducts(@Body('name')name: string,@Param('id') id: number,):any{
    return this.petshopperservicec.postproducts(name,id);
  }
  @Post('/medicinelist/:id')//route 7
  medicinelist(@Query()qry:any):any {
    return this.petshopperservicec.medicinelist(qry);
  }@Post('/foodlist/:id')//route 8
  foodlist(@Query()qry:any):any {
    return this.petshopperservicec.foodlist(qry);
  }
  @Post('/elementslist/:id')//route 9
  elementslist(@Query()qry:any):any {
    return this.petshopperservicec.medicinelist(qry);
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
@Post('/postinfo/:id')//route 11
postinfo(@Query()qry:any):any {
  return this.petshopperservicec.postblog(qry);

}
@Delete('/delteblog/:id')//route 12
  delteblog(@Query()qry:any):any {
    return this.petshopperservicec.postinfo(qry);
  
}

}