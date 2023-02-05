import { Injectable } from "@nestjs/common";
import { CustomerRegistration } from "./customerform.dto";

let Customer =[];
@Injectable()
export class CustomerService{

    getRegistration(register : CustomerRegistration): any{
        Customer.push(register);
        return `Registration done for name: ${register.name} and id: ${register.id}`;
        
    }
    

}