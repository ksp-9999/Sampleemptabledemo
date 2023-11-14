import { Component, OnInit, ElementRef} from '@angular/core';
import { Employee } from './employee';
import { ColorDirective } from '../directives/color.directive';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeList:Employee[]=[];
showEdit:boolean=false

constructor(){
  this.addDemoEmployee()
}
ngOnInit(): void {
}
EditEmp(){
this.showEdit=true
}
UpdateEmp(){
this.showEdit=false
}

addDemoEmployee(){
  this.employeeList=[
    {Dob:'11/09/1999',Email:'sai@gmail.com',EmployeeId:8921,FirstName:'saiprasad',LastName:'kilaru',salary:89000},
    {Dob:'12/10/1929',Email:'mounika@gmail.com',EmployeeId:3654,FirstName:'mounika',LastName:'gangavarapu',salary:9000},
    {Dob:'28/25/2000',Email:'vamsi@gmail.com',EmployeeId:9854,FirstName:'vamsi',LastName:'krishna',salary:72000},
  ]
}
// highlight(element:any){
//   // element.nativeElement.style.backgroungColor="lightgreen"
//   console.log(element.target.parentNode.style.backgroundColor="lightgreen");
// }





}
