import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultDisplayComponent } from "../result-display/result-display.component";

@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [FormsModule, ResultDisplayComponent],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css'
})
export class CalculateComponent {
  input1: number = 0;
  input2: number = 0;
  resultado: number | null = null;

  @Output() resultadoCambiado = new EventEmitter<number | null>();
  @Output() limpiarCampos = new EventEmitter<void>();

  performOperation(operator: string) {
    if (!isNaN(this.input1) && !isNaN(this.input2)) {
      switch (operator) {
        case '*':
          this.resultado = this.input1 * this.input2;
          break;
        case '/':
          this.resultado = this.input1 / this.input2;
          break;
        case '-':
          this.resultado = this.input1 - this.input2;
          break;
        case '+':
          this.resultado = this.input1 + this.input2;
          break;
        case '^':
          this.resultado = Math.pow(this.input1, this.input2);
          break;
          case 'raiz':
            this.resultado = Math.sqrt(this.input1);
            break;
        default:
          this.resultado = null;
          break;
      }
      this.resultadoCambiado.emit(this.resultado);
    } else {
      this.resultado = null;
    }
    
  }
}
