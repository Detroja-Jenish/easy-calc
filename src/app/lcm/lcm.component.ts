import { Component } from '@angular/core';

@Component({
  selector: 'app-lcm',
  templateUrl: './lcm.component.html',
  styleUrl: './lcm.component.css'
})
export class LcmComponent {
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
        colorStrip : "bg-info"
      },{
        icon : "fa fa-th",
        name : "Ratio Calculator",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Exponent Calculator",
        colorStrip : ""
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
    heading : "Matrix Determinant",
    infos : [
      {
        title : "What is LCM ?",
        desc : "The Least Common Multiple ( LCM )\n is also referred to as the Lowest Common Multiple ( LCM ) and Least Common Denominator ( LCD ) . For two integers a and b, denoted LCM(a,b), the LCM is the smallest integer that is evenly divisible by both a and b."
      },{
        title : "What Value?",
        desc : "Positive integer number that divides all the numbers in the set without remainder. It is the biggest multiple of all numbers in the set."
      }
    ]
  }
}
