export class CustomerRegistration{
    name : string;
    id : number;
    email : string;
    phone : string;
    password : string;
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