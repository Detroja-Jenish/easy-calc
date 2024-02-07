import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-rank',
  templateUrl: './matrix-rank.component.html',
  styleUrl: './matrix-rank.component.css'
})
export class MatrixRankComponent {
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
        colorStrip : ""
      },{
        icon : "fa fa-th",
        name : "Rank of Matrix",
        colorStrip : "bg-info"
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
        title : "What is Matrix Rank ?",
        desc : "The rank of a matrix is defined as (a) the maximum number of linearly independent column vectors in the matrix."
      },{
        title : "What is Matrix Size or dimension?",
        desc : "The number of rows and columns that a matrix has is called its dimension."
      }
    ]
  }
}
