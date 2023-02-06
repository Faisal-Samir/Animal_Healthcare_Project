import { Injectable } from "@nestjs/common";
import { CustomerRegistration , CustomerUpdate} from "./customerform.dto";

let CustomerUploadedImage =[];
@Injectable()
export class CustomerService{

    getRegistration(register : CustomerRegistration): any{
        // Customer.push(register);
        return `Registration done for name: ${register.name} and id: ${register.id}`; 
    }
    updateUser(name)
    {
        return "Customer updated name: " +name;
    }

    insertImage():any{
        return "Upload complete";
    }

    getAppointment(appointment){
        return "Request for appointment";
    }

    appointment(queries){
        return `patient name: ${queries.name}, age: ${queries.age}, phone no: ${queries.phone}, branch: ${queries.branch}, patient want to get appointment from ${queries.type} doctor ${queries.nameOfDoctor}`;
    }

    
    
}