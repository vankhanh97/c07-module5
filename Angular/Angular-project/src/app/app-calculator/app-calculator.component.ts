import {Component, OnInit} from '@angular/core';
export interface Ical {
  inp1:number;
  inp2:number;
  inp3:string
  result:string
}
@Component({
  selector: 'app-app-calculator',
  templateUrl: './app-calculator.component.html'
})
export class AppCalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
 calculator1:Ical={
    inp1:0,
    inp2:0,
    inp3:"+",
   result:""
 }
result(){
    return this.calculator1;
}

  calculator(inp1: number, inp2: number, inp3: string):string {
    this.calculator1.inp1 = inp1;
    this.calculator1.inp2 = inp2;
    this.calculator1.inp3 = inp3;
    switch (inp3) {
      case ("+"): return (this.calculator1.result=((inp1+inp2).toString()));
      case ("-"): return (this.calculator1.result=((inp1-inp2).toString()));
      case ("*"): return (this.calculator1.result=((inp1*inp2).toString()));
      case ("/"): return (this.calculator1.result=((inp1/inp2).toString()));
    }
  }
}
