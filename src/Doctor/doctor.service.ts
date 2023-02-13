import { Injectable } from "@nestjs/common";
import DoctorForm from "./doctorform.dto";


@Injectable()
export class DoctorService{
    
    getIndex():string{
        return "Doctor Index";
    }
    insertUser(doctordto: DoctorForm): any{
        return 'Doctor Inserted name: ' + doctordto.name + ' and id is ' + doctordto.id;
    }
    getuserbyid(doctordto: DoctorForm): any{
        return 'Doctor Get name: ' + doctordto.name + ' and id is ' + doctordto.id;
    }
    updateuser(name: string, id: number): any {
        return 'Doctor updated name: ' + name + ' and id is ' + id;
    }
    deleteuser(name:string,id:number):any {
        return 'Doctor Name deleted:'+name + 'and id is'+id;
    }

}