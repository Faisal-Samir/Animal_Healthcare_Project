import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length, Matches} from "class-validator";
export class CustomerRegistration{
    @IsNotEmpty({message : "please provide name"})
    @Length(8, 12 , {message : "please name length provide between 8 to 12 character."})
    @IsString({message : "only string is required for name. "})
    name : string;

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
    @IsNotEmpty({message : "please provide name"})
    @Length(8, 12 , {message : "please name length provide between 8 to 12 character."})
    @IsString({message : "only string is required for name. "})
    name : string;

    @IsNotEmpty({message : "please provide email"})
    @Length(18, 32 , {message : "please email provide between 18 to 32 character."})
    @IsEmail({},{message : 'Follow email format'})
    email : string;

    @IsNotEmpty({message : "please provide password"})
    @IsString({message : "password will be string "})
    // @Matches('[a-zA-z]*[4-9]{4}','',{message : "password is too week"})
    @Matches(RegExp('[a-zA-z]*[1-9]{6}'),{message : "password is too week"})
    password : string;

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

export class CustomerUploadedAnimalImage{
    @IsNotEmpty({message : "please provide file"})
    fileName : string;

    @IsNotEmpty({message : "please provide caption"})
    @Length(10, 40 , {message : "please caption length provide between 10 to 40 character."})
    @IsString({message : "only string is required for caption. "})
    caption : string;

    @IsNotEmpty({message : "please provide type"})
    @Length(10, 20 , {message : "please type length provide between 10 to 20 character."})
    @IsString({message : "only string is required for type. "})
    type : string;

    @IsNotEmpty({message : "please provide color"})
    @Length(5, 30 , {message : "please color length provide between 5 to 30 character."})
    @IsString({message : "only string is required for color. "})
    color : string;

    @IsNotEmpty({message : "please provide gender"})
    @Length(4, 6 , {message : "please gender length provide between 4 to 6 character."})
    @IsString({message : "only string is required for gender. "})
    gender : string; 
}

export class CustomerAppointment{
    @IsNotEmpty({message : "please provide animal Type Name"})
    @Length(5, 10 , {message : "please animal Type Name length provide between 5 to 20 character."})
    @IsString({message : "only string is required for animal Type Name. "})
    animalTypeName : string;

    @IsNotEmpty({message : "please provide age"})
    @IsNumberString({},{message : "provide age as a number string"},)
    age : number;

    @IsNotEmpty({message : "please provide Phone Number"})
    @Length(11,11,{message : "phone number must be 11 digit"})
    phone : string;

    @IsNotEmpty({message : "please provide branch"})
    @IsString({message : "provide branch as string"},)
    branch : string;

    @IsNotEmpty({message : "please provide problem type"})
    @Length(10, 20 , {message : "please problem type length provide between 10 to 20 character."})
    @IsString({message : "only string is required for problem type. "})
    problemType : string;

    @IsNotEmpty({message : "please provide Doctor name"})
    @Length(10, 20 , {message : "please Doctor name's length provide between 10 to 20 character."})
    @IsString({message : "only string is required for Doctor name. "})
    nameOfDoctor : string;
}

export class CustomerBlog{

    @IsNotEmpty({message : "Blog title is required"})
    @Length(30,50, {message : "blog title character is between 30 to 50"})
    @IsString({message : "Blog tile must be string"})
    title : string;

    @IsNotEmpty({message : "Blog description is required"})
    @Length(120,480, {message : "blog description character is between 120 to 480"})
    @IsString({message : "Blog description must be string"})
    description : string;
}
// all done without database