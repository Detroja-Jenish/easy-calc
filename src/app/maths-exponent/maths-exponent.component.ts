import { Component } from '@angular/core';

@Component({
  selector: 'app-maths-exponent',
  templateUrl: './maths-exponent.component.html',
  styleUrl: './maths-exponent.component.css'
})
export class MathsExponentComponent {
  calc = {
    icon : "fa fa-calculator",
    heading : "Matrix Operations",
    items : [
      {
        icon : "fa fa-th",
        name : "GCD Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "LCM Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Ratio Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Exponent Calculator",
        colorStrip : "bg-info"
      },{
        icon : "fa fa-th",
        name : "Root Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Error Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Fraction Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Standard Deviation Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Meadin Calculator",
        colorStrip : ""
      }
    ]
  }
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
