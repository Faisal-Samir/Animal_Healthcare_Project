import { IsInt, IsNotEmpty, Length } from "class-validator";

export class AdminForm {   

   
    
    @IsNotEmpty({message: "Please enter your id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter your name"})
    @Length(3,8)
    name: string;

  



}