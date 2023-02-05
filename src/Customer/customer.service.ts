import { Injectable } from "@nestjs/common";
import { CustomerRegistration , CustomerUpdate} from "./customerform.dto";

// let Customer =[];
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

    getUserByID(id):any {
        return "the id is "+id;
    }
    
}