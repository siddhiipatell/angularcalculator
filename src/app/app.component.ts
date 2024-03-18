import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_calculator';

  calValue = 0;
  funcT = 'noFunction';
  calNumber = 'noValue';
  firstNumber = 0;
  secondNumber = 0;


  onClickValue(val:string, type:any) {
    if(type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }

  }

  onNumberClick(val:string) {
    if(this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val:string) {
 
    if(val == 'c'){
      this.clearAll();
    } else if(this.funcT == 'noFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if(this.funcT != 'noFunction'){
      this.secondNumber = this.calValue;
      //calculation
      this.valueCalculate(val);
    }
  }

  valueCalculate(val:string){
    if(this.funcT == '+'){
        const total = this.firstNumber + this.secondNumber;
        this.totalAssignValues(total, val);
    }
    if(this.funcT == '-'){
        const total = this.firstNumber - this.secondNumber;
        this.totalAssignValues(total, val);
    }
    if(this.funcT == '*'){
        const total = this.firstNumber * this.secondNumber;
        this.totalAssignValues(total, val);
    } 
    if(this.funcT == '/'){
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if(this.funcT == '%'){
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
    }

  }

  totalAssignValues(total: number, val:string){
    this.calValue = total; 
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if(val == '='){ this.onEqualPress() }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
    this.calValue = 0;
  }

}
