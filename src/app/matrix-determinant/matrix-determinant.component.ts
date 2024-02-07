import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-determinant',
  templateUrl: './matrix-determinant.component.html',
  styleUrl: './matrix-determinant.component.css'
})
export class MatrixDeterminantComponent {
  n : any = '0'
  row : Number = 0
  col : Number = 0
  operationList = {
    icon : "fa fa-calculator",
    heading : "Matrix Operations",
    items : [
      {
        icon : "fa fa-th",
        name : "Determinant of Matrix",
        colorStrip : "bg-info"
      },{
        icon : "fa fa-th",
        name : "Transpose of Matrix",
        colorStrip : ""
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
  arr : Number[][] = []
  isTakeMatrix = false;
  takeInput(){
    console.log("------")
    console.log(this.n)
    this.isTakeMatrix = true;
    this.row = Number.parseInt(this.n)
    this.col = Number.parseInt(this.n)
    this.arr = []
    
  }
  information = {
    heading : "Matrix Determinant",
    infos : [
      {
        title : "What is Matrix ?",
        desc : "A matrix is a collection of numbers arranged into a fixed number of rows and columns. Usually the numbers are real numbers."
      },{
        title : "What is Matrix Determinant ?",
        desc : "In linear algebra, the determinant is a useful value that can be computed from the elements of a square matrix."
      },{
        title : "What is Matrix Size or dimension?",
        desc : "The number of rows and columns that a matrix has is called its dimension."
      }
    ]
  }

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
}
