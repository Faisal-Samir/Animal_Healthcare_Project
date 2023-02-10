import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsString, Length, max, Max, min, Min,Validator,Matches,MinLength } from "class-validator";


//--------------------------------Admin-------------------------------//

export class AdminLogin {   
   
    @IsNotEmpty({message: "Please enter your id"}) 
    @IsInt()
    @Min(1,{message : "Id must be greater than or equal 1"})
    id: number;



    @IsNotEmpty({message:"Please enter your password"})
    @IsString()
    @MinLength(8,{message:"Password must be 8 characters"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])/)
    password: string;
}

//----------------------------Admin End---------------------------------//





//-----------------------------Doctor Start-----------------------------//

export class DoctorID{


    @IsNotEmpty({message: "Please inter your id"}) 
    @IsInt()
    id: number;
}


export class DoctorName{
    
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;
    

}

export class InsertDoctor{

    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;

}



export class UpdateDoctor{
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;
}



export class UpdateDoctorID{
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;

}

export class DeleteDoctor{
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;
}

//------------------------Doctor End-------------------//

//----------------------Customer----------------------//

export class CustomerID{


    @IsNotEmpty({message: "Please inter your id"}) 
    @IsInt()
    id: number;
}


export class CustomerName{
    
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;
    

}

export class InsertCustomer{

    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;

}



export class UpdateCustomer{
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;
}



export class UpdateCustomerID{
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter  name"})
    @Length(3,8)
    @IsString({message : "Name must be string"})
    name: string;

}

export class DeleteCustomer{
    @IsNotEmpty({message: "Please enter  id"}) 
    @IsInt()
    id: number;
}


//------------------------Customer End-----------------//