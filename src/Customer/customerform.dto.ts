import { IsAlpha, IsEmail, IsInt, isNotEmpty, IsNotEmpty, IsString, Length, max, Max, min, Min} from "class-validator";
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
    @IsNotEmpty({message : "Provide blog id"})
    @IsInt({message : "id must be integer"})
    @Min(1,{message : "blog id minimum required is 1"})
    blog_id : string;

    @IsNotEmpty({message : "Blog title is required"})
    @Length(30,50, {message : "blog title character is between 30 to 50"})
    @IsString({message : "Blog tile must be string"})
    title : string;

    @IsNotEmpty({message : "Blog description is required"})
    @Length(120,480, {message : "blog description character is between 120 to 480"})
    @IsString({message : "Blog description must be string"})
    description : string;
}