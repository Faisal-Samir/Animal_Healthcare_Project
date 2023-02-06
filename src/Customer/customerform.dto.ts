import { IsNotEmpty } from "class-validator";

export class CustomerRegistration{
    @IsNotEmpty({message:"Please enter your name"})
    name : string;

    @IsNotEmpty({message:"Please enter your id"})
    id : number;

    @IsNotEmpty({message:"Please enter your email"})
    email : string;

    @IsNotEmpty({message:"Please enter your phone"})
    phone : string;

    @IsNotEmpty({message:"Please enter your password"})
    password : string;

    @IsNotEmpty({message:"Please enter your gender"})
    gender : string;

    @IsNotEmpty({message:"Please enter your address"})
    address : string;

    @IsNotEmpty({message:"Please enter your string"})
    city : string;

    @IsNotEmpty({message:"Please enter your division"})
    division : string; 
}

export class CustomerUpdate{
    @IsNotEmpty({message:"Please enter your name"})
    name : string;
    @IsNotEmpty({message:"Please enter your email"})
    email : string;
    @IsNotEmpty({message:"Please enter your password"})
    password : string;
    @IsNotEmpty({message:"Please enter your address"})
    address : string;
    @IsNotEmpty({message:"Please enter your city"})
    city : string;
    @IsNotEmpty({message:"Please enter your division"})
    division : string; 
}

export class CustomerUploadedAnimalImage{
    @IsNotEmpty({message:"Please enter your file"})
    fileName : string;
    @IsNotEmpty({message:"Please enter your caption"})
    caption : string;
    @IsNotEmpty({message:"Please enter your type"})
    type : string;
    @IsNotEmpty({message:"Please enter your color"})
    color : string;
    @IsNotEmpty({message:"Please enter your gender"})
    gender : string; 
}

export class CustomerAppointment{
    @IsNotEmpty({message:"Please enter your patientName"})
    patientName : string;
    @IsNotEmpty({message:"Please enter your age"})
    age : number;
    @IsNotEmpty({message:"Please enter your phone"})
    phone : string;
    @IsNotEmpty({message:"Please enter your branch"})
    branch : string;
    @IsNotEmpty({message:"Please enter your type"})
    type : string;
    @IsNotEmpty({message:"Please enter your nameOfDoctor"})
    nameOfDoctor : string;
}

export class CustomerBlog{
    @IsNotEmpty({message:"Please enter your blog_id"})
    blog_id : string;
    @IsNotEmpty({message:"Please enter your title"})
    title : string;
    @IsNotEmpty({message:"Please enter your description"})
    description : string;
}