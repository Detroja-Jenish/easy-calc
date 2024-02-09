import { Component } from '@angular/core';

@Component({
  selector: 'app-maths-root',
  templateUrl: './maths-root.component.html',
  styleUrl: './maths-root.component.css'
})
export class MathsRootComponent {
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
        title : "What is Root ?",
        desc : "The square root of a number is a value that when multiplied by itself equals the original number."
      },{
        title : "Example",
        desc : `x√Y  =  ?
        Let's A= x√Y
        A =  (Y)1/x
        
        For Example 3√27= ?
        Let's A= 3√27
        A= (27)1/3
        A=(33)1/3
        A=3`
      }
    ]
  }

}
