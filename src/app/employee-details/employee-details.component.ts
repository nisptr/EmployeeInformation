import { Component, OnInit } from '@angular/core';
//import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm}  from '@angular/forms'
class Employee {
  constructor(
    public name: string = '',
    public dob:Date= null,
    public email: string = '',
  ) {}
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  public Employees:Array<object>;
  emp={};
  searchData='';
  filterData="";
  index;
  
  constructor() { 
    //initilize dummy employee data
    this.Employees=[
      {name:'john',dob:' 2014-12-07	',email:'johan@gmail.com'},
      {name:'marry',dob: '2014-12-07',email:'marry@gmail.com'},
      {name:'david',dob: '2014-12-07',email:'dave@gmail.com'}

    ];
     
  }

  ngOnInit() {
    this.emp= new Employee();
    this.index=null;
  }
  //submit new or existing details
  submitForm(empForm){
   console.log(empForm); 
   if(this.index!=null){
    this.Employees[this.index]=  empForm;
   }else{
    this.Employees.push(empForm);
   }
   this.emp=new Employee();
   this.index=null;
  }

  //search in table data
  searchDataFromTable(searchTxt){
//alert(searchTxt);
  this.filterData=searchTxt;
  }

  //clear filter while new record adding
  addNew(){
    this.emp= new Employee();
    this.index=null;
  }

  //get details on edit employee
  onEdit(empDetail, i) {
    console.log(empDetail,i);
    this.emp= empDetail;
    this.index=i;
}

//delete record
  onDelete(index){
// alert(index);
this.Employees.splice(index,1)
  }
}
