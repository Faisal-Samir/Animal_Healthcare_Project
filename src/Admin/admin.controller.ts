import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  Session,
  UseGuards
  } from '@nestjs/common';
  import { UnauthorizedException } from '@nestjs/common/exceptions';//add
  import { FileInterceptor } from '@nestjs/platform-express';//add
  import { diskStorage } from 'multer';//add
  import { SessionGuard } from './session.guard';//add
  import { CustomerRegistration, CustomerUpdate } from 'src/customer/customerform.dto';//change
  import { CustomerService } from 'src/customer/customer.service';//change
  import { AdminForm } from './adminform.dto';
  import { AdminFormUpdate } from './adminformupdate.dto';
  import { AdminService } from './adminservice.service';
  
  import * as bcrypt from 'bcrypt';
  
  @Controller('/admin')
  export class AdminController {
    constructor(private adminService: AdminService,
    private customerService: CustomerService  //change
      ) {}

//route-1  admin registation
      @Post("/registration")
      @UsePipes(new ValidationPipe())
      getRegistration(@Body() register:AdminForm):any{
          return this.adminService.getRegistration(register);
      }
//route-2 admin login
      @Get('/login')
      async login(@Session() session, @Body() mydto : AdminForm){
          const loginResult = await this.adminService.login(mydto);
          if(loginResult.success){
              session.email = mydto.email;
              console.log(session.email);
              return {message : 'Successfully login' };
          }
          else{
              return {message : 'invalid credentials' };
          }
      }
 //route-3 admin logout   
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


//route-4 admin dashboard
    @Get('/index')
    @UseGuards(SessionGuard)
    getAdmin(): any {
      return this.adminService.getIndex();
    }

//route-5 find admin by id
    @Get('/findadmin/:id')
    //@UseGuards(SessionGuard)
    getAdminByID(@Param('id', ParseIntPipe) id: number): any {
      return this.adminService.getUserByID(id);
    }
 //route-6 find admin by name
    @Get('/findadmin')
    @UseGuards(SessionGuard)
    getAdminByIDName(@Query() qry: any): any {
      return this.adminService.getUserByIDName(qry);
    }

  //route-7 present admin insert new admin
    @Post('/insertadmin')
   // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    insertAdmin(@Body() mydto: AdminForm): any {
      return this.adminService.insertUser(mydto);
    }



  //route-8 present admin update his information
  
    @Put('/updateadmin/')
    //@UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateAdmin(@Body('name') name: string, @Body('id') id: number): any {
      return this.adminService.updateUser(name, id);
    }

    //route-9 present admin update other admin information
  
    @Put('/updateadmin/:id')
   // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateAdminbyid( @Body() mydto: AdminFormUpdate,@Param('id', ParseIntPipe) id: number,): any {
      return this.adminService.updateUserbyid(mydto, id);
    }
  
    //route-10 present admin delete other admin using id
    @Delete('/deleteadmin/:id')
    //@UseGuards(SessionGuard)
    deleteAdminbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.adminService.deleteUserbyid(id);
     
    }



    




    //--------------------------------Customer------------------------------------------//

    //route-11 admin insert customer
  
  //   @Post('/insertCustomer')
  //   @UsePipes(new ValidationPipe())
  //     insertCustomer(@Body() customerdto: CustomerRegistration): any {
  //      return this.customerService. getRegistration(customerdto);
  //     }


  //   //route -12 admin find customer using id

  //     @Get('/findcustomersbyadmin/:id')
  //     getCustomerByAdminID(@Param('id', ParseIntPipe) id: number): any {
  //         return this.adminService. getCustomersByAdminID(id)
  //       }

  //   //route -13 admin update customer using id
  //   @Put('/updatecustomer/:id')
  //   @UsePipes(new ValidationPipe())
  //   updateCustomerbyid( @Body() customerdto:CustomerUpdate,@Param('id', ParseIntPipe) id: number,): any {
  //     return this.customerService.adminUpdateCustomerbyid(customerdto, id);
  //   }

  //   //route -14 admin delete customer using id

  //   @Delete('/deleteCustomer/:id')
  //   getDeleteCustomerbyid(@Param('id', ParseIntPipe) id: number): any {
  //     return this.customerService.deleteCustomerbyid(id);
     
      
  // }


//------------------------------------------Customer End---------------------------------//







}
     
  
  
  