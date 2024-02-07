import { Component } from '@angular/core';

@Component({
  selector: 'app-transpose',
  templateUrl: './transpose.component.html',
  styleUrl: './transpose.component.css'
})
export class TransposeComponent {
  calc = {
    icon : "fa fa-calculator",
    heading: 'Math Calculator',
    items: [
      
        "GCD Calculator",
        "LCM Calculator",
        "Ratio Calculator",
        "Exponent Calculator",
        "Root Calculator",
        "Error Calculator",
        "Fraction Calculator",
        "Standard Deviation Calculator",
        "Meadin Calculator"

      
    ]
  }
  operationList = {
    icon : "fa fa-calculator",
    heading : "Matrix Operations",
    items : [
      {
        icon : "fa fa-th",
        name : "Determinant of Matrix",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Transpose of Matrix",
        colorStrip : "bg-info"
      },{
        icon : "fa fa-th",
        name : "Inverse of Matrix",
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Rank of Matrix",
        colorStrip : ""
      }
    ]
  }
  information = {
    heading : "Matrix Determinant",
    infos : [
      {
        title : "What is Matrix ?",
        desc : "A matrix is a collection of numbers arranged into a fixed number of rows and columns. Usually the numbers are real numbers."
      },{
        title : "What is Matrix Transpose ?",
        desc : "The transpose of a matrix is a new matrix whose rows are the columns of the original"
      },{
        title : "What is Matrix Size or dimension?",
        desc : "The number of rows and columns that a matrix has is called its dimension."
      }
    ]
  }
}
