import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Max, Min} from "class-validator";
export class CustomerRegistration{
    @IsNotEmpty({message : "please provide name"})
    @Length(8, 12 , {message : "please name length provide between 8 to 12 character."})
    @IsString({message : "only string is required for name. "})
    name : string;

    @IsNotEmpty({message : "please provide id"})
    @IsInt({message : "provide id as a integer number"},)
    @Min(1,{message : "Id must be greater than or equal 1"})
    id : number;

    @IsNotEmpty({message : "please provide email"})
    @Length(18, 32 , {message : "please email provide between 18 to 32 character."})
    @IsEmail()
    email : string;

    // @IsNotEmpty({message : "please provide phone number"})
    // @Min(11,{message : "phone number must be 11 digit"})
    // @Max(11,{message : "phone number must be 11 digit"})
    // @IsNotEmpty({message : "please provide password"})
    password : string;

    // @IsNotEmpty({message : "please provide gender"})
    // @IsString({message : "gender will be string "})
    gender : string;
    address : string;
    city : string; 
    division : string; 
}

export class CustomerUpdate{
    name : string;
    email : string;
    password : string;
    address : string;
    city : string;
    division : string; 
}

export class CustomerUploadedAnimalImage{
    fileName : string;
    caption : string;
    type : string;
    color : string;
    gender : string; 
}

export class CustomerAppointment{
    patientName : string;
    age : number;
    phone : string;
    branch : string;
    type : string;
    nameOfDoctor : string;
}

export class CustomerBlog{
    blog_id : string;
    title : string;
    description : string;
}