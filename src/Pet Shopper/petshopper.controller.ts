import {Controller,Get,Post,Body,Param,Put, Query,Delete} from "@nestjs/common";
import { PetShopperService } from "./petshopper.service";
import {PetShopperForm} from "./petshopperform.dto";

@Controller("/petshopper")
export class PetShopperController
{ 
  constructor(private petshopperservicec: PetShopperService){}

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
  updateuserbyid(@Body('name') name: string, @Param('id') id: number,): any {
    return this.petshopperservicec.updateuser(name, id);
  }
  @Delete('/deleteuser/:id') //route 5
  deleteuser(@Body('name')name: string,@Param('id')id:number,):any{
    return this.petshopperservicec.deleteuser(name,id);
  }
  @Post('/postproducts/:id')//route 6
  postproducts(@Body('name')name: string,@Param('id') id: number,):any{
    return this.petshopperservicec.postproducts(name,id);
  }
  @Get('/medicinelist/:id')//route 7
  medicinelist(@Query()qry:any):any {
    return this.petshopperservicec.medicinelist(qry);
  }@Get('/foodlist/:id')//route 8
  foodlist(@Query()qry:any):any {
    return this.petshopperservicec.foodlist(qry);
  }
  @Get('/elementslist/:id')//route 9
  elementslist(@Query()qry:any):any {cl
    return this.petshopperservicec.medicinelist(qry);
  }
  @Post('/postblog/:id')//route 6
  postblog(@Body('name')name: string,@Param('id') id: number,):any{
    return this.petshopperservicec.postblog(name, id);
  
}
}