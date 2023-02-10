import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Matches, Min} from "class-validator";
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
    @IsEmail({},{message : 'Follow email format'})
    email : string;

    @IsNotEmpty({message : "please provide Phone Number"})
    @Length(11,11,{message : "phone number must be 11 digit"})
    phone: string;

    @IsNotEmpty({message : "please provide password"})
    @IsString({message : "password will be string "})
    // @Matches('[a-zA-z]*[4-9]{4}','',{message : "password is too week"})
    @Matches(RegExp('[a-zA-z]*[1-9]{6}'),{message : "password is too week"})
    password : string;

    @IsNotEmpty({message : "please provide gender"})
    @IsString({message : "gender will be string "})
    gender : string;

    @IsNotEmpty({message : "please provide Address"})
    @IsString({message : "Address will be string "})
    address : string;

    @IsNotEmpty({message : "please provide City"})
    @IsString({message : "City will be string "})
    city : string; 

    @IsNotEmpty({message : "please provide Division"})
    @IsString({message : "Division will be string "})
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