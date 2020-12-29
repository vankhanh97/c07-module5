import { Component, OnInit } from '@angular/core';
import {IStudent} from "../model/Student";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colorResult:string = "*NgIf = 'student.mark<4' "

  students:IStudent[]=[{
    id:1,
    name: "s1",
    mark: 0,
    gender: "nam",
    avatar:""
  },{
    id:2,
    name: "s2",
    mark: 5,
    gender: "nam",
    avatar:""
  },{
    id:3,
    name: "s3",
    mark: 7,
    gender: "nam",
    avatar:""
  }]


}
