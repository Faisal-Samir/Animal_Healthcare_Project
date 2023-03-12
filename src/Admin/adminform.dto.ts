
import { IsNotEmpty, IsInt, Length, IsEmail, IsString, MinLength, Matches } from "class-validator";

export class AdminForm {   
   

  
    @IsNotEmpty({message : "please provide name"})
    @Length(8, 32 , {message : "please name length provide between 8 to 12 character."})
    @IsString({message : "only string is required for name. "})
    name : string;



    @IsNotEmpty({message : "please provide email"})
    @Length(18, 32 , {message : "please email provide between 18 to 32 character."})
    @IsEmail({},{message : 'Follow email format'})
    email : string;




    
    @IsNotEmpty({message:"Please enter your password"})
    @IsString({message : "password will be string "})
    @MinLength(8,{message:"Password must be 8 characters"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])/)
    password: string;


    @IsNotEmpty({message:"Please enter your address"})
    @IsString({message : "Address will be string "})
    address: string;



    //filename:string;



}




