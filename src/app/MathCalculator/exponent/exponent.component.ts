import { Component } from '@angular/core';

@Component({
  selector: 'app-exponent',
  templateUrl: './exponent.component.html',
  styleUrl: './exponent.component.css'
})
export class ExponentComponent {
  information = {
    heading : "Exponent Calculator",
    infos : [
      {
        title : "What is Exponent ?",
        desc : "Exponentiation is a mathematical operation, written as an, involving the base a and an exponent n. In the case where n is a positive integer, exponentiation corresponds to repeated multiplication of the base, n times."
      },{
        title : "Example",
        desc : `X n = ?
        Let's A= X n
        A =  X * X * X ........* X  (n time)
        
        For Example 5 4= ?
        Let's A= 5 4
        A= 5 * 5 * 5 *5
        A= 625`
      }
    ]
  }
}
