import { Component } from '@angular/core';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrl: './ratio.component.css'
})
export class RatioComponent {
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
        colorStrip : "bg-info"
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
    heading : "Ratio Calculator",
    infos : [
      {
        title : "What is Ratio ?",
        desc : "A ratio is a quantitative relationship between two numbers that describes how many times one value can contain another. Applications of ratios are fairly ubiquitous, and the concept of ratios is quite intuitive."
      },{
        title : "Example",
        desc : `Value1 : Value2 = Value3 : Value4
        OR Value1/Value2=Value3/Value4
        
        For Example 2 : 3= 4 : X then What is X=?
        Ans.
        2/3=4/X
        X=6`
      }
    ]
  }
}
