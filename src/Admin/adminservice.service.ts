import { Injectable } from "@nestjs/common";
import {AdminLogin,DoctorID,DoctorName,InsertDoctor, UpdateDoctor,UpdateDoctorID,DeleteDoctor} from "./adminform.dto"

@Injectable()

export class AdminService{


//--------------------------------------For Admin------------------------------//
getIndex():string{
    return "Admin Index";

 }

getLogin(login : AdminLogin): any{
    
    return `Login done for id: ${login.id} and Password: ${login.password}`; 
 }

 //--------------------------------Admin End---------------------------------------//





//-----------------------------------Doctor Start----------------------------------//
getDoctorByID(doctor : DoctorID):any{
    return `Here is the details : ${doctor.id}`;
}


getDoctorByName(doctorName : DoctorName):any{
    return `Doctor name: ${doctorName.id} and her or his id: ${doctorName.name}`; 
    
}


getInsertDoctor(insertDoctor:InsertDoctor):any {
    
    return "Admin Inserted id: " + insertDoctor.id +" and name is: " + insertDoctor.name;
}


getDoctorUpdate(updateDoctor:UpdateDoctor):any {
    return "Admin updated name: " +updateDoctor.name +" and id is " +updateDoctor.id;
}





getDoctorUpdateById(updateDoctorId:UpdateDoctorID):any {
    return "Update admin where id: " +updateDoctorId.id+" and change name to :" +updateDoctorId.name;
}




getDeleteDoctorById(deleteDoctor:DeleteDoctor):any{
    return "Delete Id:" +deleteDoctor.id;
}


//--------------------------------Doctor End----------------------------------//







}