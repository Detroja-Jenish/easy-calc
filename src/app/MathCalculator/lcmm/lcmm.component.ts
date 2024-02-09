import { Component } from '@angular/core';

@Component({
  selector: 'app-lcmm',
  templateUrl: './lcmm.component.html',
  styleUrl: './lcmm.component.css'
})
export class LcmmComponent {
  information = {
    heading : "LCM Calculator",
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
