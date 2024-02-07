import { Component } from '@angular/core';

@Component({
  selector: 'app-gcd',
  templateUrl: './gcd.component.html',
  styleUrl: './gcd.component.css'
})
export class GcdComponent {
  calc = {
    icon : "fa fa-calculator",
    heading : "Matrix Operations",
    items : [
      {
        icon : "fa fa-th",
        name : "GCD Calculator",
        colorStrip : "bg-info"
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
        title : "What is GCD ?",
        desc : "The greatest common divisor(GCD) (also known as greatest common factor(gcf), highest common divisor(hcd) or highest common factor(hcf)) of a set of numbers is the largest."
      },{
        title : "What Value?",
        desc : "Positive integer number that divides all the numbers in the set without remainder. It is the biggest multiple of all numbers in the set."
      }
    ]
  }
}
