
import { IsInt,isNotEmpty,isString,isEmail,Length,Min, IsNotEmpty, IsString, IsEmail, Matches } from "class-validator";

export class petshopperregistration{

    //For Name Validation
    @IsNotEmpty({message : "Please Enter the Name"})
    @IsString({message : "Provide the valid name only"})
    name : string;
    @Length(8,16,{message: "Provide the name between 8 to 19 character" })
     
    //Password Validation

    @IsNotEmpty({message : "please provide password"})
    @IsString({message : "password will be string "})
    password : string;

    //Name ID validation 
    /*@IsNotEmpty({message : "Please Enter the Name"})
    @IsInt({message : "provide id as a integer number"},)
    @Min(1,{message : "Id must be greater than or equal 1"})
    id : number;*/

    //Phone Number Validation
    @IsNotEmpty({message : "please provide Phone Number"})
    @Length(11,11,{message : "phone number must be 11 digit"})
    phone: string;



}

export class Petshopperinsert{
    @IsNotEmpty({message : "Please Insert your name"})
    @IsString({message:"Only String value is required"})
    name : string;

    @IsNotEmpty({message:"Provided your email"})
    @IsEmail({},{message: "Follow email rules"})
    email: string;

    @IsNotEmpty({message:"Set Password"})
    @IsString({message:"Password will be string"})
    password:string;

    @IsNotEmpty({message : "Provide Address"})
    @IsString({message : "Address will be string "})
    address : string;
}





export class PetShopperForm {   
    id: number;
    name: string;
    email: string;
    password : string;

}
export class PetshopperBlog {
    push(blog: PetshopperBlog) {
      throw new Error("Method not implemented.");
    }
    id: number;
    title: string;
    description: string;
  }