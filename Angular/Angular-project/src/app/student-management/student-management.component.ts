import {Component, OnInit} from '@angular/core';
import {IStudent} from "./model/Student";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css'],
})
export class StudentManagementComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  setMarkStudent(value1:number){
    this.student.mark = value1
  }

  student:IStudent= {
    id:1,
    name:"Luyen oc cho",
    gender:"unknown",
    mark:0,
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlXEG8PvoJ24a3QOPZ3yP3Zho5urg5hJBTw&usqp=CAU"
  }
}
