import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
num1 : number =0;
num2 : number =0;
result : number =0;

calc(){
this.result = this.num1 + this.num2
}
calc1(){
  this.result = this.num1 - this.num2
}
calc2(){
  this.result = this.num1 * this.num2
}
calc3(){
  this.result = this.num1 / this.num2
}

}
