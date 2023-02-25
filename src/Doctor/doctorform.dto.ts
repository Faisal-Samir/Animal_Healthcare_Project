import { IsEmail, IsNotEmpty, isNotEmpty, IsString, Length, Matches } from "class-validator";

/*export default class DoctorForm {   
    id: number;
    name: string;
}
export class DoctorBlog {
    id: number;
    title: string;
    description: string;
  }*/

  export class DoctorRegistration{
    @IsNotEmpty({message : "please provide name"})
    @Length(8, 12 , {message : "please name length provide between 8 to 12 character."})
    @IsString({message : "only string is required for name. "})
    name : string;

    @IsNotEmpty({message : "please provide Phone Number"})
    @Length(11,11,{message : "phone number must be 11 digit"})
    phone: string;

    @IsNotEmpty({message : "please provide email"})
    @Length(18, 32 , {message : "please email provide between 18 to 32 character."})
    @IsEmail({},{message : 'Follow email format'})
    email : string;

    @IsNotEmpty({message : "please provide password"})
    @IsString({message : "password will be string "})
    // @Matches('[a-zA-z]*[4-9]{4}','',{message : "password is too week"})
    @Matches(RegExp('[a-zA-z]*[1-9]{6}'),{message : "password is too week"})
    password : string;
  }