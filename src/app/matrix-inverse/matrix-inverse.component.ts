import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-inverse',
  templateUrl: './matrix-inverse.component.html',
  styleUrl: './matrix-inverse.component.css'
})
export class MatrixInverseComponent {
  n:any=0
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
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Inverse of Matrix",
        colorStrip : "bg-info"
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
        title : "What is Matrix Inverse ?",
        desc : "The Inverse of A is A-1 only when: \n A × A-1 = A-1 × A = I  Sometimes there is no Inverse at all."
      },{
        title : "What is Matrix Size or dimension?",
        desc : "The number of rows and columns that a matrix has is called its dimension."
      }
    ]
  }
}
