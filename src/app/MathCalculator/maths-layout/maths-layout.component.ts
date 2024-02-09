import { Component } from '@angular/core';

@Component({
  selector: 'app-maths-layout',
  templateUrl: './maths-layout.component.html',
  styleUrl: './maths-layout.component.css'
})
export class MathsLayoutComponent {
  calc={
    heading: "Math Calculator",
    icon: "fa fa-calculator",
    items:[
    {
      icon : "",
      name : "GCD Calculator",
      link : "/maths-calc/gcd"
    },
    {
      icon : "",
      name : "LCM Calculator",
      link : "/maths-calc/lcm"
    
    },
    {
      icon : "",
      name : "Ratio Caclculator",
      link : "/maths-calc/ratio"
    
    },
    {
      icon : "",
      name : "Exponent Calculator",
      link : "/maths-calc/exponent"
    
    },
    {
      icon : "",
      name : "Root Calculator",
      link : "/maths-calc/root"
    
    },
    {
      icon : "",
      name : "Error Find Calculator",
      link : "/maths-calc/error-find"
    
    },
    {
      icon : "",
      name : "Fraction Calculator",
      link : "/maths-calc/fraction"
    
    },
    {
      icon : "",
      name : "Standard Devialtion Calculator",
      link : "/maths-calc/"
    
    },
    {
      icon : "",
      name : "Median Calculator",
      link : "/maths-calc/"
    
    },
    
    ],
    
  }
}
