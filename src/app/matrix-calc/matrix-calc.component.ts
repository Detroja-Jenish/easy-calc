import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-calc',
  templateUrl: './matrix-calc.component.html',
  styleUrl: './matrix-calc.component.css'
})
export class MatrixCalcComponent {
  calcList = {
    icon : "fa fa-calculator",
    heading : "Math Calculators",
    items : [
      "GCD Calculator",
      "LCM Calculator",
      "Ratio Calculator",
      "Exponent Calculator",
      "Root Calculator",
      "Error Calculator",
      "Fraction Calculator",
      "Standard deviation Calculator",
      "Median Calculator",

    ]
  }
}
